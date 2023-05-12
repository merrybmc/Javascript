// var의 특징
// -> 일반 코딩 방식과 어긋남
// -> 코드의 가독성과 유지보수성에 좋지 않음

// 1. 변수를 선언하는 키워드 없이 선언 & 할당이 가능
// 선언인지, 재할당인지 구분하기 어려움
something = 'trash';
console.log(something);

// 2. 똑같은 이름으로 중복 선언 가능
var poo = 'garbage';
var poo = 'trash';
console.log(poo);

// let은 똑같은 이름으로 변수를 선언 불가능
// let num = 0;
// let num = 1;

// 3. 블록 레벨 스코프가 안됨
// 지역변수가 글로벌 변수와 동일
// 블록 스코프가 무시됨
var apple = '사과';
{
  var apple = '키위';
}
console.log(apple); // 키위

// 4. 함수 레벨 스코프만 지원됨
function example() {
  var dog = 'dog';
}
console.log(dog);
