const fruits = ['banana', 'apple', 'grape'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]); // 배열의 인덱스는 0부터 시작
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length); // 배열의 개수 출력

// 배열의 간편하게 출력하는 방법 for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 좋지않은 추가, 삭제 방식

// 1. 인덱스를 이용하여 추가하는 방법
fruits[4] = 'mushroom'; // 비어있는 아이템이 중간에 남아있는 경우, 빈 배열이 생성
console.log(fruits);

// 2. delete를 통해 삭제할 경우
delete fruits[1];
console.log(fruits); // 삭제된 후, 빈 배열로 남아있음
