// Boolean
// 원시타입도 해당하는 wrapper 객체가 있다.
true.valueOf;

const isTrue = new Boolean(true);
const isTrue2 = true;

console.log(isTrue.valueOf());
console.log(isTrue2);

/** 데이터 타입에서 False인 값들
 * Falshy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

const bNoParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bNaN = new Boolean(NaN);
const bUndefined = new Boolean(undefined);
const bEmptyString = new Boolean('');

console.log(bNoParam);
console.log(bZero);
console.log(bNull);
console.log(bNaN);
console.log(bUndefined);
console.log(bEmptyString);

/** 데이터 타입에서 True인 값들
 * Truthy
 * 1
 * -1
 * '0'
 * 'false'
 * [] 빈 배열
 * {} 빈 객체
 */

const bTrue = new Boolean(true);
const bTrueString = new Boolean('true');
const bFalseString = new Boolean('false');
const bByeongMin = new Boolean('Byeong Min');
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});

console.log(bTrue);
console.log(bTrueString);
console.log(bFalseString);
console.log(bByeongMin);
console.log(bArrayProto);
console.log(bObjProto);
