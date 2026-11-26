"use client";

import { Fragment, useEffect, useLayoutEffect, useRef, useState, type FormEvent, type RefObject } from "react";
import {
  DndContext, DragOverlay, KeyboardSensor, MouseSensor, TouchSensor, closestCenter, pointerWithin, useDndContext, useDroppable, useSensor, useSensors,
  type CollisionDetection, type Modifier, type DragEndEvent, type DragOverEvent, type DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, horizontalListSortingStrategy, rectSortingStrategy, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon, type IconName } from "@/components/ui/Icon";
import { dayColor } from "@/components/trip/TripMap";
import { dayLabel, dateParts, forecastGap, newId, sortByTime, addDays, addHours, nextSlot, insertAt, setStay, setStayMemo, sameStay } from "@/lib/trip-model";
import { TimePicker } from "@/components/trip/TimePicker";
import { fetchNearby, isConfident, searchPlace, type NearbyPlace, type PlaceCandidate } from "@/lib/places";
import { isWikimediaImage, knownPhoto, placePhoto, type Photo } from "@/lib/photos";
import { directionsUrl, distanceMeters, formatDistance, parseLocation, walkingMinutes, WALKABLE_METERS } from "@/lib/geo";
import { weatherIcon, type DailyForecast } from "@/lib/weather";
import { canReorder, nearestOrder, type RouteOrder } from "@/lib/route-order";
import type { Place, Trip } from "@/types/trip";
import type { LatLng } from "@/types/destination";

interface Props {
  trip: Trip;
  countryCode: string;
  day: number;
  onDayChange: (i: number) => void;
  forecast: Record<string, DailyForecast>;
  onAddDay: () => void;
  onRemoveDay: (i: number) => void;
  /** 선택한 날의 장소 목록 바꾸기 */
  updatePlaces: (fn: (places: Place[]) => Place[]) => void;
  /** 일정 전체 바꾸기 (여행지 바구니·다른 날로 옮길 때) */
  updateTrip: (fn: (trip: Trip) => Trip) => void;
  onPickRequest: (placeId: string) => void;
  /** 여행 설정(날짜) 열기 */
  onOpenSetup: () => void;
  toast: (msg: string) => void;
}

/* ───────── 사진 ───────── */

export function PlacePhoto({ place }: { place: Place }) {
  const key = `${place.wiki ?? ""}|${place.name}|${place.location?.lat ?? ""},${place.location?.lng ?? ""}|${place.image ?? ""}`;
  const [result, setResult] = useState<{ key: string; photo: Photo | null } | null>(null);
  useEffect(() => {
    let alive = true;
    placePhoto(place).then((photo) => { if (alive) setResult({ key, photo }); });
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- key가 장소의 사진 관련 값을 모두 담는다
  }, [key]);

  // 이미 찾아 둔 사진은 바로 보여 준다 (불러오는 회색 칸 깜빡임 없이)
  const photo = result?.key === key ? result.photo : knownPhoto(place);
  if (photo === undefined) return place.location || place.wiki ? <div className="stop__ph stop__ph--loading" /> : null;
  if (!photo || !isWikimediaImage(photo.src)) return null;
  return (
    <figure className="stop__ph">
      {/* eslint-disable-next-line @next/next/no-img-element -- 위키미디어 외부 이미지 */}
      <img src={photo.src} alt={place.name} loading="lazy" />
      <figcaption>
        {photo.page ? <a href={photo.page} target="_blank" rel="noopener noreferrer">{photo.credit}</a> : photo.credit}
      </figcaption>
    </figure>
  );
}

/* ───────── 근처 추천 ───────── */

type NearState = { status: "loading" } | { status: "done"; items: NearbyPlace[] } | { status: "error"; why: string };
const nearCache = new Map<string, NearState>();
const nearKey = (p: Place) => (p.location ? `${p.location.lat.toFixed(4)},${p.location.lng.toFixed(4)}` : "");

function loadNearby(place: Place, exclude: Set<string>, onDone: () => void) {
  const key = nearKey(place);
  if (!key || (nearCache.has(key) && nearCache.get(key)!.status !== "error")) return;
  nearCache.set(key, { status: "loading" });
  fetchNearby(place.location!, exclude)
    .then((items) => nearCache.set(key, { status: "done", items }))
    .catch((err: unknown) => nearCache.set(key, { status: "error", why: err instanceof Error ? err.message : String(err) }))
    .finally(onDone);
}

const KIND_ICON: Record<NearbyPlace["kind"], IconName> = { landmark: "landmark", image: "image", tree: "tree", bag: "bag", eye: "eye" };

function NearbyPanel({ place, state, inTrip, onTake }: { place: Place; state: NearState | undefined; inTrip: Set<string>; onTake: (n: NearbyPlace) => void }) {
  if (!state || state.status === "loading") return <p className="near__msg">주변 1km의 장소를 찾는 중…</p>;
  if (state.status === "error") return <p className="near__msg">추천을 불러오지 못했습니다. 다시 시도해 주세요. <small>({state.why})</small></p>;
  if (!state.items.length) return <p className="near__msg">주변에서 추천할 곳을 찾지 못했습니다.</p>;
  return (
    <>
      <p className="near__hd">{place.name} 주변 1km · 유명한 순</p>
      <div className="near__list">
        {state.items.map((x) => (
          <div className="nc" key={x.name}>
            <div className="nc__img" style={{ backgroundImage: `url("${x.image}")` }}>{!x.image && <Icon name={KIND_ICON[x.kind]} />}</div>
            <div className="nc__body">
              <b>{x.name}</b>
              <small>도보 약 {walkingMinutes(x.meters)}분 · {formatDistance(x.meters)}</small>
              {inTrip.has(x.name)
                ? <button type="button" disabled>담음</button>
                : <button type="button" onClick={() => onTake(x)}>+ 일정에 담기</button>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ───────── 장소 사이 이동 ───────── */

/** 앞 장소 → 다음 장소: 가까우면 도보 시간, 멀면 거리 + 대중교통 길찾기(지도 앱) */
export function Leg({ from, to, countryCode, hidden = false }: { from: Place; to: Place; countryCode: string; hidden?: boolean }) {
  if (!from.location || !to.location) return null;
  const meters = distanceMeters(from.location, to.location);
  const walk = meters <= WALKABLE_METERS;
  const a = { name: from.name, location: from.location };
  const b = { name: to.name, location: to.location };
  const appName = countryCode === "kr" ? "카카오맵" : "구글 지도";
  return (
    <li className={hidden ? "leg leg--hidden" : "leg"} aria-label={`${from.name}에서 ${to.name}까지`} aria-hidden={hidden || undefined}>
      <span className="leg__line" aria-hidden="true" />
      <span className="leg__info">
        {walk ? `도보 약 ${walkingMinutes(meters)}분 · ${formatDistance(meters)}` : `약 ${formatDistance(meters)}`}
        <a href={directionsUrl(a, b, countryCode, walk ? "walk" : "transit")} target="_blank" rel="noopener noreferrer" title={`${appName}에서 길찾기`}>
          {walk ? "길찾기" : "대중교통 길찾기"}<span className="sr-only"> ({appName}, 새 창)</span>
        </a>
      </span>
    </li>
  );
}

/* ───────── 끌어서 옮기기 (여행지 바구니 ↔ 일정 ↔ 다른 날) ───────── */

type Zone = "basket" | "day";
const ZONE_ID: Record<Zone, string> = { basket: "c-basket", day: "c-day" };
const TAB_PREFIX = "tab-";

/** Day 탭 위를 먼저, 그다음 장소 카드, 마지막으로 빈 목록 영역 순으로 놓을 곳을 정한다 */
const collision: CollisionDetection = (args) => {
  // Day 탭을 끌 때는 탭끼리만 자리를 바꾼다
  if (String(args.active.id).startsWith(TAB_PREFIX)) {
    return closestCenter({ ...args, droppableContainers: args.droppableContainers.filter((c) => String(c.id).startsWith(TAB_PREFIX)) });
  }
  const hits = pointerWithin(args);
  if (!hits.length) return closestCenter(args);
  const tab = hits.find((h) => String(h.id).startsWith(TAB_PREFIX));
  if (tab) return [tab];
  const items = hits.filter((h) => !String(h.id).startsWith("c-"));
  if (!items.length) return hits;
  return closestCenter({ ...args, droppableContainers: args.droppableContainers.filter((c) => items.some((h) => h.id === c.id)) });
};

/** 휴대폰으로 끌 때: 끌리는 카드를 손가락 높이에 맞춘다 (일정이 접히면서 카드 자리가 바뀌어도 손가락 밑에 있게) */
const followFinger: Modifier = ({ activatorEvent, draggingNodeRect, transform }) => {
  const t = typeof TouchEvent !== "undefined" && activatorEvent instanceof TouchEvent ? activatorEvent.touches[0] : undefined;
  if (!t || !draggingNodeRect) return transform;
  return { ...transform, y: transform.y + t.clientY - (draggingNodeRect.top + draggingNodeRect.height / 2) };
};

/**
 * Day 탭: 장소를 놓는 곳이면서, 탭 자체를 끌어 날짜 순서(그날 일정)를 바꿀 수 있다.
 * 탭 끌기는 마우스·터치만 (키보드 Enter/Space는 그대로 탭 선택)
 */
function DayTab({ i, start, selected, dropping, keyboard, canMove, onClick }: {
  i: number; start: string | null; selected: boolean; dropping: boolean; keyboard: boolean; canMove: boolean; onClick: () => void;
}) {
  // 키보드로 장소를 옮길 때는 방향키가 Day 탭으로 튀지 않게 탭을 놓을 곳에서 뺀다
  const { setNodeRef, listeners, transform, transition, isDragging, isOver, active } = useSortable({
    id: `${TAB_PREFIX}${i}`, disabled: { draggable: !canMove, droppable: keyboard },
  });
  const { onKeyDown: _, ...pointer } = listeners ?? {}; // eslint-disable-line @typescript-eslint/no-unused-vars
  const placeOver = isOver && !String(active?.id ?? "").startsWith(TAB_PREFIX);
  return (
    <button ref={setNodeRef} {...pointer}
      className={`day${dropping ? " day--drop" : ""}${placeOver ? " day--over" : ""}${isDragging ? " day--ghost" : ""}`}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      role="tab" aria-selected={selected} onClick={onClick}>
      <b>{i + 1}일차</b>{start && <span>{dayLabel(start, i)}</span>}
    </button>
  );
}

function DropZone({ zone, className, children }: { zone: Zone; className: string; children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id: ZONE_ID[zone] });
  return <div ref={setNodeRef} className={isOver ? `${className} is-over` : className}>{children}</div>;
}

function BasketItem({ place, dayNo, onPlace, onRemove }: { place: Place; dayNo: number; onPlace: () => void; onRemove: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: place.id });
  return (
    <li
      ref={setNodeRef}
      className={isDragging ? "bk is-ghost" : "bk"}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      {...attributes}
      {...listeners}
      aria-label={`${place.name} (끌어서 일정에 놓기)`}
    >
      <Icon name="grip" className="bk__grip" />
      <span className="bk__name">{place.name}</span>
      <button type="button" className="bk__btn" onClick={onPlace} aria-label={`${place.name}을(를) ${dayNo}일차 마지막에 넣기`}>+ {dayNo}일차</button>
      <button type="button" className="bk__x" onClick={onRemove} aria-label={`${place.name} 여행지 바구니에서 빼기`}><Icon name="x" /></button>
    </li>
  );
}

/** 일정 카드: 카드 아무 곳이나 끌면(휴대폰은 길게 눌러) 옮겨지고, 번호 동그라미는 키보드로 옮길 때 쓰는 손잡이 */
function SortableStop({ id, n, color, children }: { id: string; n: number; color: string; children: (bodyProps: Record<string, unknown>) => React.ReactNode }) {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({ id });
  const { onKeyDown, ...pointer } = (listeners ?? {}) as Record<string, (e: unknown) => void>;
  return (
    <li ref={setNodeRef} data-stop={id} className={isDragging ? "stop is-ghost" : "stop"} style={{ "--dc": color, transform: CSS.Translate.toString(transform), transition } as React.CSSProperties}>
      <button ref={setActivatorNodeRef} type="button" className="stop__n" {...attributes} onKeyDown={onKeyDown} aria-label={`${n}번째 장소 · 스페이스로 들어서 방향키로 옮기기`}>
        <i>{n}</i>
      </button>
      {children(pointer)}
    </li>
  );
}

/** 집을 때 손가락 높이, 놓을 때 끌던 카드의 높이 (화면 기준 px) */
interface FoldAnchor { id: string; y: number; dropY?: number }

/**
 * 휴대폰으로 끄는 동안에는 그날 일정을 한 줄짜리로 접는다 (멀리 끌지 않아도 되게).
 * 접을 때: 집은 카드가 손가락 밑에 오게 스크롤을 맞추고, 놓을 자리 계산을 위해 위치를 다시 잰다.
 *   (끌리는 카드(DragOverlay)는 접힌 뒤의 카드 자리에서 출발하므로 접힌 카드에 맞추면 둘 다 손가락 밑에 온다)
 * 펼 때: 옮긴 카드가 손을 뗀 자리 근처에 보이게 맞추고 잠깐 강조한다.
 */
function FoldScroll({ folded, listRef, anchor }: { folded: boolean; listRef: RefObject<HTMLOListElement | null>; anchor: RefObject<FoldAnchor | null> }) {
  const { measureDroppableContainers } = useDndContext();
  const was = useRef(false);
  useLayoutEffect(() => {
    if (folded === was.current) return;
    was.current = folded;
    const a = anchor.current;
    const find = () => (a ? Array.from(listRef.current?.querySelectorAll<HTMLElement>("[data-stop]") ?? []).find((n) => n.dataset.stop === a.id) : undefined);
    // html이 부드러운 스크롤이라 바로 옮기게 지정한다. 높이가 크게 바뀌는 동안은 브라우저의 스크롤 고정(scroll anchoring)도 끈다
    const root = document.documentElement;
    const jump = (dy: number) => window.scrollBy({ top: dy, behavior: "instant" });
    if (folded) {
      root.style.overflowAnchor = "none";
      const el = find();
      if (el && a) { const r = el.getBoundingClientRect(); jump(r.top + r.height / 2 - a.y); }
      measureDroppableContainers([]);
      return;
    }
    // 끌기가 끝나며 자리 옮김·변형이 풀린 다음 프레임에 잰다
    const raf = requestAnimationFrame(() => {
      root.style.overflowAnchor = "";
      const el = find();
      if (!el || !a) return;
      const t = getComputedStyle(el).transform; // 제자리로 돌아가는 움직임 중이면 그만큼 빼고 잰다
      const top = el.getBoundingClientRect().top - (t && t !== "none" ? new DOMMatrix(t).m42 : 0);
      jump(top - Math.max(72, (a.dropY ?? a.y) - 40));
      el.classList.remove("is-dropped");
      void el.offsetWidth; // 연달아 옮겨도 강조가 다시 보이게
      el.classList.add("is-dropped");
      el.addEventListener("animationend", () => el.classList.remove("is-dropped"), { once: true });
    });
    return () => { cancelAnimationFrame(raf); root.style.overflowAnchor = ""; };
  }, [folded, listRef, anchor, measureDroppableContainers]);
  return null;
}

/* ───────── 메모 ───────── */

/** 카드 안 입력칸에서 글자를 고르거나 누를 때 카드가 끌려가지 않게 */
const noDrag = { onMouseDown: (e: React.SyntheticEvent) => e.stopPropagation(), onTouchStart: (e: React.SyntheticEvent) => e.stopPropagation() };

/** 장소 메모: 메모를 누르면 바로 고치고, 칸 밖을 누르거나 저장하면 저장 (Esc: 취소, Ctrl+Enter: 저장) */
function MemoEditor({ place, onSave, onClose, placeholder = "예: 입장권 미리 예매 · 2층 카페 추천 · 월요일 휴무" }: {
  place: Place; onSave: (memo: string) => void; onClose: () => void; placeholder?: string;
}) {
  const [draft, setDraft] = useState(place.memo ?? "");
  const save = () => { onSave(draft.trim()); onClose(); };
  return (
    <div className="memo-edit" {...noDrag}>
      <textarea
        autoFocus
        rows={3}
        maxLength={500}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder={placeholder}
        aria-label={`${place.name} 메모`}
        onKeyDown={(e) => {
          e.stopPropagation();
          if (e.key === "Escape") onClose();
          if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) save();
        }}
        onBlur={(e) => { if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node | null)) save(); }}
      />
      <div className="memo-edit__btns">
        <button type="button" className="btn" onClick={onClose}>취소</button>
        <button type="button" className="btn btn--pri" onClick={save}>저장</button>
      </div>
    </div>
  );
}

/* ───────── 숙소 ───────── */

type StayChoices = { query: string; list: PlaceCandidate[] };

/** 그날 밤 숙소 칸: 비었으면 검색, 있으면 이름·위치 지정·바꾸기·빼기 */
function StayRow({ stay, dayNo, countryCode, center, nearCity, onSet, onMemo, onRemove, onPickRequest, toast }: {
  stay?: Place; dayNo: number; countryCode: string; center: Trip["center"]; nearCity: boolean;
  onSet: (stay: Omit<Place, "id">) => void; onMemo: (memo: string) => void; onRemove: () => void; onPickRequest: (id: string) => void; toast: (msg: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [memoOpen, setMemoOpen] = useState(false);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [choices, setChoices] = useState<StayChoices | null>(null);
  /** 마지막으로 찾아본 숙소 이름: 못 찾은 뒤 좌표를 붙여 넣으면 이 이름으로 넣는다 */
  const [named, setNamed] = useState("");
  /** 이름 없이 받은 좌표: 다음 입력을 숙소 이름으로 받는다 */
  const [coord, setCoord] = useState<LatLng | null>(null);
  const [shortLink, setShortLink] = useState(false);

  const close = () => { setOpen(false); setChoices(null); setQ(""); setNamed(""); setCoord(null); setShortLink(false); };

  const pick = (c: PlaceCandidate | null, name: string) => {
    onSet({ time: "", name, category: "숙소", ...(c ? { location: c.location } : {}), ...(c?.wiki ? { wiki: c.wiki } : {}) });
    close();
  };

  /** 붙여 넣은 좌표로 넣기 (여행지에서 아주 멀면 위도·경도 순서가 바뀌었을 수 있어 알려 준다) */
  const putAt = (name: string, location: LatLng) => {
    onSet({ time: "", name, category: "숙소", location });
    close();
    toast(distanceMeters(location, center) > 2_500_000
      ? `숙소를 넣었습니다 · 여행지에서 꽤 먼 곳이에요. 지도에서 위치를 확인해 주세요`
      : `숙소를 지도에 표시했습니다 · ${name}`);
  };

  async function onSearch(e: FormEvent) {
    e.preventDefault();
    const n = q.trim();
    if (!n) return;
    if (coord) { putAt(n, coord); return; } // 좌표를 받은 뒤 이름 입력
    const parsed = parseLocation(n);
    if (parsed === "short") { setShortLink(true); setChoices(null); return; }
    if (parsed) {
      const name = parsed.name ?? named;
      if (name) putAt(name, parsed.location);
      else { setCoord(parsed.location); setQ(""); setChoices(null); setShortLink(false); }
      return;
    }
    setShortLink(false);
    setBusy(true);
    const results = await searchPlace(n, countryCode, center, "stay", nearCity);
    setBusy(false);
    if (isConfident(results)) {
      pick(results[0], n);
      toast(`숙소를 지도에 표시했습니다 · ${results[0].name}`);
    } else {
      setNamed(n);
      setChoices({ query: n, list: results });
    }
  }

  /** 구글 지도에서 좌표 복사하는 방법 (검색에 없는 숙소) */
  const howTo = (
    <div className="stay__how">
      <b>구글 지도에서 위치 복사하기</b>
      <ul>
        <li><span>PC</span>지도에서 숙소 자리를 우클릭 → 맨 위 숫자(좌표)를 누르면 복사돼요. 주소창 링크를 복사해도 돼요.</li>
        <li><span>휴대폰</span>숙소 자리를 길게 눌러 핀을 꽂으면 위쪽 검색창에 좌표가 나와요 → 복사</li>
      </ul>
      <p>복사한 것을 위 칸에 붙여 넣고 [찾기]를 누르세요.{named ? ` '${named}' 이름으로 넣어요.` : ""}</p>
    </div>
  );

  if (stay && !open) {
    return (
      <li className="stay">
        <span className="stay__ic" aria-hidden="true"><Icon name="bed" /></span>
        <div className="stay__body">
          <small>{dayNo}일차 밤 숙소</small>
          <b>{stay.name}</b>
          {!stay.location && (
            <button type="button" className="tag tag--warn" onClick={() => onPickRequest(stay.id)}><Icon name="pin" />위치 미지정 · 지도에서 지정</button>
          )}
          {memoOpen ? (
            <MemoEditor
              place={stay}
              onSave={onMemo}
              onClose={() => setMemoOpen(false)}
              placeholder={"예: 체크인 15:00 · 체크아웃 11:00\n체크인 전후 짐 보관 가능 · 조식 7~10시"}
            />
          ) : stay.memo ? (
            <button type="button" className="stop__memo stay__memo" onClick={() => setMemoOpen(true)} aria-label={`${stay.name} 메모 고치기: ${stay.memo}`}>
              {stay.memo}
            </button>
          ) : (
            <button type="button" className="memo-btn stay__memo-btn" onClick={() => setMemoOpen(true)}>
              <Icon name="note" />메모
            </button>
          )}
        </div>
        {/* 바꾸기에서 좌표만 붙여 넣으면 지금 이름을 그대로 쓴다 (위치 미지정 숙소에 위치 넣기) */}
        <button type="button" className="stay__btn" onClick={() => { setQ(""); setNamed(stay.name); setOpen(true); }}>바꾸기</button>
        <button className="icon-btn" type="button" aria-label={`${dayNo}일차 숙소 빼기`} onClick={onRemove}><Icon name="x" /></button>
      </li>
    );
  }

  if (!open) {
    return (
      <li className="stay stay--empty">
        <button type="button" className="stay__add" onClick={() => setOpen(true)}>
          <Icon name="plus" />{dayNo}일차 밤 숙소 추가
        </button>
      </li>
    );
  }

  return (
    <li className="stay stay--search">
      <form className="stay__form" onSubmit={onSearch}>
        <input
          key={coord ? "name" : "search"}
          autoFocus
          type="text"
          value={q}
          onChange={(e) => { setQ(e.target.value); if (!coord) { setChoices(null); setShortLink(false); } }}
          placeholder={coord ? "숙소 이름 (예: Aka Hotel)" : "숙소 이름, 또는 구글 지도 좌표·링크"}
          aria-label={coord ? `${dayNo}일차 밤 숙소 이름 (좌표는 받았어요)` : `${dayNo}일차 밤 숙소 이름 또는 좌표`}
          autoComplete="off"
        />
        <button className="btn btn--pri" type="submit" disabled={busy}>{busy ? "찾는 중…" : coord ? "넣기" : "찾기"}</button>
        <button className="btn" type="button" onClick={close}>닫기</button>
      </form>
      {coord ? (
        <p className="stay__hint stay__hint--ok">
          위치를 읽었어요 ({coord.lat.toFixed(5)}, {coord.lng.toFixed(5)}). 지도에 보일 숙소 이름을 적어 주세요.
        </p>
      ) : shortLink ? (
        <>
          <p className="stay__hint stay__hint--warn">휴대폰 &lsquo;공유&rsquo;로 만든 짧은 링크는 열어 봐야 위치가 나와서 바로 읽을 수 없어요. 아래처럼 좌표를 복사해 주세요.</p>
          {howTo}
        </>
      ) : (
        <p className="stay__hint">못 찾으면 영문 이름으로 검색하거나, 구글 지도의 좌표·장소 링크를 붙여 넣으세요.</p>
      )}
      {choices && (
        <div className="choices">
          <p>{choices.list.length ? `"${choices.query}" 숙소 후보입니다. 맞는 곳을 고르세요.` : `"${choices.query}"을(를) 찾지 못했습니다.`}</p>
          {choices.list.map((c, i) => (
            <button key={i} type="button" onClick={() => pick(c, choices.query)}>
              <b>{c.name}</b><small>{c.sub}</small>
            </button>
          ))}
          <button type="button" className="none" onClick={() => { pick(null, choices.query); toast("숙소를 넣었습니다. 지도에서 위치를 지정할 수 있습니다."); }}>
            위치 없이 넣기 (나중에 지도에서 지정)
          </button>
          {howTo}
        </div>
      )}
    </li>
  );
}

/* ───────── 일정표 ───────── */

export function Itinerary({ trip, countryCode, day, onDayChange, forecast, onAddDay, onRemoveDay, updatePlaces, updateTrip, onPickRequest, onOpenSetup, toast }: Props) {
  const places = trip.days[day]?.places ?? [];
  const basket = trip.basket ?? [];
  const w = forecast[addDays(trip.start, day)];
  const [openNear, setOpenNear] = useState<string | null>(null);
  const [, setNearTick] = useState(0);
  const refreshNear = () => setNearTick((n) => n + 1);
  const inTrip = new Set([...basket, ...trip.days.flatMap((d) => d.places)].flatMap((p) => [p.name, p.wiki].filter((x): x is string => Boolean(x))));
  // 숙소: 이날 밤(마지막 날은 없음) · 전날 밤 숙소(아침 출발지)
  const hasNight = day < trip.days.length - 1;
  const stay = hasNight ? trip.days[day]?.stay : undefined;
  const prevStay = trip.days[day - 1]?.stay;
  const [memoOpen, setMemoOpen] = useState<string | null>(null);
  const saveMemo = (id: string, memo: string) =>
    updatePlaces((list) => list.map((x) => (x.id === id ? { ...x, memo: memo || undefined } : x)));

  function putStay(s: Omit<Place, "id">) {
    let filled = 0;
    updateTrip((t) => { const r = setStay(t, day, s); filled = r.filled; return r.trip; });
    if (filled) toast(`${day + 2}${filled > 1 ? `~${day + 1 + filled}` : ""}일차 밤도 같은 숙소로 넣었습니다`);
  }

  // 장소 추가
  // 직접 고르기 전에는 그날 마지막 일정 1시간 뒤를 제안한다
  const [timeOverride, setTimeOverride] = useState<string | null>(null);
  const time = timeOverride ?? nextSlot(places);
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [choices, setChoices] = useState<{ query: string; time: string; list: PlaceCandidate[] } | null>(null);

  const addPlace = (p: Omit<Place, "id">) => {
    updatePlaces((list) => sortByTime([...list, { id: newId(), ...p }]));
    setChoices(null);
    setTimeOverride(null); // 다음 추가 시간은 다시 자동 제안
  };
  const fromCandidate = (c: PlaceCandidate, t: string, n: string): Omit<Place, "id"> =>
    ({ time: t, name: n, category: c.category, location: c.location, ...(c.wiki ? { wiki: c.wiki } : {}) });

  async function onAdd(e: FormEvent) {
    e.preventDefault();
    const n = name.trim();
    if (!n) return;
    setBusy(true);
    const results = await searchPlace(n, countryCode, trip.center, "place", Boolean(trip.city));
    setBusy(false);
    setName("");
    if (isConfident(results)) {
      addPlace(fromCandidate(results[0], time, n));
      toast(`지도에 표시했습니다 · ${results[0].name}`);
    } else if (results.length) {
      setChoices({ query: n, time, list: results });
    } else {
      addPlace({ time, name: n, category: "" });
      toast("위치를 찾지 못했습니다. 지도에서 직접 지정할 수 있습니다.");
    }
  }

  /** 근처 추천: 기준 장소 바로 다음 자리에 넣는다 (시간은 그 사이로 맞춤) */
  function takeNearby(from: Place, x: NearbyPlace) {
    const place: Place = {
      id: newId(), time: addHours(from.time, 1), name: x.name, category: "명소", memo: `${from.name}에서 도보 약 ${walkingMinutes(x.meters)}분`,
      location: x.location, ...(x.wiki ? { wiki: x.wiki } : { image: x.image }),
    };
    updatePlaces((list) => insertAt(list, place, list.findIndex((p) => p.id === from.id) + 1));
    toast(`${x.name}을(를) ${from.name} 다음에 담았습니다`);
  }

  function toggleNear(p: Place) {
    const key = nearKey(p);
    setOpenNear((cur) => (cur === key ? null : key));
    loadNearby(p, inTrip, refreshNear);
  }

  /* 끌어서 옮기기: 끄는 동안에는 화면용 사본(drag)을 움직이고, 놓을 때 한 번에 저장한다 */
  const [drag, setDrag] = useState<{ id: string; basket: Place[]; day: Place[]; keyboard?: boolean; touch?: boolean } | null>(null);
  const view = { basket: drag?.basket ?? basket, day: drag?.day ?? places };
  // 휴대폰(터치)으로 끄는 동안에는 일정을 한 줄로 접는다 (FoldScroll)
  const folded = Boolean(drag?.touch);
  const listRef = useRef<HTMLOListElement>(null);
  const foldAnchor = useRef<FoldAnchor | null>(null);
  const rememberDrop = (r: { top: number; height: number } | null | undefined) => {
    if (foldAnchor.current && r) foldAnchor.current.dropY = r.top + r.height / 2;
  };
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 220, tolerance: 6 } }), // 휴대폰: 길게 누르면 집기 (그냥 밀면 스크롤)
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );
  const zoneOf = (id: string, lists: { basket: Place[]; day: Place[] }): Zone | null =>
    id === ZONE_ID.basket ? "basket" : id === ZONE_ID.day ? "day"
      : lists.basket.some((p) => p.id === id) ? "basket" : lists.day.some((p) => p.id === id) ? "day" : null;
  const dragged = drag ? [...basket, ...places].find((p) => p.id === drag.id) : undefined;

  /* Day 탭 끌기: 날짜는 그대로, 그날의 장소들이 통째로 자리를 바꾼다. 숙소는 날짜(밤)에 남는다 */
  const [tabDrag, setTabDrag] = useState<number | null>(null);
  const tabIds = trip.days.map((_, i) => `${TAB_PREFIX}${i}`);

  function moveDay(from: number, to: number) {
    if (from === to) return;
    const order = arrayMove(trip.days.map((_, i) => i), from, to);
    updateTrip((t) => ({ ...t, days: t.days.map((d, i) => ({ ...d, places: t.days[order[i]].places })) }));
    onDayChange(order.indexOf(day)); // 보고 있던 날의 일정을 따라간다
    toast(`${from + 1}일차 일정을 ${to + 1}일차로 옮겼습니다`);
  }

  function onDragStart(e: DragStartEvent) {
    if (String(e.active.id).startsWith(TAB_PREFIX)) { setTabDrag(Number(String(e.active.id).slice(TAB_PREFIX.length))); return; }
    const finger = typeof TouchEvent !== "undefined" && e.activatorEvent instanceof TouchEvent ? e.activatorEvent.touches[0] : undefined;
    const touch = Boolean(finger);
    foldAnchor.current = finger ? { id: String(e.active.id), y: finger.clientY } : null;
    setDrag({ id: String(e.active.id), basket, day: places, keyboard: e.activatorEvent instanceof KeyboardEvent, touch });
  }

  // 다른 목록 위로 넘어가면 그 자리로 미리 옮겨서 보여 준다
  function onDragOver({ active, over }: DragOverEvent) {
    if (!drag || !over || String(over.id).startsWith(TAB_PREFIX)) return;
    const from = zoneOf(String(active.id), drag), to = zoneOf(String(over.id), drag);
    if (!from || !to || from === to) return;
    const item = drag[from].find((p) => p.id === active.id);
    if (!item) return;
    const target = drag[to];
    const found = target.findIndex((p) => p.id === over.id);
    // 카드의 아래쪽 절반에 있으면 그 카드 다음 자리로
    const r = active.rect.current.translated;
    const below = r != null && r.top + r.height / 2 > over.rect.top + over.rect.height / 2;
    const at = found < 0 ? target.length : found + (below ? 1 : 0);
    setDrag({ ...drag, [from]: drag[from].filter((p) => p.id !== active.id), [to]: [...target.slice(0, at), item, ...target.slice(at)] });
  }

  function onDragEnd({ active, over }: DragEndEvent) {
    if (tabDrag !== null) {
      setTabDrag(null);
      if (over && String(over.id).startsWith(TAB_PREFIX)) moveDay(tabDrag, Number(String(over.id).slice(TAB_PREFIX.length)));
      return;
    }
    const d = drag;
    rememberDrop(active.rect.current.translated);
    setDrag(null);
    if (!d || !over) return;
    const id = String(active.id), overId = String(over.id);
    const item = [...basket, ...places].find((p) => p.id === id);
    if (!item) return;

    // Day 탭에 놓기 → 그날 마지막으로
    if (overId.startsWith(TAB_PREFIX)) {
      const target = Number(overId.slice(TAB_PREFIX.length));
      if (target === day && places.some((p) => p.id === id)) return;
      updateTrip((t) => ({
        ...t,
        basket: (t.basket ?? []).filter((p) => p.id !== id),
        days: t.days.map((x, i) => {
          const rest = x.places.filter((p) => p.id !== id);
          return i === target ? { ...x, places: insertAt(rest, { ...item, time: "" }, rest.length) } : i === day ? { ...x, places: rest } : x;
        }),
      }));
      toast(`${item.name}을(를) ${target + 1}일차로 옮겼습니다`);
      return;
    }

    // 여행지 바구니/오늘 일정 안에서 자리 정하기
    const zone = zoneOf(overId, d);
    if (!zone) return;
    let list = d[zone];
    // 끄는 동안 화면에 보이던 자리(정렬 미리보기) 그대로 확정
    const fromIdx = list.findIndex((p) => p.id === id), toIdx = list.findIndex((p) => p.id === overId);
    if (fromIdx >= 0 && toIdx >= 0 && fromIdx !== toIdx) list = arrayMove(list, fromIdx, toIdx);
    const finalBasket = zone === "basket" ? list : d.basket;
    let finalDay = zone === "day" ? list : d.day;
    const at = finalDay.findIndex((p) => p.id === id);
    if (at >= 0) finalDay = insertAt(finalDay, finalDay[at], at); // 놓은 자리에 맞게 시간 조정
    updateTrip((t) => ({ ...t, basket: finalBasket, days: t.days.map((x, i) => (i === day ? { ...x, places: finalDay } : x)) }));
  }

  /* 가까운 순으로 정리: 바로 바꾸지 않고 미리 보여 준 뒤 [적용]으로 확정 (함께 짜는 일정이면 모두의 일정이 바뀌므로) */
  const [tidy, setTidy] = useState<{ day: number; sig: string; result: RouteOrder } | null>(null);
  const placesSig = (list: Place[]) => list.map((p) => `${p.id}@${p.time}@${p.location?.lat ?? ""},${p.location?.lng ?? ""}`).join("|");
  // 다른 날로 가거나 그사이 일정이 바뀌면(다른 사람이 고친 경우 포함) 미리보기는 사라진다
  const tidyNow = tidy && tidy.day === day && tidy.sig === placesSig(places) ? tidy.result : null;

  function previewTidy() {
    const r = nearestOrder(places, prevStay?.location, stay?.location);
    if (!r) { setTidy(null); toast("이미 가까운 순서입니다"); return; }
    setTidy({ day, sig: placesSig(places), result: r });
  }

  function applyTidy() {
    if (!tidy || !tidyNow) return;
    const { sig, result } = tidy;
    updatePlaces((list) => (placesSig(list) === sig ? result.places : list));
    setTidy(null);
    toast(`가까운 순으로 정리했습니다 · 총 이동 ${formatDistance(result.after)}`);
  }

  /** 여행지 바구니 항목을 이 날 마지막에 넣기 (끌기 어려울 때) */
  function placeFromBasket(p: Place) {
    updateTrip((t) => ({
      ...t,
      basket: (t.basket ?? []).filter((x) => x.id !== p.id),
      days: t.days.map((x, i) => (i === day ? { ...x, places: insertAt(x.places, { ...p, time: "" }, x.places.length) } : x)),
    }));
    toast(`${p.name}을(를) ${day + 1}일차에 넣었습니다`);
  }

  return (
    <div className="card">
      <DndContext
        sensors={sensors}
        collisionDetection={collision}
        modifiers={folded ? [followFinger] : undefined}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        onDragCancel={(e) => { rememberDrop(e.active.rect.current.translated); setDrag(null); setTabDrag(null); }}
      >
      <FoldScroll folded={folded} listRef={listRef} anchor={foldAnchor} />
      <div className="days" role="tablist" aria-label="날짜">
        <SortableContext items={tabIds} strategy={horizontalListSortingStrategy}>
          {trip.days.map((_, i) => (
            <DayTab key={i} i={i} start={trip.datesUnset ? null : trip.start} selected={i === day} dropping={Boolean(drag) && !drag?.keyboard} keyboard={Boolean(drag?.keyboard)}
              canMove={trip.days.length > 1 && !drag} onClick={() => { setTimeOverride(null); onDayChange(i); }} />
          ))}
        </SortableContext>
        <button className="day day--add" type="button" onClick={onAddDay}>+ 날짜 추가</button>
      </div>

      <div className="daybar">
        {w ? (
          <span className="wx"><Icon name={weatherIcon(w.weatherCode)} /><b>{Math.round(w.tempMax)}° / {Math.round(w.tempMin)}° · 강수 {Math.round(w.rainChance)}%</b></span>
        ) : (
          trip.datesUnset ? (
            <button type="button" className="wx wx--cta" onClick={onOpenSetup}>
              날짜를 정하면 날씨 예보를 보여 드려요<span className="wx__go">날짜 정하기 ›</span>
            </button>
          ) : (
            <span className="wx muted">{(() => {
              const gap = forecastGap(addDays(trip.start, day));
              if (gap.kind === "past") return "지난 날짜는 날씨 예보가 없어요";
              if (gap.kind === "soon") return "날씨 예보를 불러오는 중…";
              const f = dateParts(gap.from);
              return `이날 날씨 예보는 ${f.m}.${f.d}(${f.w})부터 볼 수 있어요`;
            })()}</span>
          )
        )}
        {canReorder(places) && (
          <button type="button" className="tidy-btn" aria-expanded={Boolean(tidyNow)} onClick={() => (tidyNow ? setTidy(null) : previewTidy())}>
            가까운 순으로 정리
          </button>
        )}
        <button type="button" className="day-del" disabled={trip.days.length < 2} onClick={() => onRemoveDay(day)}>
          이 날 삭제
        </button>
      </div>

      {tidyNow && (
        <section className="tidy" aria-label="가까운 순으로 정리 미리보기">
          <p className="tidy__hd">
            총 이동 <s>{formatDistance(tidyNow.before)}</s> → <b>{formatDistance(tidyNow.after)}</b>
          </p>
          <ol className="tidy__list">
            {tidyNow.places.map((p, i) => (
              <li key={p.id} className={p.id !== places[i]?.id ? "is-moved" : undefined}>
                <span className="tidy__t">{p.time || "--:--"}</span>{p.name}
              </li>
            ))}
          </ol>
          <p className="tidy__note">
            {prevStay || stay ? "숙소까지 포함한 " : ""}직선거리 기준이라 실제 이동 거리와 다를 수 있어요.
            식당·공항·교통 일정과 위치가 없는 장소는 자리를 지킵니다.
          </p>
          <div className="tidy__acts">
            <button type="button" className="btn" onClick={() => setTidy(null)}>취소</button>
            <button type="button" className="btn btn--pri" onClick={applyTidy}>적용</button>
          </div>
        </section>
      )}

      <DropZone zone="basket" className="basket">
        <div className="basket__hd">
          <b>여행지 바구니</b>
          {view.basket.length > 0 && <span className="basket__n">{view.basket.length}</span>}
          <small>
            {drag && !basket.some((p) => p.id === drag.id) ? "여기에 놓으면 일정에서 빼서 보관합니다"
              : view.basket.length ? "끌어서 원하는 날·자리에 놓으세요 (휴대폰은 길게 눌러서)"
              : "나라 페이지에서 ‘일정에 담기’를 누르면 여기 모입니다"}
          </small>
        </div>
        {(view.basket.length > 0 || (drag && basket.length > 0)) && (
          <SortableContext items={view.basket.map((p) => p.id)} strategy={rectSortingStrategy}>
            <ul className="basket__list">
              {view.basket.map((p) => (
                <BasketItem
                  key={p.id}
                  place={p}
                  dayNo={day + 1}
                  onPlace={() => placeFromBasket(p)}
                  onRemove={() => updateTrip((t) => ({ ...t, basket: (t.basket ?? []).filter((x) => x.id !== p.id) }))}
                />
              ))}
            </ul>
          </SortableContext>
        )}
      </DropZone>

      <DropZone zone="day" className="tl-zone">
      <SortableContext items={view.day.map((p) => p.id)} strategy={verticalListSortingStrategy}>
      <ol ref={listRef} className={`tl${view.day.length === 0 ? " tl--empty" : ""}${folded ? " tl--fold" : ""}`} style={{ "--dc": dayColor(day) } as React.CSSProperties}>
        {prevStay && (
          <li className="stay stay--from">
            <span className="stay__ic" aria-hidden="true"><Icon name="bed" /></span>
            <div className="stay__body">
              <small>숙소에서 출발</small><b>{prevStay.name}</b>
              {/* 체크아웃하는 날 아침: 체크아웃 시간·짐 보관을 바로 보게 */}
              {prevStay.memo && !sameStay(prevStay, stay) && <p className="stay__note">{prevStay.memo}</p>}
            </div>
          </li>
        )}
        {prevStay && view.day[0] && <Leg from={prevStay} to={view.day[0]} countryCode={countryCode} hidden={Boolean(drag)} />}
        {view.day.length === 0 && <li className="empty-trip">담은 장소가 없습니다. 여행지 바구니에서 끌어오거나 아래에서 추가하세요.</li>}
        {view.day.map((p, i) => {
          const key = nearKey(p);
          const open = Boolean(key) && openNear === key && !drag;
          const prev = view.day[i - 1];
          return (
            <Fragment key={p.id}>
            {/* 끄는 동안에는 자리만 지키고 숨긴다 (없애면 목록이 당겨져 놓을 자리가 커서 밑에서 밀려남) */}
            {prev && <Leg from={prev} to={p} countryCode={countryCode} hidden={Boolean(drag)} />}
            <SortableStop id={p.id} n={i + 1} color={dayColor(day)}>
              {(pointer) => (<>
              <div className="stop__body" {...pointer}>
                <PlacePhoto place={p} />
                <div className="stop__txt">
                  <div className="stop__time">
                    <TimePicker
                      variant="inline"
                      value={p.time}
                      label={`${p.name} 시간 변경`}
                      onChange={(v) => updatePlaces((list) => sortByTime(list.map((x) => (x.id === p.id ? { ...x, time: v } : x))))}
                    />
                  </div>
                  <div className="stop__name">
                    <span>{p.name}</span>
                    {p.category && <span className="tag">{p.category}</span>}
                  </div>
                  <div className="tags">
                    {p.duration && <span className="tag">{p.duration} 머묾</span>}
                    {!p.location && (
                      <button type="button" className="tag tag--warn" onClick={() => onPickRequest(p.id)}>
                        <Icon name="pin" />위치 미지정 · 지도에서 지정
                      </button>
                    )}
                  </div>
                  {memoOpen === p.id ? (
                    <MemoEditor place={p} onSave={(m) => saveMemo(p.id, m)} onClose={() => setMemoOpen(null)} />
                  ) : p.memo ? (
                    <button type="button" className="stop__memo" onClick={() => setMemoOpen(p.id)} aria-label={`${p.name} 메모 고치기: ${p.memo}`}>
                      {p.memo}
                    </button>
                  ) : null}
                  <div className="stop__acts">
                    {!p.memo && memoOpen !== p.id && (
                      <button type="button" className="memo-btn" onClick={() => setMemoOpen(p.id)}>
                        <Icon name="note" />메모
                      </button>
                    )}
                    {p.location && (
                      <button
                        type="button"
                        className="near-btn"
                        aria-expanded={open}
                        onClick={() => toggleNear(p)}
                        onPointerEnter={() => loadNearby(p, inTrip, refreshNear)} // 마우스를 올리면 미리 불러오기
                      >
                        근처 추천 여행지
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <button className="icon-btn" type="button" aria-label={`${p.name} 삭제`} onClick={() => updatePlaces((list) => list.filter((x) => x.id !== p.id))}>
                <Icon name="x" />
              </button>
              {open && (
                <div className="near">
                  <NearbyPanel place={p} state={nearCache.get(key)} inTrip={inTrip} onTake={(x) => takeNearby(p, x)} />
                </div>
              )}
              </>)}
            </SortableStop>
            </Fragment>
          );
        })}
        {stay && view.day.length > 0 && <Leg from={view.day[view.day.length - 1]} to={stay} countryCode={countryCode} hidden={Boolean(drag)} />}
        {hasNight && (
          <StayRow
            key={day}
            stay={stay}
            dayNo={day + 1}
            countryCode={countryCode}
            center={trip.center}
            nearCity={Boolean(trip.city)}
            onSet={putStay}
            onMemo={(m) => updateTrip((t) => setStayMemo(t, day, m))}
            onRemove={() => updateTrip((t) => ({ ...t, days: t.days.map((d, i) => (i === day ? { places: d.places } : d)) }))}
            onPickRequest={onPickRequest}
            toast={toast}
          />
        )}
      </ol>
      </SortableContext>
      </DropZone>

      <DragOverlay dropAnimation={null}>
        {tabDrag !== null && (
          <div className="day day--lift">
            <b>{tabDrag + 1}일차</b>{!trip.datesUnset && <span>{dayLabel(trip.start, tabDrag)}</span>}
          </div>
        )}
        {dragged && (
          <div className="drag-card">
            <Icon name="grip" />
            <b>{dragged.name}</b>
            {dragged.category && <span className="tag">{dragged.category}</span>}
          </div>
        )}
      </DragOverlay>
      </DndContext>

      <form className="add" onSubmit={onAdd}>
        <TimePicker value={time} onChange={setTimeOverride} label="방문 시간" />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="가고 싶은 장소를 입력하세요" aria-label="장소 이름" autoComplete="off" />
        <button className="btn btn--pri" type="submit" disabled={busy}>{busy ? "위치 찾는 중…" : "+ 추가"}</button>
      </form>

      {choices && (
        <div className="choices">
          <p>{choices.list.length > 1 ? `"${choices.query}" 후보가 여러 개입니다. 위치를 선택하세요.` : `"${choices.query}"이(가) 이곳이 맞나요?`}</p>
          {choices.list.map((c, i) => (
            <button key={i} type="button" onClick={() => addPlace(fromCandidate(c, choices.time, choices.query))}>
              <b>{c.name}</b><small>{c.sub}</small>
            </button>
          ))}
          <button type="button" className="none" onClick={() => addPlace({ time: choices.time, name: choices.query, category: "" })}>
            위치 없이 추가
          </button>
        </div>
      )}
    </div>
  );
}
