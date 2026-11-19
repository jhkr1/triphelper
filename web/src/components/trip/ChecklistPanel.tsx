"use client";

import { useState, type FormEvent } from "react";
import {
  DndContext, DragOverlay, KeyboardSensor, MouseSensor, TouchSensor, closestCenter, pointerWithin, useDroppable, useSensor, useSensors,
  type CollisionDetection, type DragEndEvent, type DragOverEvent, type DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@/components/ui/Icon";
import { dayLabel } from "@/lib/trip-model";
import type { Checklist } from "@/types/trip";

interface Props {
  checklist: Checklist;
  onChange: (next: Checklist) => void;
  countryName: string;
  /** 여행 기간 중 비 예보가 있는 첫날 (없으면 null) */
  rainyDay: { index: number; start: string; text: string } | null;
}

type Groups = Record<string, string[]>;

const RAIN_ITEMS = ["우산", "방수 겉옷"];

// 끌어서 옮기기용 id: 준비물 i: · 카테고리 칸 g: · 가방 탭 b:
const itemId = (x: string) => `i:${x}`;
const groupId = (g: string) => `g:${g}`;
const bagId = (b: string) => `b:${b}`;
const nameOf = (id: string) => id.slice(2);

/** 가방 탭 위를 먼저, 그다음 준비물, 마지막으로 카테고리 칸 */
const collision: CollisionDetection = (args) => {
  const hits = pointerWithin(args);
  if (!hits.length) return closestCenter(args);
  const tab = hits.find((h) => String(h.id).startsWith("b:"));
  if (tab) return [tab];
  const items = hits.filter((h) => String(h.id).startsWith("i:"));
  if (!items.length) return hits;
  return closestCenter({ ...args, droppableContainers: args.droppableContainers.filter((c) => items.some((h) => h.id === c.id)) });
};

/** 순서를 지키며 카테고리 이름 바꾸기 */
const renameKey = (groups: Groups, from: string, to: string): Groups =>
  Object.fromEntries(Object.entries(groups).map(([k, v]) => [k === from ? to : k, v]));

const groupOfItem = (groups: Groups, item: string) => Object.keys(groups).find((g) => groups[g].includes(item));

/* ───────── 작은 부품 ───────── */

function BagTab({ name, selected, dragging, keyboard, done, total, onClick }: {
  name: string; selected: boolean; dragging: boolean; keyboard: boolean; done: number; total: number; onClick: () => void;
}) {
  // 키보드로 옮길 때는 방향키가 가방 탭으로 튀지 않게 탭을 놓을 곳에서 뺀다
  const { setNodeRef, isOver } = useDroppable({ id: bagId(name), disabled: keyboard });
  return (
    <button ref={setNodeRef} className={`bag${dragging && !selected ? " bag--drop" : ""}${isOver && !selected ? " bag--over" : ""}`} role="tab" aria-selected={selected} onClick={onClick}>
      {name}<em>{done}/{total}</em>
    </button>
  );
}

/** 카테고리 칸 (빈 카테고리에도 놓을 수 있게). 키보드로 옮길 때는 준비물 사이로만 움직이도록 뺀다 */
function GroupBox({ name, keyboard, children }: { name: string; keyboard: boolean; children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id: groupId(name), disabled: keyboard });
  return <ul ref={setNodeRef} className={isOver ? "chk is-over" : "chk"}>{children}</ul>;
}

function Item({ name, done, onToggle, onRemove }: { name: string; done: boolean; onToggle: (on: boolean) => void; onRemove: () => void }) {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({ id: itemId(name) });
  return (
    <li ref={setNodeRef} className={isDragging ? "is-ghost" : undefined} style={{ transform: CSS.Translate.toString(transform), transition }}>
      <span ref={setActivatorNodeRef} className="chk__grip" {...attributes} {...listeners} aria-label={`${name} 옮기기 · 스페이스로 들어서 방향키로 옮기기`}>
        <Icon name="grip" />
      </span>
      <label>
        <input type="checkbox" checked={done} onChange={(e) => onToggle(e.target.checked)} />
        <span>{name}</span>
        <button type="button" className="del" aria-label={`${name} 삭제`} onClick={(e) => { e.preventDefault(); onRemove(); }}>
          <Icon name="x" />
        </button>
      </label>
    </li>
  );
}

/** 카테고리 이름: 누르면 바로 고치기 */
function GroupTitle({ name, count, taken, onRename, onRemove }: { name: string; count: number; taken: (n: string) => boolean; onRename: (to: string) => void; onRemove: () => void }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(name);
  const [err, setErr] = useState("");
  const save = () => {
    const to = draft.trim();
    if (!to || to === name) { setEditing(false); setErr(""); return; }
    if (taken(to)) { setErr("같은 이름의 카테고리가 있어요"); return; }
    onRename(to);
    setEditing(false);
  };
  if (editing) {
    return (
      <div className="grp__hd">
        <input
          autoFocus
          className="grp__input"
          value={draft}
          maxLength={20}
          aria-label={`${name} 카테고리 이름`}
          onChange={(e) => { setDraft(e.target.value); setErr(""); }}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); save(); } if (e.key === "Escape") { setDraft(name); setEditing(false); setErr(""); } }}
          onBlur={save}
        />
        {err && <small className="grp__err" role="alert">{err}</small>}
      </div>
    );
  }
  return (
    <div className="grp__hd">
      <button type="button" className="grp__name" onClick={() => { setDraft(name); setEditing(true); }} aria-label={`${name} 카테고리 이름 바꾸기`}>
        <h4>{name}</h4><Icon name="note" />
      </button>
      <button
        type="button"
        className="grp__del"
        aria-label={`${name} 카테고리 삭제`}
        onClick={() => { if (!count || confirm(`"${name}" 카테고리와 준비물 ${count}개를 삭제할까요?`)) onRemove(); }}
      >
        <Icon name="x" />
      </button>
    </div>
  );
}

/** 카테고리 맨 아래 "+ 준비물 추가": 누르면 그 자리에서 입력. 엔터로 넣고 계속 입력, Esc나 바깥을 누르면 닫힘 */
function GroupAdd({ group, onAdd }: { group: string; onAdd: (name: string) => boolean }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  if (!open) {
    return (
      <button type="button" className="chk__add" onClick={() => setOpen(true)}>
        <Icon name="plus" />준비물 추가
      </button>
    );
  }
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const name = value.trim();
    if (!name) { setOpen(false); return; }
    if (onAdd(name)) setValue("");
  };
  return (
    <form className="chk__addform" onSubmit={submit}>
      <input
        autoFocus
        value={value}
        maxLength={40}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Escape") { setValue(""); setOpen(false); } }}
        onBlur={() => { if (!value.trim()) setOpen(false); }}
        placeholder="준비물 이름 (예: 휴대용 선풍기) · 엔터로 추가"
        aria-label={`${group}에 넣을 준비물 이름`}
        autoComplete="off"
      />
      <button className="btn btn--pri" type="submit">추가</button>
    </form>
  );
}

/* ───────── 체크리스트 ───────── */

/** 가방별 체크리스트: 카테고리 편집, 끌어서 순서 바꾸기·다른 카테고리/가방으로 옮기기 */
export function ChecklistPanel({ checklist, onChange, countryName, rainyDay }: Props) {
  const bagNames = Object.keys(checklist.bags);
  const [bag, setBag] = useState(bagNames[0] ?? "");
  const current = checklist.bags[bag] ? bag : bagNames[0];
  const [newGroup, setNewGroup] = useState<string | null>(null); // 카테고리 추가 입력 중
  const [hint, setHint] = useState("");

  const itemsOf = (b: string) => Object.values(checklist.bags[b] ?? {}).flat();
  const all = bagNames.flatMap(itemsOf);
  const doneCount = all.filter((x) => checklist.done.includes(x)).length;
  const pct = all.length ? Math.round((doneCount / all.length) * 100) : 0;
  const missingRain = RAIN_ITEMS.filter((x) => !all.includes(x));

  const setBags = (fn: (bags: Checklist["bags"]) => Checklist["bags"], done = checklist.done) =>
    onChange({ ...checklist, bags: fn(structuredClone(checklist.bags)), done });
  const setGroups = (groups: Groups, done?: string[]) => setBags((bags) => ({ ...bags, [current]: groups }), done);

  /* 끌어서 옮기기: 끄는 동안에는 화면용 사본을 움직이고, 놓을 때 한 번에 저장 */
  const [drag, setDrag] = useState<{ item: string; groups: Groups; keyboard: boolean } | null>(null);
  const groups: Groups = drag?.groups ?? checklist.bags[current] ?? {};
  const groupNames = Object.keys(groups);
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 220, tolerance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  function onDragStart(e: DragStartEvent) {
    setDrag({ item: nameOf(String(e.active.id)), groups: structuredClone(checklist.bags[current] ?? {}), keyboard: e.activatorEvent instanceof KeyboardEvent });
  }

  // 다른 카테고리 위로 넘어가면 그 자리로 미리 옮겨서 보여 준다
  function onDragOver({ active, over }: DragOverEvent) {
    if (!drag || !over) return;
    const overId = String(over.id);
    if (overId.startsWith("b:")) return;
    const item = nameOf(String(active.id));
    const from = groupOfItem(drag.groups, item);
    const to = overId.startsWith("g:") ? nameOf(overId) : groupOfItem(drag.groups, nameOf(overId));
    if (!from || !to || from === to) return;
    const next = structuredClone(drag.groups);
    next[from] = next[from].filter((x) => x !== item);
    const at = overId.startsWith("i:") ? next[to].indexOf(nameOf(overId)) : next[to].length;
    next[to].splice(at < 0 ? next[to].length : at, 0, item);
    setDrag({ ...drag, groups: next });
  }

  function onDragEnd({ over }: DragEndEvent) {
    const d = drag;
    setDrag(null);
    if (!d || !over) return;
    const overId = String(over.id);

    // 가방 탭에 놓기 → 그 가방의 같은 이름 카테고리(없으면 마지막 카테고리, 그것도 없으면 '기타') 끝으로
    if (overId.startsWith("b:")) {
      const to = nameOf(overId);
      if (to === current) return;
      setBags((bags) => {
        for (const g of Object.keys(bags[current])) bags[current][g] = bags[current][g].filter((x) => x !== d.item);
        const fromGroup = groupOfItem(checklist.bags[current], d.item) ?? "기타";
        const dest = bags[to];
        const g = dest[fromGroup] ? fromGroup : Object.keys(dest).at(-1) ?? "기타";
        (dest[g] ??= []).push(d.item);
        return bags;
      });
      setHint(`'${d.item}'을(를) ${to}(으)로 옮겼어요`);
      return;
    }

    // 같은 카테고리 안에서 순서 바꾸기 (다른 카테고리로는 onDragOver에서 이미 옮겨 둠)
    const next = structuredClone(d.groups);
    if (overId.startsWith("i:")) {
      const g = groupOfItem(next, d.item);
      const target = nameOf(overId);
      if (g && next[g].includes(target)) next[g] = arrayMove(next[g], next[g].indexOf(d.item), next[g].indexOf(target));
    }
    setGroups(next);
  }

  /* 준비물 · 카테고리 고치기 */
  function toggle(item: string, on: boolean) {
    onChange({ ...checklist, done: on ? [...checklist.done, item] : checklist.done.filter((x) => x !== item) });
  }
  function removeItem(group: string, item: string) {
    setGroups({ ...groups, [group]: groups[group].filter((x) => x !== item) }, checklist.done.filter((x) => x !== item));
  }
  /** 카테고리에 준비물 넣기. 같은 이름이 있으면 체크 상태가 섞이므로 막는다 (넣었으면 true) */
  function addItem(group: string, name: string) {
    if (all.includes(name)) { setHint(`'${name}'은(는) 이미 목록에 있어요`); return false; }
    setGroups({ ...groups, [group]: [...(groups[group] ?? []), name] });
    setHint("");
    return true;
  }
  function addGroup(e: FormEvent) {
    e.preventDefault();
    const name = (newGroup ?? "").trim();
    if (!name) { setNewGroup(null); return; }
    if (groups[name]) { setHint(`'${name}' 카테고리가 이미 있어요`); return; }
    setGroups({ ...groups, [name]: [] });
    setNewGroup(null);
    setHint("");
  }
  function removeGroup(name: string) {
    const { [name]: gone, ...rest } = groups;
    setGroups(rest, checklist.done.filter((x) => !gone.includes(x)));
  }
  function addRainItem(item: string) {
    setBags((bags) => {
      bags["보조 가방"] ??= {};
      (bags["보조 가방"]["기타"] ??= []).push(item);
      return bags;
    });
    setBag("보조 가방");
  }

  return (
    <section className="grid">
      <div className="card">
        <div className="prog">
          <strong>{pct}%</strong>
          <div className="prog__bar"><i style={{ width: `${pct}%` }} /></div>
          <span style={{ color: "var(--mute)", fontSize: ".9rem" }}>{doneCount} / {all.length} 챙김</span>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={collision}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          onDragCancel={() => setDrag(null)}
        >
          <div className="bags" role="tablist" aria-label="가방">
            {bagNames.map((b) => {
              const items = itemsOf(b);
              return (
                <BagTab
                  key={b}
                  name={b}
                  selected={b === current}
                  dragging={Boolean(drag) && !drag?.keyboard}
                  keyboard={Boolean(drag?.keyboard)}
                  done={items.filter((x) => checklist.done.includes(x)).length}
                  total={items.length}
                  onClick={() => { setBag(b); setHint(""); }}
                />
              );
            })}
          </div>
          {drag && !drag.keyboard && <p className="ck-hint">다른 가방 탭 위에 놓으면 그 가방으로 옮겨요</p>}

          {rainyDay && missingRain.length > 0 && (
            <div className="rec">
              <h4><Icon name="rain" />{dayLabel(rainyDay.start, rainyDay.index)} 비 예보 · {rainyDay.text}</h4>
              <p>예보에 맞춰 준비물을 제안합니다. 눌러서 추가하세요.</p>
              <div className="sugg" style={{ margin: 0 }}>
                {missingRain.map((x) => <button key={x} type="button" onClick={() => addRainItem(x)}>+ {x}</button>)}
              </div>
            </div>
          )}

          {groupNames.map((group) => (
            <div className="grp" key={group}>
              <GroupTitle
                name={group}
                count={groups[group].length}
                taken={(n) => Boolean(groups[n])}
                onRename={(to) => setGroups(renameKey(groups, group, to))}
                onRemove={() => removeGroup(group)}
              />
              <SortableContext items={groups[group].map(itemId)} strategy={verticalListSortingStrategy}>
                <GroupBox name={group} keyboard={Boolean(drag?.keyboard)}>
                  {groups[group].length === 0 && <li className="chk__empty">준비물을 여기로 끌어 놓거나 아래 ‘준비물 추가’를 누르세요</li>}
                  {groups[group].map((x) => (
                    <Item key={x} name={x} done={checklist.done.includes(x)} onToggle={(on) => toggle(x, on)} onRemove={() => removeItem(group, x)} />
                  ))}
                </GroupBox>
              </SortableContext>
              {!drag && <GroupAdd key={`${current}/${group}`} group={group} onAdd={(name) => addItem(group, name)} />}
            </div>
          ))}

          <DragOverlay dropAnimation={null}>
            {drag && <div className="drag-card"><Icon name="grip" /><b>{drag.item}</b></div>}
          </DragOverlay>
        </DndContext>

        {newGroup === null ? (
          <button type="button" className="grp__add" onClick={() => setNewGroup("")}><Icon name="plus" />카테고리 추가</button>
        ) : (
          <form className="addrow" onSubmit={addGroup}>
            <input autoFocus value={newGroup} maxLength={20} onChange={(e) => setNewGroup(e.target.value)} placeholder="새 카테고리 이름 (예: 캠핑 용품)" aria-label="새 카테고리 이름"
              onKeyDown={(e) => { if (e.key === "Escape") setNewGroup(null); }} />
            <button className="btn btn--pri" type="submit">만들기</button>
            <button className="btn" type="button" onClick={() => setNewGroup(null)}>취소</button>
          </form>
        )}

        <p className="ck-msg" role="status">{hint}</p>
      </div>
      <aside className="side">
        <div className="card">
          <h3>가방별 현황</h3>
          <div className="kv">
            {bagNames.map((b) => {
              const items = itemsOf(b);
              return <div key={b}><span>{b}</span><b>{items.filter((x) => checklist.done.includes(x)).length}/{items.length}</b></div>;
            })}
          </div>
        </div>
        <div className="card">
          <h3>{countryName} 필수템 기본값</h3>
          <p style={{ margin: 0, color: "var(--mute)", fontSize: ".85rem", lineHeight: 1.6 }}>
            나라 정보의 &quot;여행 준비 필수템&quot;으로 처음 목록을 채웁니다. 변환 어댑터, 현지 통화 같은 항목은 나라마다 다릅니다.
          </p>
        </div>
      </aside>
    </section>
  );
}
