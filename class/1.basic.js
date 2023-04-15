// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 템플릿)
// 2. 클래스

// 클래스 class
class Fruit {
  // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
}

// apple은 Fruit이라는 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍊');
const orange = new Fruit('orange', '🍈');
apple.display();
orange.display();

// obj는 객체이고 그 어떤 클래스도 인스턴스도 아니다.
const obj = { name: 'byeongMin' };
