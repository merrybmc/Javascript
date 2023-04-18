const textObj = new String('Hello World'); // 객체 타입
const text = 'Hello World!'; // 원시 타입

console.log(textObj);
console.log(text);

console.log(text[0]); // 문자열의 n번째 인덱스 H
console.log(text[1]); // 문자열의 n번째 인덱스 e
console.log(text[2]); // 문자열의 n번째 인덱스 l
console.log(text.charAt(0)); // 문자열의 n번째 인덱스 H (함수로 접근)
console.log(text.charAt(1)); // 문자열의 n번째 인덱스 e (함수로 접근)
console.log(text.charAt(2)); // 문자열의 n번째 인덱스 l (함수로 접근)
console.log(text.length); // 문자열의 길이
console.log(text.indexOf('l')); // 앞에서부터 텍스트가 몇번째 인덱스에 있는지 확인
console.log(text.lastIndexOf('l')); // 뒤에서부터 텍스트가 몇번째 인덱스에 있는지 확인
console.log(text.includes('l')); // 문자열에 특정한 문자열이 있는지 확인
console.log(text.includes('@')); // 문자열에 특정한 문자열이 있는지 확인
console.log(text.includes('World')); // 문자열에 특정한 문자열이 있는지 확인
console.log(text.startsWith('H')); // 문자열의 시작이 특정한 문자열인지 확인
console.log(text.startsWith('e')); // 문자열의 시작이 특정한 문자열인지 확인
console.log(text.startsWith('Hello')); // 문자열의 시작이 특정한 문자열인지 확인
console.log(text.endsWith('!')); // 문자열의 마지막이 특정한 문자열인지 확인
console.log(text.endsWith('W')); // 문자열의 마지막이 특정한 문자열인지 확인
console.log(text.endsWith('World!')); // 문자열의 마지막이 특정한 문자열인지 확인
console.log(text.toUpperCase()); // 문자열을 모두 대문자로 변환
console.log(text.toLowerCase()); // 문자열을 모두 소문자로 변환
console.log(text.substring(0, 2)); // 해당 인덱스 사이의 문자열만 출력
console.log(text.slice(2)); // 해당 인덱스부터 잘라서 출력
console.log(text.slice(-2)); // 뒤에서부터 해당 인덱스만 잘라서 출력

const space = '     space     ';
console.log(space);
console.log(space.length);
console.log(space.trim().length);

const longText = 'Get to the, point';
console.log(longText);
console.log(longText.split(' ')); // 스페이스 단위로 끊어서 출력
console.log(longText.split(' ', 2)); // 두 개만 끊어서 출력
