// 객체를 손쉽게 만들 수 있는 템플릿

// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 (최신 ES6)

// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '사과');
const orange = new Fruit('orange', '오렌지');

// 클래스 변환
class ClassFruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// classApple은 Fruit 클래스의 인스턴스이다.
const classApple = new ClassFruit('apple', '사과');
// classOrange는 Fruit 클래스의 인스턴스이다.
const classOrange = new ClassFruit('orange', '오렌지');

// obj는 객체이며 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'ellie' };

console.log(classApple);
console.log(classOrange);
