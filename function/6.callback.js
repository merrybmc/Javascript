// 일급객체 first-class object
// 일반 객체처럼 모든 연산이 가능한 것
// - 함수의 매개변수로 전달
// - 함수의 반환 값
// - 할당 명령문
// - 동일 비교 대상

// 고차함수 Higher-order function
// - 인자로 함수를 받거나 (콜백함수)
// - 함수를 반환하는 함수를 고차함수

// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// action 인자에 외부로부터 함수를 전달받는 것을 콜백함수라고 부름
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 래퍼런스(참조값)이 전달된다.
// 그래서 함수는 고차함수 안에서 나중에 필요한 순간에 호출이 됨
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}

console.log(calculator(1, 2, add));
console.log(calculator(2, 3, multiply));
