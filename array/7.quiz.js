// 5보다 큰 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

const findNum = nums.filter((value) => {
  return value > 5;
});

console.log(findNum);

const sumNum = findNum.reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);

console.log(sumNum);

const result = sumNum / findNum.length;
console.log(result);
