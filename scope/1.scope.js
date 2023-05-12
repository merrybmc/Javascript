// scope가 적용되는 범위
// 코드 블럭: { },
// if() { },
// for() { },
// function() { }
// ...
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없음

{
  // 코드 블럭안에 있는 변수는 블럭 내부에서만 접근 가능
  const a = 'a';
}

const b = 'b';

console.log(a); // 외부에서 접근 불가능
console.log(b);

// 함수  외부에서는 함수 내부의 변수를 참조할 수 없음
function print() {
  // 이러한 변수를 지역 변수, local 변수라고 일컫음
  const message = 'Hello World';
  console.log(message);
}
console.log(message);
