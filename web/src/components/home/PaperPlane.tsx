"use client";

import type { Ref } from "react";

/**
 * 로고의 종이비행기(같은 경로). 지구본 왼쪽 위에 떠서 지구본 중심을 바라본다.
 * 꾸밈 요소라 보조기기에는 숨기고, 클릭도 지구본으로 통과시킨다.
 */
export function PaperPlane({ ref }: { ref?: Ref<HTMLDivElement> }) {
  return (
    <div className="plane" ref={ref} aria-hidden="true">
      <svg className="plane__trail" viewBox="0 0 200 100" preserveAspectRatio="none">
        <path d="M2 86C40 8 118 2 198 98" />
      </svg>
      <div className="plane__body">
        <svg className="plane__art" viewBox="14 9 35 35">
          {/* 로고 비행기는 오른쪽 위(-48°)를 향한다. 83° 돌려 지구본 중심(오른쪽 아래 35°)을 겨눈다 */}
          <g transform="rotate(83 31.5 26.5)">
            <path className="plane__wing" d="M20 27 43 15 31 30Z" />
            <path className="plane__keel" d="M31 30 43 15 35 38Z" />
            <path className="plane__fold" d="M31 30 43 15" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/** 비행기를 target(지구본) 중심까지 날려 보낸다. 살짝 뒤로 젖혔다가 호를 그리며 작아지면서 내려앉는다. */
export function flyPlane(plane: HTMLElement, target: HTMLElement, duration: number) {
  const body = plane.querySelector<HTMLElement>(".plane__body");
  if (!body) return;
  body.getAnimations().forEach((a) => a.cancel());
  const from = body.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);
  plane.classList.add("is-flying");
  body.animate(
    [
      { transform: "translate(0,0) rotate(0deg) scale(1)", opacity: 1, easing: "cubic-bezier(.3,0,.4,1)" },
      { offset: 0.18, transform: "translate(-12px,-10px) rotate(-8deg) scale(1.06)", opacity: 1, easing: "cubic-bezier(.5,0,.75,.5)" },
      { offset: 0.7, transform: `translate(${dx * 0.62}px,${dy * 0.62 - 36}px) rotate(3deg) scale(.55)`, opacity: 1, easing: "cubic-bezier(.4,0,.9,.6)" },
      { transform: `translate(${dx}px,${dy}px) rotate(14deg) scale(.06)`, opacity: 0 },
    ],
    { duration, fill: "forwards" },
  );
}

/** 뒤로 가기로 페이지가 복원됐을 때 비행기를 제자리로 */
export function resetPlane(plane: HTMLElement) {
  plane.classList.remove("is-flying");
  plane.querySelector<HTMLElement>(".plane__body")?.getAnimations().forEach((a) => a.cancel());
}
