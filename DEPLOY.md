# Netlify 배포 가이드

## 🚀 빠른 배포 (드래그 앤 드롭)

### 방법 1: Netlify Drop (가장 간단)

1. **Netlify Drop 접속**
   - https://app.netlify.com/drop 접속
   - 또는 https://www.netlify.com/ → "Add new site" → "Deploy manually"

2. **프로젝트 폴더 업로드**
   - `TripHelper` 폴더 전체를 드래그 앤 드롭
   - 또는 "Browse to upload" 클릭 후 폴더 선택

3. **배포 완료!**
   - 몇 초 후 배포 완료
   - 자동으로 생성된 URL 확인 (예: `https://random-name-123.netlify.app`)
   - 이 URL을 복사해서 공유하세요!

## 🔗 Git 연동 배포 (자동 배포)

### 방법 2: GitHub 연동

1. **GitHub에 프로젝트 업로드**
   ```bash
   cd /Users/computer/Desktop/TripHelper
   git init
   git add .
   git commit -m "Initial commit"
   ```
   
   - GitHub에서 새 저장소 생성
   - 저장소 URL 복사 후:
   ```bash
   git remote add origin https://github.com/[username]/TripHelper.git
   git branch -M main
   git push -u origin main
   ```

2. **Netlify에서 Git 연동**
   - Netlify 대시보드 → "Add new site" → "Import an existing project"
   - GitHub 선택 → 저장소 선택
   - Build settings:
     - Build command: (비워두기 - 정적 사이트)
     - Publish directory: `.` (또는 비워두기)
   - "Deploy site" 클릭

3. **자동 배포 설정 완료**
   - 이후 GitHub에 push하면 자동으로 재배포됩니다!

## ⚙️ 배포 후 설정

### 1. 커스텀 도메인 연결 (선택사항)

1. Netlify 대시보드 → Site settings → Domain management
2. "Add custom domain" 클릭
3. 도메인 입력 (예: `triphelper.com`)
4. DNS 설정 안내에 따라 도메인 제공업체에서 설정
5. SSL 인증서 자동 발급 (몇 분 소요)

### 2. 환경 변수 설정 (필요시)

현재는 필요 없지만, 나중에 API 키 등을 사용한다면:
- Site settings → Environment variables
- 변수 추가

### 3. 빌드 설정 확인

`netlify.toml` 파일이 이미 있으므로 자동으로 설정됩니다.

## 🔧 배포 후 확인사항

배포 후 다음을 확인하세요:

1. **웹사이트 접속 테스트**
   - 생성된 URL로 접속
   - 모든 기능이 정상 작동하는지 확인

2. **도메인 URL 업데이트 (필요시)**
   - 커스텀 도메인을 사용한다면 `index.html`의 메타 태그 URL 업데이트:
     - Open Graph URL
     - Twitter Card URL
     - Canonical URL

3. **성능 확인**
   - Netlify는 자동으로 CDN을 제공하므로 빠른 속도 보장
   - HTTPS 자동 적용

## 📊 배포 상태 확인

- Netlify 대시보드에서 실시간 배포 상태 확인 가능
- 배포 로그 확인 가능
- 이전 버전으로 롤백 가능

## 🆘 문제 해결

### 배포가 실패하는 경우
- `netlify.toml` 파일 확인
- 파일 경로가 올바른지 확인
- Netlify 로그 확인

### 이미지가 안 보이는 경우
- 이미지 파일 경로 확인
- 대소문자 구분 확인 (Linux 서버는 대소문자 구분)

### API가 작동하지 않는 경우
- 브라우저 콘솔에서 CORS 오류 확인
- API 엔드포인트가 HTTPS인지 확인

## ✨ Netlify의 장점

- ✅ 무료 HTTPS 자동 제공
- ✅ 글로벌 CDN (빠른 속도)
- ✅ 자동 배포 (Git 연동 시)
- ✅ 무료 SSL 인증서
- ✅ 커스텀 도메인 지원
- ✅ 폼 처리 기능 (필요시)
- ✅ 서버리스 함수 지원 (필요시)

## 📝 다음 단계

배포가 완료되면:
1. 웹사이트 URL 공유
2. SEO 최적화 확인
3. 소셜 미디어 공유 테스트
4. 사용자 피드백 수집

축하합니다! 🎉 웹사이트가 성공적으로 배포되었습니다!

