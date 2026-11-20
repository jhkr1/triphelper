begin;

lock table public.trips, public.trip_members in access exclusive mode;

create table public.trip_checklists (
  trip_id uuid not null references public.trips on delete cascade deferrable initially deferred,
  user_id uuid not null references public.profiles on delete cascade,
  checklist jsonb not null check (octet_length(checklist::text) <= 200000),
  primary key (trip_id, user_id)
);
alter table public.trip_checklists enable row level security;
revoke all on public.trip_checklists from public, anon, authenticated;
grant select, insert (trip_id, user_id, checklist), update (checklist, trip_id, user_id)
  on public.trip_checklists to authenticated;
create policy own_checklist on public.trip_checklists to authenticated
  using (user_id = auth.uid() and public.trip_role(trip_id) is not null)
  with check (user_id = auth.uid() and public.trip_role(trip_id) is not null
    and (public.trip_role(trip_id) = 'owner' or octet_length(checklist::text) <= 50000));

insert into public.trip_checklists
  select id, user_id, data -> 'checklist' from public.trips where data ? 'checklist';
insert into public.trip_checklists
  select trip_id, user_id, checklist from public.trip_members where checklist is not null
  on conflict do nothing;
drop trigger trips_keep_owner_checklist on public.trips;
drop function public.keep_owner_checklist();
update public.trips set data = data - 'checklist' where data ? 'checklist';

drop trigger trip_members_guard on public.trip_members;
drop function public.guard_member();
drop policy "내 준비물 고치기" on public.trip_members;
alter table public.trip_members drop column checklist;

-- Store the owner's list atomically with the itinerary, before Realtime sees the shared row.
create function public.split_trip_checklist() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  if jsonb_typeof(new.data) is distinct from 'object' then
    raise exception 'Invalid itinerary';
  end if;
  if new.data ? 'checklist' then
    if new.user_id = auth.uid() then
      insert into public.trip_checklists as c (trip_id, user_id, checklist)
        values (new.id, new.user_id, new.data -> 'checklist')
        on conflict (trip_id, user_id) do update set checklist = excluded.checklist;
    end if;
    new.data := new.data - 'checklist';
  end if;
  return new;
end;
$$;
revoke all on function public.split_trip_checklist() from public, anon, authenticated;
create trigger split_trip_checklist before insert or update of data on public.trips
  for each row execute function public.split_trip_checklist();

create or replace function public.count_comments() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  if tg_op = 'INSERT' then
    update public.posts set comment_count = comment_count + 1
      where id = new.post_id and comment_count < 500;
    if not found then
      raise exception '이 글에는 더 이상 댓글을 달 수 없어요.' using errcode = 'P0001';
    end if;
  else
    update public.posts set comment_count = greatest(comment_count - 1, 0) where id = old.post_id;
  end if;
  return null;
end;
$$;

commit;
