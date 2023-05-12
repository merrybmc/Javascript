// Prototype

// 텅빈 오브젝트를 만들었음에도 불구하고 기본적인 함수들이 내장되어 있음
const obj1 = {};
obj1.toString();

// 객체는 오브젝트라는 이름을 가진 프로토타입을 기본적으로 가지고 있음
// 외부에서는 직접 접근 불가능
// 생성자 함수에서는 :prototype 으로 접근 가능

const obj2 = {};
// 프로토타입을 개별적으로 상속받는 것이 아닌 동일한 프로토타입을 상속받음
console.log(obj1.__proto__ === obj2.__proto__); // true

const dog = { name: '와우' };
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));
console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);
const des2 = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(des2);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name);
console.log(Object.keys(dog));
console.log(Object.values(dog));
