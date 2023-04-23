// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지가 point

const fruits = ['banana', 'apple', 'grape'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // 배열인 경우 true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('apple')); // 해당 인덱스 번호 출력
console.log(fruits.indexOf('apple2')); // 없을 경우 -1 출력

// 배열안에 특정한 아이템이 있는지 확인 체크
console.log(fruits.includes('apple')); // 있을 경우 true
console.log(fruits.includes('apple2')); // false

// 추가 - 제일 뒤
fruits.push('backMushroom'); // 배열 자체를 수정(업데이트)
console.log(fruits);

// 추가 - 제일 앞
fruits.unshift('frontMushroom');
console.log(fruits);

// 제거 - 제일 뒤
fruits.pop();
console.log(fruits);

// 제거 - 제일 앞
fruits.shift();
console.log(fruits);

// 중간에 추가/삭제
fruits.splice(1, 1); // 인덱스 1부터 시작해서 1개를 삭제
console.log(fruits);

fruits.splice(1, 0, 'apple', 'apple2'); // 인덱스 1부터 시작해서 하나도 삭제하지 않고 apple, apple2을 추가
console.log(fruits);

// 잘라진 새로운 배열을 만들기
let newArray = fruits.slice(0, 2); // 인덱스 0번부터 시작해서 2개 자르기
console.log(newArray);
console.log(fruits);

newArray = fruits.slice(-1); // 제일 뒤에서부터 한 칸
console.log(newArray);

// 여러 개의 배열을 합치기
const Array1 = [1, 2, 3];
const Array2 = [4, 5, 6];
const Array3 = Array1.concat(Array2);
console.log(Array3);

// 배열의 순서를 거꾸로
const reverseArray = Array3.reverse();
console.log(reverseArray);

// 중첩 배열을 하나의 배열로 표기
let Array4 = [
  [1, 2, 3],
  [4, [5, 6, [7, 8]]],
];
console.log(Array4);
console.log(Array4.flat());
console.log(Array4.flat(2));
console.log(Array4.flat(3));

// 특정한 값으로 배열을 채우기
let Array5 = Array4.flat(3);
Array5.fill(0); // 배열의 값을 0으로 채우기
console.log(Array5);
Array5.fill('s', 1, 3); // 배열의 값을 인덱스 1부터 3-1(2) 까지 s로 채우기
console.log(Array5);

// 배열을 문자열로 합하기
let text = Array4.join();
console.log(text);
let text2 = Array4.flat(3).join('');
console.log(text2);
let text3 = Array4.flat(3).join('|');
console.log(text3);
