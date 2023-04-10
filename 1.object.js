// Object literal { key : value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)

let apple = {
  name: 'apple',
  hello: '🖐🏻1',
  0: 1,
  ['hello']: '🖐🏻2',
};

// 속성, 데이터에 접근하기 위해서는

// 마침표 표기법 dot notation
console.log(apple.name);
console.log(apple.hello);

// 대괄호 표기법 bracket notation
console.log(apple[0]);
console.log(apple['hello']);
console.log(apple['name']);

// 속성 추가
apple.emoji = '😀';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji);
