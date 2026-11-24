import type { Metadata } from "next";
import Link from "next/link";
import { Footer, TopBar } from "@/components/layout/TopBar";
import { CONTACT_EMAIL, og } from "@/lib/site";
import "./privacy.css";

/*
 * 개인정보처리방침. 내용은 실제 코드·DB와 맞춰야 한다:
 * 로그인(lib/supabase.ts 카카오 닉네임만), 저장 표(supabase/migrations), 브라우저 저장(localStorage), 외부 API(lib/places·weather·photos).
 * 새로 모으는 정보·외부 서비스(분석 도구, 광고 등)가 생기면 이 페이지와 시행일을 함께 고친다.
 */
const EFFECTIVE = "2026년 11월 24일";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "TripHelper가 어떤 개인정보를 왜 처리하고, 언제 어떻게 지우는지 안내합니다.",
  alternates: { canonical: "/privacy/" },
  openGraph: og({
    title: "개인정보처리방침 · TripHelper",
    description: "TripHelper가 어떤 개인정보를 왜 처리하고, 언제 어떻게 지우는지 안내합니다.",
    url: "/privacy/",
  }),
};

function Contact() {
  return CONTACT_EMAIL
    ? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
    : <span>문의 이메일 준비 중</span>;
}

export default function PrivacyPage() {
  return (
    <>
      <TopBar solid />
      <main className="policy">
        <article className="policy__doc">
          <h1>개인정보처리방침</h1>
          <p className="policy__lead">
            TripHelper(이하 &lsquo;서비스&rsquo;)는 여행 일정을 짜고 나누는 데 꼭 필요한 정보만 처리합니다.
            로그인하지 않고도 나라 정보와 일정 짜기를 쓸 수 있고, 이때는 서비스가 개인정보를 받지 않습니다.
          </p>

          <section>
            <h2>1. 처리하는 정보와 목적</h2>
            <table>
              <thead>
                <tr><th scope="col">언제</th><th scope="col">항목</th><th scope="col">목적</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>카카오로 로그인할 때</td>
                  <td>카카오 회원 식별값, 카카오 닉네임, 로그인 시각</td>
                  <td>회원 확인, 로그인 유지</td>
                </tr>
                <tr>
                  <td>가입할 때 (자동 생성)</td>
                  <td>서비스 닉네임 (무작위로 정해짐)</td>
                  <td>게시판·함께 짜기에서 이름 표시</td>
                </tr>
                <tr>
                  <td>서비스를 쓸 때</td>
                  <td>여행 일정(장소·날짜·메모), 준비물 목록, 게시글·댓글, 함께 짜기 멤버와 활동 기록, 공유·초대 링크</td>
                  <td>일정 저장과 여러 기기에서 이어 쓰기, 공유, 함께 짜기, 게시판</td>
                </tr>
                <tr>
                  <td>접속할 때 (자동 생성)</td>
                  <td>IP 주소, 접속 기록, 브라우저 정보</td>
                  <td>보안, 오류 확인 (호스팅·DB 업체가 처리)</td>
                </tr>
              </tbody>
            </table>
            <p>
              카카오 프로필 사진, 이메일, 전화번호, 위치 정보는 받지 않습니다.
              일정 메모나 게시글에 직접 적은 내용은 그대로 저장되므로, 다른 사람의 개인정보를 적지 않도록 주의해 주세요.
            </p>
          </section>

          <section>
            <h2>2. 보관 기간과 파기</h2>
            <ul>
              <li>회원 정보와 일정·글·댓글은 회원이 탈퇴할 때까지 보관하고, 탈퇴하면 지체 없이 모두 지웁니다.</li>
              <li>직접 지운 일정·글·댓글은 그때 바로 지워집니다.</li>
              <li>일정 초대 링크는 만든 뒤 7일이 지나면 쓸 수 없습니다.</li>
              <li>접속 기록은 호스팅·DB 업체의 기준에 따라 일정 기간 뒤 자동으로 지워집니다.</li>
              <li>전자 기록은 되살릴 수 없는 방법으로 지웁니다.</li>
            </ul>
          </section>

          <section>
            <h2>3. 다른 사람에게 보이는 정보</h2>
            <ul>
              <li>게시판에 올린 글과 댓글, 그리고 닉네임은 다른 회원에게 보입니다. &lsquo;링크가 있는 사람만&rsquo;으로 올린 글은 링크를 받은 사람만 볼 수 있습니다.</li>
              <li>함께 짜기에 초대한 사람은 그 일정과 멤버 닉네임, 활동 기록을 볼 수 있습니다.</li>
              <li>보기 링크나 공유 링크를 받은 사람은 로그인 없이 그 일정을 볼 수 있습니다. 보기 링크는 언제든 끌 수 있지만, 저장하지 않은 일정을 주소에 통째로 담아 보낸 링크는 받은 사람에게 계속 남습니다.</li>
            </ul>
            <p>서비스는 이 밖의 목적으로 개인정보를 제3자에게 제공하지 않습니다. 법령에 따라 요청받은 경우는 예외입니다.</p>
          </section>

          <section>
            <h2>4. 처리 위탁과 국외 이전</h2>
            <p>서비스 운영을 위해 아래 업체에 정보 처리를 맡기며, 이 과정에서 정보가 국외에 저장됩니다.</p>
            <table>
              <thead>
                <tr><th scope="col">업체 (국가)</th><th scope="col">맡기는 일</th><th scope="col">이전되는 정보</th><th scope="col">저장 위치</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Supabase Inc. (미국)</td>
                  <td>회원 인증, 데이터베이스</td>
                  <td>1번의 회원·일정·게시판 정보, 접속 기록</td>
                  <td>일본 도쿄 (AWS)</td>
                </tr>
                <tr>
                  <td>GitHub Inc. (미국)</td>
                  <td>웹사이트 호스팅</td>
                  <td>접속 기록 (IP 주소, 브라우저 정보)</td>
                  <td>미국 등 GitHub 서버</td>
                </tr>
              </tbody>
            </table>
            <p>
              정보는 서비스를 쓰는 동안 인터넷으로 암호화되어 전송되고, 2번의 기간 동안 보관됩니다.
              국외 이전을 원하지 않으면 로그인하지 않고 서비스를 쓰거나 탈퇴할 수 있습니다. 이 경우 일정 저장·공유·게시판은 쓸 수 없습니다.
            </p>
          </section>

          <section>
            <h2>5. 브라우저에 저장하는 정보</h2>
            <p>
              서비스는 쿠키를 쓰지 않고, 브라우저 저장소(localStorage)에 로그인 상태, 화면 테마, 로그인 없이 만든 일정, 장소 사진 주소를 저장합니다.
              이 정보는 내 기기에만 있고 서비스로 전송되지 않으며, 브라우저 설정에서 사이트 데이터를 지우면 함께 지워집니다.
            </p>
            <p>
              지도, 날씨, 장소 검색, 장소 사진은 외부 공개 서비스(OpenFreeMap, Open-Meteo, Photon·Nominatim(OpenStreetMap), 위키미디어)에서 불러옵니다.
              이때 검색어와 지도 위치가 그 서비스로 전송되지만, 회원 정보는 보내지 않습니다.
            </p>
            <p>현재 방문자 분석 도구나 광고는 쓰지 않습니다. 쓰게 되면 이 방침을 먼저 고쳐 알립니다.</p>
          </section>

          <section>
            <h2>6. 이용자의 권리</h2>
            <p>
              언제든 내 정보를 보거나 고치거나 지워 달라고, 또는 처리를 멈춰 달라고 요청할 수 있습니다.
              일정, 글, 댓글은 서비스 안에서 직접 고치거나 지울 수 있습니다.
              탈퇴와 그 밖의 요청은 아래 이메일로 보내 주시면 본인 확인 뒤 지체 없이 처리합니다.
            </p>
            <p>만 14세 미만은 회원으로 가입할 수 없습니다.</p>
          </section>

          <section>
            <h2>7. 안전하게 지키는 방법</h2>
            <ul>
              <li>모든 통신은 HTTPS로 암호화합니다.</li>
              <li>데이터베이스의 행 단위 권한으로, 각 회원은 자기 정보와 공유받은 일정만 읽고 고칠 수 있습니다.</li>
              <li>비밀번호를 받지 않고 카카오 로그인만 씁니다.</li>
            </ul>
          </section>

          <section>
            <h2>8. 개인정보 보호책임자</h2>
            <p>개인정보에 관한 문의, 불만, 피해 구제는 아래로 연락해 주세요.</p>
            <dl className="policy__contact">
              <dt>보호책임자</dt><dd>TripHelper 운영자</dd>
              <dt>이메일</dt><dd><Contact /></dd>
            </dl>
            <p>더 도움이 필요하면 아래 기관에 문의할 수 있습니다.</p>
            <ul>
              <li>개인정보침해신고센터: 국번 없이 118 (privacy.kisa.or.kr)</li>
              <li>개인정보분쟁조정위원회: 1833-6972 (www.kopico.go.kr)</li>
              <li>대검찰청 사이버수사과: 국번 없이 1301 (www.spo.go.kr)</li>
              <li>경찰청 사이버수사국: 국번 없이 182 (ecrm.police.go.kr)</li>
            </ul>
          </section>

          <section>
            <h2>9. 방침의 변경</h2>
            <p>이 방침은 {EFFECTIVE}부터 적용됩니다. 내용이 바뀌면 적용 7일 전에 이 페이지에 알립니다.</p>
          </section>

          <p className="policy__back"><Link href="/">처음 화면으로</Link></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
