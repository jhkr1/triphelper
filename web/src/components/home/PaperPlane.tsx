"use client";

import type { Ref } from "react";

/**
 * 로고의 종이비행기(같은 경로). 지구본 왼쪽 위 바깥에 떠서 지구본 중심을 바라보고, 왼쪽에서 긴 항로를 끌고 들어온다.
 * 위치·크기·항로를 모두 지구본 영역 기준 %로 잡아서, 화면 비율이 바뀌어도 지구본과 함께 움직인다.
 * 꾸밈 요소라 보조기기에는 숨기고, 클릭도 지구본으로 통과시킨다.
 */
export function PaperPlane({ ref }: { ref?: Ref<HTMLDivElement> }) {
  return (
    <div className="plane" ref={ref} aria-hidden="true">
      {/* 지구본 영역과 같은 0~100 좌표(음수 = 지구본 왼쪽·위 바깥). 왼쪽에서 크게 솟았다가 비행기 꼬리로 들어오는 항로 */}
      <svg className="plane__trail" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {/* 항로 시작 쪽은 투명하게 사라지게 해서, 좁은 화면에서 왼쪽 글 근처까지 닿아도 거슬리지 않게 한다 */}
          <linearGradient id="plane-trail-fade" gradientUnits="userSpaceOnUse" x1="-46" y1="0" x2="-9" y2="0">
            <stop className="plane__trail-stop" offset="0" stopOpacity="0" />
            <stop className="plane__trail-stop" offset=".5" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path d="M-46 12C-40-14-20-7-8.7 2.2" stroke="url(#plane-trail-fade)" />
      </svg>
      <div className="plane__body">
        <svg className="plane__art" viewBox="14 9 35 35">
          {/* 로고 비행기는 오른쪽 위(-48.5°)를 향한다. 87.5° 돌려 지구본 중심(오른쪽 아래 39°)을 겨눈다 */}
          <g transform="rotate(87.5 31.5 26.5)">
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
  // 젖히는 거리·솟는 높이도 비행기 크기에 맞춘다 (모바일에서 과하지 않게)
  const back = from.width * 0.1;
  const lift = from.width * 0.3;
  // 지구본을 확대해 숨어 있었다면 다시 나타나서 날아간다
  plane.classList.remove("is-hidden");
  plane.classList.add("is-flying");
  body.animate(
    [
      { transform: "translate(0,0) rotate(0deg) scale(1)", opacity: 1, easing: "cubic-bezier(.3,0,.4,1)" },
      { offset: 0.18, transform: `translate(${-back}px,${-back}px) rotate(-8deg) scale(1.06)`, opacity: 1, easing: "cubic-bezier(.5,0,.75,.5)" },
      { offset: 0.7, transform: `translate(${dx * 0.62}px,${dy * 0.62 - lift}px) rotate(3deg) scale(.55)`, opacity: 1, easing: "cubic-bezier(.4,0,.9,.6)" },
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
