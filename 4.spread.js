// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 펼쳐질 수 있다.
// func(...iterable)
// [...iterable]
// { ...obj }
// ES2018에 도입됨

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
const result = add(nums[0], nums[1], nums[2]);
console.log(result);

const result2 = add(...nums);
console.log(result2);

// Rest parameters
function sum(first, second, ...nums) {
  console.log(first);
  console.log(second);
  console.log(nums);
}

const result3 = sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ['배', '키위'];
const fruits2 = ['딸기', '바나나'];

let arr = fruits1.concat(fruits2);
console.log(arr);

arr = [...fruits1, '수박', ...fruits2];
console.log(arr);

// Object
const bmc = { name: 'bmc', age: 20 };
const updated = {
  ...bmc,
  job: 's/w enginner',
};
console.log(bmc);
console.log(updated);
