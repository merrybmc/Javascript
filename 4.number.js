const num1 = 123; // 원시 타입
const num2 = new Number(123); // 객체 타입
console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE); // 정수에서 사용할 수 있는 최대값
console.log(Number.MIN_VALUE); // 정수에서 사용할 수 있는 최소값
console.log(Number.MAX_SAFE_INTEGER); // 정수에서 안전하게 사용할 수 있는 최대값
console.log(Number.MIN_SAFE_INTEGER); // 정수에서 안전하게 사용할 수 있는 최소값
console.log(Number.NaN); // 숫자가 아닌 값
console.log(Number.NEGATIVE_INFINITY); // - 무한
console.log(Number.POSITIVE_INFINITY); // + 무한

if (num1 === Number.NaN) {
}

if (Number.isNaN(num1)) {
}

if (num1 < Number.MAX_SAFE_INTEGER) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n제곱으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

// 숫자를 문자열로 변환
console.log(num4.toString());

// 언어에 따른 문자열로 변환
console.log(num4.toLocaleString('ar-EG')); // 아라비아

// 원하는 자릿수까지 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수가 표기가 안될 때는 지수 표기법으로 표현

console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 작은 숫자

if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(true);
}

const num = 0.1 + 0.2; // 0.3
console.log(num); // 0.30000000000000004
// 자바스크립트에서 내부적으로 계산을 할 때는 10진수를 각각 2진수로 변환하여 연산하고 다시 10진수로 반환

function isEqual(original, expected) {
  return original === expected;
  //   return original - expected < Number.EPSILON;
  //   return Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.3)); // false
