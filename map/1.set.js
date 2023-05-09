// Set
const set = new Set([1, 2, 3]);
console.log(set);

console.log(set.size);

// 아이템이 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 순회
set.forEach((item) => console.log(item));
for (const values of set.values()) {
  console.log(values);
}

// 추가
set.add(6);
console.log(set);
set.add(6); // 배열과 다르게 값의 중복이 안됨
console.log(set);

// 삭제
set.delete(6);
console.log(set);
set.clear(); // 모두 삭제
console.log(set);

// 오브젝트 세트
const obj1 = { name: '사과', price: 8 };
const obj2 = { name: '바나나', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

obj1.price = 10;
objs.add(obj1); // 기존의 obj1의 price의 값만 바뀜
console.log(objs);

const obj3 = { name: '바나나', price: 5 };
objs.add(obj3); // 메모리 참조 주소가 다름
console.log(objs);
obj3.price = 8;
console.log(objs);
