const fruits = ['banana', 'grape', 'strawberry', 'grape'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log('___________________');

// 배열을 돌면서 원하는 것을 할 때
//forEach(value = 배열의 요소, index = 배열의 인덱스, array = 배열 전체)
fruits.forEach(function (value, index, array) {
  console.log('___________________');
  console.log(value);
  console.log(index);
  console.log(array);
});

console.log('___________________');

// 화살표 함수로 생략
fruits.forEach((value) => console.log(value));

console.log('___________________');

// 조건에 맞는 콜백함수 (아이템을 찾을 때)
// find : 제일 먼저 조건에 맞는 아이템 1개를 반환
const item1 = { name: 'tea', price: 2 };
const item2 = { name: 'cookie', price: 1 };
const item3 = { name: 'rice', price: 3 };
const product = [item1, item2, item3, item2];

const found = product.find((value) => {
  return value.name === 'cookie';
});

console.log(found);

console.log('___________________');

// findIndex 제일 먼저 조건에 맞는 인덱스 1개를 반환
const foundIndex = product.findIndex((value) => {
  return value.name === 'cookie';
});

console.log(foundIndex);

console.log('___________________');

// some 배열의 아이템들이 부분적으로 조건에 맞는지 확인
// 조건중에 하나라도 일치하는 경우
const result = product.some((value) => {
  return value.name === 'cookie';
});

console.log(result);

console.log('___________________');

// every 배열의 아이템들이 전부 조건에 일치하는지 확인
// 조건중에 모두 일치하는 경우
const result2 = product.every((value) => {
  return value.price < 4;
});
console.log(result2);

console.log('___________________');

// filter 조건에 맞는 아이템들을 새로운 배열로 생성
const filtered = product.filter((item) => item.name === 'cookie');
console.log(filtered);

console.log('___________________');

// map 배열의 아이템들을 각각 다른 아이템으로 매핑하고 변환해서 새로운 배열을 생성
const nums = [1, 2, 3, 4, 5];

const result3 = nums.map((item) => {
  return item * 2;
});
console.log(result3);

const result4 = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result4);

// flatMap
// 배열을 가지고 있는 새로운 배열 생성
const result5 = nums.map((item) => [1, 2]);
console.log(result5);

// 배열을 하나의 배열로 모두 표시
const result6 = nums.flatMap((item) => [1, 2]);
console.log(result6);

// flat Map 활용법
const array = ['front', 'coding'];
const result7 = array.map((text) => text.split(''));
console.log(result7);

const result8 = array.flatMap((text) => text.split(''));
console.log(result8);

console.log('___________________');

// sort
// 배열의 아이템들을 정렬
// 기본적인 형태는 문자열들을 오름차순 형태로 기존의 배열을 변경
const text = ['hi', 'abc'];
console.log(text);
text.sort();
console.log(text);

const numbers = [0, 5, 4, 2, 1, 10];
console.log(numbers);
numbers.sort();
// 문자열 형태로 변환되어 1 다음에 10이 출력됨
console.log(numbers);

// < 0 a가 앞으로 정렬됨, 오름차순
// > 0 b가 앞으로 정렬됨, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

console.log('___________________');

// reduce
// 배열의 요소들의 값을 하나로
const numbers2 = [1, 2, 3, 4, 5];
const result9 = numbers2.reduce((sum, value) => {
  console.log(sum);
  sum += value;
  return sum;
}, 0); // 0으로 초기화
console.log(result9);
