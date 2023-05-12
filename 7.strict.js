// 엄격 모드 strict mode
// 리액트같은 라이브러리를 사용 시 기본적으로 엄격모드 적용
'use strict'; // 엄격모드 적용

// delete 불가능
var x = 1;
delete x;

function add(x) {
  var a = 2;
  // 키워드 생략 불가능
  b = a + x;
}
add(1);

// num의 키워드 생략 불가능
const array = [1, 2, 3];
for (num of array) {
  console.log(num);
}
