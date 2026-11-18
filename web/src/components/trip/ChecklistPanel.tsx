"use client";

import { useState, type FormEvent } from "react";
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

const RAIN_ITEMS = ["우산", "방수 겉옷"];

/** 가방별 체크리스트 */
export function ChecklistPanel({ checklist, onChange, countryName, rainyDay }: Props) {
  const bagNames = Object.keys(checklist.bags);
  const [bag, setBag] = useState(bagNames[0] ?? "");
  const [newItem, setNewItem] = useState("");
  const current = checklist.bags[bag] ? bag : bagNames[0];

  const itemsOf = (b: string) => Object.values(checklist.bags[b] ?? {}).flat();
  const all = bagNames.flatMap(itemsOf);
  const doneCount = all.filter((x) => checklist.done.includes(x)).length;
  const pct = all.length ? Math.round((doneCount / all.length) * 100) : 0;
  const missingRain = RAIN_ITEMS.filter((x) => !all.includes(x));

  const setBags = (fn: (bags: Checklist["bags"]) => Checklist["bags"]) =>
    onChange({ ...checklist, bags: fn(structuredClone(checklist.bags)) });

  function toggle(item: string, on: boolean) {
    onChange({ ...checklist, done: on ? [...checklist.done, item] : checklist.done.filter((x) => x !== item) });
  }
  function remove(group: string, item: string) {
    setBags((bags) => {
      bags[current][group] = bags[current][group].filter((x) => x !== item);
      if (!bags[current][group].length) delete bags[current][group];
      return bags;
    });
  }
  function add(e: FormEvent) {
    e.preventDefault();
    const name = newItem.trim();
    if (!name) return;
    setBags((bags) => {
      const groups = Object.keys(bags[current]);
      const group = groups[groups.length - 1] ?? "기타";
      (bags[current][group] ??= []).push(name);
      return bags;
    });
    setNewItem("");
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

        <div className="bags" role="tablist" aria-label="가방">
          {bagNames.map((b) => {
            const items = itemsOf(b);
            return (
              <button key={b} className="bag" role="tab" aria-selected={b === current} onClick={() => setBag(b)}>
                {b}<em>{items.filter((x) => checklist.done.includes(x)).length}/{items.length}</em>
              </button>
            );
          })}
        </div>

        {rainyDay && missingRain.length > 0 && (
          <div className="rec">
            <h4><Icon name="rain" />{dayLabel(rainyDay.start, rainyDay.index)} 비 예보 · {rainyDay.text}</h4>
            <p>예보에 맞춰 준비물을 제안합니다. 눌러서 추가하세요.</p>
            <div className="sugg" style={{ margin: 0 }}>
              {missingRain.map((x) => <button key={x} type="button" onClick={() => addRainItem(x)}>+ {x}</button>)}
            </div>
          </div>
        )}

        {Object.entries(checklist.bags[current] ?? {}).map(([group, items]) => (
          <div className="grp" key={group}>
            <h4>{group}</h4>
            <ul className="chk">
              {items.map((x) => (
                <li key={x}>
                  <label>
                    <input type="checkbox" checked={checklist.done.includes(x)} onChange={(e) => toggle(x, e.target.checked)} />
                    <span>{x}</span>
                    <button type="button" className="del" aria-label={`${x} 삭제`} onClick={(e) => { e.preventDefault(); remove(group, x); }}>
                      <Icon name="x" />
                    </button>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <form className="addrow" onSubmit={add}>
          <input value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="준비물 추가 (예: 휴대용 선풍기)" aria-label="준비물 이름" autoComplete="off" />
          <button className="btn btn--pri" type="submit">+ 추가</button>
        </form>
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
