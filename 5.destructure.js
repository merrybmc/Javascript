// 구조 분해 할당 Destructureing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.

const fruits = ['배', '키위', '딸기', '바나나'];
console.log(fruits[0]);

const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍊'];
}

let result = createEmoji();
console.log(result);

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const bmc = { name: 'bmc', age: 20, job: 's/w enginner' };
function display(person) {
  console.log('이름', person.name);
  console.log('나이', person.age);
  console.log('직업', person.job);
}
const result2 = display(bmc);

function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
const result3 = display(bmc);

const { name, age, job: myjob } = bmc;
console.log(name);
console.log(age);
// console.log(job);
console.log(myjob);
