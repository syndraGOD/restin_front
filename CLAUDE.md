# CLAUDE.md

이것은 카페의 빈 좌석을, 음료없이 저렴하게 이용하고 싶은 소비자와 중개하는 플랫폼 서비스입니다.

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
    └── [페이지 이름]/
        ├── _features/
        │   └── ui/
        │       └── [...].tsx /* [페이지 이름]에서 컴포넌트를 사용하는 경우 */
        │   └── lib/
        │       └── [...].tsx /* SVG가 필요한 경우, index.ts와 같은 바렐 파일을 사용하십시오. */
        │   └── hooks/ /* [페이지 이름]에서 사용자 정의 훅을 사용하는 경우 */
        ├── _entities/
        │   └── model/
        │       └── [...].ts /* API 호출을 위한 유형 또는 인터페이스, 예: 응답 DTO, 요청 DTO 또는 모델 등 */
        └── api/
            ├── axios.ts /* axios 함수 그룹 */
            └── queries.ts /* @tanstack/react-query의 useQuery 객체 */
        └── page.tsx /* _features/ui/[페이지 이름]PageView.tsx에만 내보내기 */
        └── page.tsx
    └── shared/
        ├── components/ /* 기능 페이지의 공유 컴포넌트 */
        └── hooks/ /* 기능 페이지의 공유 훅 */
```

# 구현

- 각 페이지는 src/app의 [페이지 이름] 디렉토리를 통해 관리됩니다.
- 페이지를 구현해야 하는 경우, 디렉토리 구조 규칙을 따르십시오.
- 페이지를 구현할 때 모델 및 API를 선언해야 합니다.
- 자주 사용되는 컴포넌트(예: 버튼 또는 입력)의 경우, 해당 컴포넌트를 공유할 수 있도록 유연하게 구현하십시오.

# 피해야 할 패턴

- any type을 사용하지 마십시오. interface 또는 type이 필요한 경우, [feuture page name]/types.ts를 작성하고 내보내십시오.
- gap 또는 h-{} div을 최대한 사용하고 margin 또는 padding 스타일링 패턴은 가능한 한 피하세요.
- 컴포넌트 파일이 150줄 이상인 경우, 훅 또는 컴포넌트를 별도의 모듈로 분리하십시오.
- React.module 패턴을 사용하지 마십시오. 그냥 가져와서 사용하십시오.
- 인라인 스타일을 사용하지 마십시오. 
- 함수를 처리할 때 이 규칙을 사용하여 handle{대상}{이벤트 이름}(예: handleClickButton, handleChangeInput)으로 함수를 명명하십시오.
- 필요한 경우, Figma의 SVG 코드를 복사하여 SVG 컴포넌트로 변환하여 사용하십시오. 직접 에셋 파일을 구현하지 마십시오.
- relative, absolute 대신 flex 및 grid Tailwind CSS 키워드를 사용하십시오.