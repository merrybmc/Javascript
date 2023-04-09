// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}
// 함수 표현식에 함수 이름을 설정할 경우 지정되지 않은 함수라고 오류가 발생, 외부에서 접근 불가능
// 이름이 없는 함수를 무명 함수라고 일컫음
let add = function (a, b) {
  return a + b;
};

const name = function myName() {
  return 'byeongMin';
};

myName();

console.log(add(1, 2));

// 화살표 함수 표현식 const name = () => {}
let add2 = (a, b) => {
  return a + b;
};

// 함수 안에서 특별한 수행을 하지 않고 바로 return하는 경우일 때
// 값만 리턴하는 경우 중괄호 및 return 생략 가능
let add3 = (a, b) => a + b;

// 함수를 괄호로 묶을 경우 함수가 값으로 변경되어 바로 호출이 됨
// IIFE (Immedicately-Invoked Function Expressions) 즉각호출함수
(function run() {
  console.log('👍');
})();
