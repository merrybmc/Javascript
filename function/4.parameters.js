// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수에 기본값 설정 가능 (Default Parameters)
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  return a + b;
}

add(1, 2, 3);

console.log(add(1, 2, 3));

// Rest 매개변수 (Rest Parameters)
// 얼마나 많은 매개변수가 전달될지 모를 때
function sum(...numbers) {
  console.log(numbers);
  console.log(arguments);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
