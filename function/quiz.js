// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함
// 예를들어 숫자 5가 주어졌을 때,
// 1. 순회하는 숫자를 다 출력한다.
// 2. 순회하는 숫자의 두배값을 출력한다.

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

const normal = (num) => console.log(num);
const x2 = (num) => console.log(num * 2);

iterate(5, normal);
iterate(5, x2);
