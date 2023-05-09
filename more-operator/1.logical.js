// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '강아지' };
const obj2 = { name: '고양이', owner: 'bmc' };

if (obj1 && obj2) {
  console.log('true');
}

if (obj1 || obj2) {
  console.log('true');
}

// 단축평가
let result = obj1 && obj2;
console.log(result);

let result2 = obj1 || obj2;
console.log(result2);

// 활용 예
// && 조건이 truthy일 때, 무언가를 해야할 경우
// || 조건이 falshy일 때, 무언가를 해야할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('앱이 crash됨');
  }
  animal.owner = '바뀐주인';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어');
  }
  animal.owner = '새로운주인';
}

if (obj1.owner) {
  changeOwner(obj1);
}

obj1.owner && changeOwner(obj1); // 실행되지 않음
obj2.owner && changeOwner(obj2); // 실행됨
console.log(obj1);
console.log(obj2);

if (!obj1.owner) {
  makeNewOwner(obj1);
}

obj1.owner || makeNewOwner(obj1); // 실행됨
obj2.owner || makeNewOwner(obj2); // 실행되지 않음
console.log(obj1);
console.log(obj2);

// null 또는 undefined일 경우를 확인할 때
// let item; //= { price: 1 };
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값 설정
// default parameter는 parameter의 값을 전달하지 않거나, undefined로 설정할 경우
// || 값이 falshy한 경우 설정(할당) : 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello';
  console.log(message);
}

print();
print(undefined);
print(null);
