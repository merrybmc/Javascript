const map = new Map([
  ['key1', '사과'],
  ['key2', '바나나'],
]);

console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1')); // key name으로 확인 true
console.log(map.has('key3'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys()); // key만 출력
console.log(map.values()); // value만 출력
console.log(map.entries()); // key, value 모두 출력

// 찾기
console.log(map.get('key1')); // key에 해당하는 value 출력
console.log(map.get('key3')); // undefined

// 추가
map.set('key2', '바나나');
map.set('key3', '키위');

console.log(map);

// 삭제
map.delete('key2');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// 오브젝트와의 차이점
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get(key));
