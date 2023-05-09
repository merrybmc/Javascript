// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(array) {
  const replaced = Array.from(array);
  for (let i = 0; i < array.length; i++) {
    if (replaced[i] === '🍓') {
      replaced[i] = '🥝';
    }
  }
  return replaced;
}
const arrayQuiz1 = ['🍌', '🍓', '🍇', '🍓'];
const result1 = replace(arrayQuiz1);
console.log(result1);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function count(array) {
  let counted = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '🥝') {
      counted++;
    }
  }
  return counted;
}
const arrayQuiz2 = ['🍌', '🥝', '🍇', '🥝'];
const result2 = count(arrayQuiz2);
console.log(result2);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(array1, array2) {
  const result = [];
  for (let i = 0; array1.length; i++) {
    if (array2.includes(array1[i])) {
      result.push(array1[i]);
    }
  }
  return result;
}

console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));
