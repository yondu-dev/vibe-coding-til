# Todo 웹앱 구현 계획

> **For agentic workers:** 이 계획은 작업 순서 추적용입니다. 각 단계의 체크박스를 완료하면서 진행하고, 구현 전에는 반드시 현재 계획과 프로젝트 지침을 확인합니다.

**Goal:** Codex의 프로젝트 지침과 계획 기반 작업 흐름을 적용해 기본 Todo 웹앱을 만들고, 이후 변경·검증·리뷰 과정을 실습한다.

**Architecture:** Vite + React + TypeScript 단일 페이지 앱으로 구성한다. Todo 데이터와 필터 상태는 React 상태로 관리하고, UI는 입력·목록·항목 컴포넌트로 나눈다. 저장소나 서버는 추가하지 않는다.

**Tech Stack:** React, TypeScript, Vite

## Global Constraints

- 기본 기능은 Todo 추가, 목록 표시, 완료 상태 변경, 삭제로 한정한다.
- 완료 항목 숨기기는 기본 기능 구현 후 별도 변경 작업으로 진행한다.
- 구현 전에는 계획을 먼저 제시하고 승인된 범위만 수정한다.
- 기존 구조와 상태 관리 방식을 먼저 확인한 뒤 변경한다.
- 구현 후 프로젝트 지침에 정의한 test, lint, build 명령을 모두 실행한다.
- 검증 실패 시 원인 분석 → 수정 → 재검증 순서로 진행한다.
- 최종 완료 전 AI Review, `git status`, `git diff`, Human Review를 진행한다.

---

### Task 1: 프로젝트 지침 작성

**Files:**
- Create: `AGENTS.md`

- [x] Todo 앱의 목표, 기술 스택, 디렉터리 구조, 코딩 규칙을 문서화한다.
- [x] 작업 순서를 `Explore → Plan → Implement → Verify → Review`로 정의한다.
- [x] 검증 명령과 완료 조건을 명시한다.
- [x] 불필요한 라이브러리 추가, 범위 밖 기능 구현, 지침 확인 전 구현을 금지한다.
- [x] 사람이 문서를 읽고 요구사항과 규칙이 일치하는지 검토한다.

### Task 2: React 프로젝트 초기화

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`

- [x] Vite의 React + TypeScript 템플릿으로 프로젝트를 초기화한다.
- [x] 개발 서버가 실행되고 기본 화면이 표시되는지 확인한다.
- [x] `package.json`에 `test`, `lint`, `build` 검증 명령을 정의한다.
- [x] 초기화 결과를 `git diff`로 확인한다.

### Task 3: Todo 기본 기능 구현

**Files:**
- Create: `src/types/todo.ts`
- Create: `src/components/TodoInput.tsx`
- Create: `src/components/TodoList.tsx`
- Create: `src/components/TodoItem.tsx`
- Modify: `src/App.tsx`

- [x] `Todo` 타입에 `id`, `text`, `completed` 필드를 정의한다.
- [x] 입력 컴포넌트에서 비어 있지 않은 Todo를 추가한다.
- [x] 목록 컴포넌트에서 Todo를 표시한다.
- [x] 항목 컴포넌트에서 완료 상태를 변경하고 삭제한다.
- [x] 상태 관리는 `App.tsx`의 React 상태로 통일한다.
- [x] 기본 기능을 벗어나는 필터, 서버 저장, 인증은 추가하지 않는다.

### Task 4: 기본 기능 검증

**Files:**
- Create: `src/App.test.tsx`

- [x] Todo 추가, 완료 상태 변경, 삭제 동작을 테스트한다.
- [x] `npm test`를 실행해 테스트가 통과하는지 확인한다.
- [x] `npm run lint`를 실행해 정적 검사가 통과하는지 확인한다.
- [x] `npm run build`를 실행해 배포 빌드가 성공하는지 확인한다.
- [x] 실패하면 원인을 수정하고 세 명령을 다시 실행한다.

### Task 5: 완료 항목 숨기기 기능 계획 및 구현

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/TodoList.tsx`
- Modify: `src/App.test.tsx`

- [x] 현재 구현과 상태 관리 방식을 먼저 탐색한다.
- [x] 완료 항목 표시 여부를 관리할 최소 상태 또는 필터 방식을 계획한다.
- [x] 계획에 없는 파일은 수정하지 않는다.
- [x] 완료 항목 숨기기 UI와 필터 동작을 구현한다.
- [x] 완료 항목 숨김 상태와 해제 상태를 테스트한다.

### Task 6: 변경 사항 검증 Loop 실행

**Files:**
- Review: `package.json`, `src/`, `src/App.test.tsx`

- [x] 프로젝트 지침의 test, lint, build 명령을 순서대로 실행한다.
- [x] 실패한 명령과 원인을 확인한다.
- [x] 실패 원인에 해당하는 구현 또는 테스트 파일만 수정한다.
- [x] 수정 후 `npm test`, `npm run lint`, `npm run build`를 다시 실행한다.

### Task 7: AI Review 및 Human Review

**Files:**
- Review: `AGENTS.md`, `package.json`, `src/`, 테스트 파일

- [x] 요구사항이 모두 구현되었는지 확인한다.
- [x] 불필요한 파일과 변경이 없는지 확인한다.
- [x] 테스트가 실제 동작을 검증하는지 확인한다.
- [x] 프로젝트 지침을 어긴 구현이 없는지 확인한다.
- [x] `git status`와 `git diff`를 확인한다.
- [x] 사람이 최종 변경 내용을 검토하고 완료 여부를 결정한다.
