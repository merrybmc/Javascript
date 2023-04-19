// 배열 생성 방법
let array = new Array(2); // 배열의 사이즈를 지정하여 생성
console.log(array);

array = new Array(1, 2, 3); // 배열의 내용을 원하는 개수만큼 생성
console.log(array);

array = Array.of(1, 2, 3, 4, 5); // 배열의 내용을 원하는 개수만큼 생성
console.log(array);

const anotherArray = [1, 2, 3, 4]; // 배열의 내용을 원하는 개수만큼 생성
console.log(anotherArray);

array = Array.from(anotherArray); // 배열의 내용을 복사
console.log(array);

array = Array.from('text'); // 문자열의 char 하나씩 생성
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 한다.
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사하다.
// 자바스크립트에서의 배열은 일반적으로 배열의 동작을 흉내낸 특수한 객체이다.
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Type Collections)

array = Array.from({ 0: '안', 1: '녕', legnth: 2 });
console.log(array);
