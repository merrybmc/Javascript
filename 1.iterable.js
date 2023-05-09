// Iterable 하다는건 순회가 가능하다는 것
// [Symbol.iterator](): Iterator;
// 심볼 정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체라는 것을 알수 있다.
// 순회가 가능하면 for..of 나 spread 연산자를 사용 가능하다.

const array = [1, 2, 3];

for (const item of array) {
  console.log(item);
}

console.log('______________');

for (const item of array.values()) {
  console.log(item);
}

console.log('______________');

for (const item of array.keys()) {
  console.log(item);
}

console.log('______________');

const obj = { 0: 1, 1: 1, 2: 2 };
for (const item in obj) {
  console.log(item);
}

const iterator = array.values();
console.log('iterator', iterator);

console.log('next', iterator.next());

console.log('next.value', iterator.next().value);
console.log('next.done', iterator.next().done);
console.log('next.value', iterator.next().value);
console.log('next.value', iterator.next().value);
console.log('next.done', iterator.next().done);

for (const item of iterator) {
  console.log(item);
}

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
