// Immutability 불변성 == unchangable 의 동의어

// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않다.
// 상태 변경이 필요한 경우에는 새로운 값을 만들어서 반환해야 한다.

function display(num) {
  num = 5; // 💩
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

// 왜냐하면 원시값은 값에 의한 복사이며 값 자체가 복사되어 전달되어 크게 문제가 없지만
// 객체값일 경우 참조에 의한 복사(메모리주소) 라서 문제가 생긴다.

function displayObj(obj) {
  obj.name = 'Bob'; // 💩💩💩💩💩 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경하지 않아야 한다.
  console.log(obj);
}

const myName = { name: 'byeongmin' };
displayObj(myName);
console.log(myName);
