// 실행 컨텍스트 Execution Context
// 코드의 실행 순서와 스코프를 기억

// 각각의 블록은 렉시컬 환경 (Lexical Environment) 라는 내부 오브젝트를 가지고 있음
// 렉시컬 환경 안에는 2가지 종류로 나뉨
// 1. 환경 레코드 Environment
// 2. 외부 환경 참조 Outer Lexical Environment Reference

// 전역 스코프
const a = 1; // 외부 렉시컬 환경 참조
// 블록1 스코프
{
  const a = 2; // 환경 레코드
  // 블록2 스코프
}
