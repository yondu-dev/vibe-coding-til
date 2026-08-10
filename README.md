# vibe-coding-til

바이브 코딩 학습 내용을 기록하는 템플릿입니다.

## 프로젝트 목표

간단한 Todo 앱을 만들면서 AI 코딩 에이전트를 활용한 개발 흐름을 실습합니다.

핵심은 코드를 바로 생성하는 것이 아니라, 먼저 프로젝트 지침을 정의하고 다음 과정을 반복하는 것입니다.

`Define → Explore → Plan → Implement → Verify → Review`

## 지침 생성 전에 해야 할 일

- Todo 앱의 목적과 기본 기능을 정리합니다.
- 사용할 기술 스택을 결정합니다: React, TypeScript, Vite
- 기본 디렉터리 구조와 코딩 규칙을 정합니다.
- 작업 방식과 검증 방법을 정합니다.
- 테스트, lint, build에 사용할 명령어를 확인합니다.
- 완료 조건과 금지 사항을 정합니다.
- 위 내용을 바탕으로 Codex용 `AGENTS.md` 또는 Claude Code용 `CLAUDE.md`를 작성합니다.

## 구현할 기본 기능

- Todo 추가
- Todo 목록 표시
- Todo 완료 상태 변경
- Todo 삭제

## 개발 및 검증 흐름

1. 현재 프로젝트를 탐색합니다.
2. 구현 계획을 먼저 확인합니다.
3. 계획한 범위만 구현합니다.
4. 테스트, lint, build를 실행합니다.
5. 실패 원인을 분석하고 수정한 뒤 다시 검증합니다.
6. AI Review와 Human Review를 진행하고 `git diff`를 확인합니다.
