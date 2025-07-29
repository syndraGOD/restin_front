# CLAUDE.md

이것은 카페의 빈 좌석을, 음료없이 저렴하게 이용하고 싶은 소비자와 중개하는 플랫폼 서비스입니다.

# 텍스트 규칙
- CLI 언어 설정을 한국어로 설정합니다.

# MCP 서버

## Figma 개발 모드 MCP 규칙
- Figma 개발 모드 MCP 서버는 이미지 및 SVG 에셋을 제공하는 엔드포인트를 제공합니다.
- 중요: Figma 개발 모드 MCP 서버가 로컬 호스트 소스를 이미지 또는 SVG로 반환하는 경우, 해당 에셋을 직접 사용하십시오.
- 중요: Figma 페이로드에 로컬 호스트 소스가 제공되는 경우, 플레이스홀더를 가져오거나 생성하지 마십시오.

# 기술 사양

./package.json 파일을 확인하십시오.

- **개발** : Next.js, TypeScript, React.js
- **스타일링** : tailwindcss@4
- **API 요청** : axios, @tanstack/react-query
- **애니메이션** : lottie-node

# 디렉토리 구조

```
figma-mcp/
├── public/ /* 정적 에셋 예: png, jpg, ... */
└── app/
    ├── [페이지 이름]/
    │   ├── _features/
    │   │   └── ui/
    │   │       └── [...].tsx /* [페이지 이름]에서 컴포넌트를 사용하는 경우 */
    │   │   └── lib/
    │   │       └── [...].tsx /* SVG가 필요한 경우, index.ts와 같은 바렐 파일을 사용하십시오. */
    │   │   └── hooks/ /* [페이지 이름]에서 사용자 정의 훅을 사용하는 경우 */
    │   ├── _entities/
    │   │   └── model/
    │   │       └── [...].ts /* API 호출을 위한 유형 또는 인터페이스, 예: 응답 DTO, 요청 DTO 또는 모델 등 */
    │   ├── api/
    │   │    ├── axios.ts /* axios 함수 그룹 */
    │   │    └── queries.ts /* @tanstack/react-query의 useQuery 객체 */
    │   ├── page.tsx /* _features/ui/[페이지 이름]PageView.tsx에만 내보내기 */
    │   └── page.tsx
    ├─── shared/
    │   ├── theme/ /* 피그마의 색상 토큰, 텍스트 스타일 */
    │   ├── components/ /* 기능 페이지의 공유 컴포넌트 */
    │   ├── layouts/ /* 레이아웃 공유 컴포넌트 */
    │   └── hooks/ /* 기능 페이지의 공유 훅 */
    └─── stories/
```

# 구현

- 각 페이지는 /app의 [페이지 이름] 디렉토리를 통해 관리됩니다.
- 페이지를 구현해야 하는 경우, 디렉토리 구조 규칙을 따르십시오.
- 페이지를 구현할 때 모델 및 API를 선언해야 합니다.
- 피그마에서 사용하는 모든 텍스트와 색상과 아이콘은 /theme 디렉토리의 색상 토큰과, 텍스트 스타일, 아이콘을 사용하여 구현하시오.
- 피그마에서 사용돠는 컴포넌트(예: 버튼 또는 입력)들을 개발단에서 동일하게 /components 디렉토리에 구현하시오.
- 페이지를 작성 시 컴포넌트와 레이아웃 컴포넌트만 활용하여 작성하시오
- 컴포넌트를 구현시 div-css역할만을 수행하는 컴포넌트는 /layouts 디렉토리에 저장하여 레이아웃 컴포넌트를 분리하시오
- 컴포넌트 구현시 피그마 컴포넌트와 100% 일치하게 storybook을 /stories 디렉토리에 구현하시오, storybook에서 실행되는 컴포넌트는 피그마의 컴포넌트와 동작이 같아야 합니다.
- api엔드포인트 연결은 클로드로 구현 후 수동으로 인간이 작성합니다. axios.ts에서 실제 api를 호출하지 말고, 샘플값을 return하도록 구현하십시오.
- statusbar 컴포넌트는 무시하고, 만약 페이지 내에 statusbar 컴포넌트가 있다면 해당 영역을 없는 취급하시오 구체적으로는 statusbar 컴포넌트 아래에 있는 내용들이 위로 올라와야 합니다.


# 피해야 할 패턴
- any type을 사용하지 마십시오. interface 또는 type이 필요한 경우, [feuture page name]/types.ts를 작성하고 내보내십시오.
- gap 또는 h-{} div을 최대한 사용하고 margin 또는 padding 스타일링 패턴은 가능한 한 피하세요.
- React.module 패턴을 사용하지 마십시오. 그냥 가져와서 사용하십시오.
- 인라인 스타일을 사용하지 마십시오. 
- 함수를 처리할 때 이 규칙을 사용하여 handle{대상}{이벤트 이름}(예: handleClickButton, handleChangeInput)으로 함수를 명명하십시오.
- 필요한 경우, Figma의 SVG 코드를 복사하여 SVG 컴포넌트로 변환하여 사용하십시오. 직접 에셋 파일을 구현하지 마십시오.
- relative, absolute 대신 flex 및 grid Tailwind CSS 키워드를 사용하십시오.

# 명령을 실행 후
- 수정한 모든 파일들에서 typescript 오류가 안나는지 체크하시오.
- 페이지를 수정하거나, 구현하거나, 해당 페이지의 테스트를 요청받았을 경우 localhost:3000/[수정한 url] 을 접속하여 오류가 안나는지 체크하고 오류가 있다면 수정하고 다시 접속하여 체크하시오, 만약 해당 과정을 5회 반복했는데도 계속 오류가 난다면, 오류의 추정 원인과 시도해볼 수 있는 해결방법을 정리하여 루트 디렉토리에 claude_error 디렉토리에 내용을 정리한 파일을 저장하시오. 이후 스토리북 서버 또한 실행시켜 같은 과정을 반복하시오
- 만약 로컬 서버를 실행시키는 과정에서 기존에 이미 서버가 열려있어서 3000포트로 실행이 불가능하다면, 강제로 종료하고 클로드에서 실행시켜서 테스트하시오.

# 디자인 시스템 업데이트를 요청 받은 경우
- https://www.figma.com/design/29v0o4cGxEqcTKozb7EABb/Design-System-v1.0-?node-id=15-21&m=dev 링크의 색상 토큰과 https://www.figma.com/design/29v0o4cGxEqcTKozb7EABb/Design-System-v1.0-?node-id=5-279&m=dev 링크의 텍스트 스타일과 https://www.figma.com/design/29v0o4cGxEqcTKozb7EABb/Design-System-v1.0-?node-id=21-687&m=dev 링크의 아이콘을 /theme 디렉토리에 색상 토큰명, 텍스트 스타일 명, 아이콘 3가지로 정의 및 변경사항 적용하거나 구현 하십시오, 만약 디자인 시스템 3링크 중 한개라도 접근이 불가하다면 명령을 중지하시오.