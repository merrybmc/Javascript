const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}:🍊`);
  },
};

const orange = {
  name: 'orange',
  display: function () {
    console.log(`${this.name}:🍈`);
  },
};

// 생성자 함수
// 대문자를 사용하면 생성자를 만들 수 있다.
function Fruit(name, emoji) {
  this.name = name; // name이라는 key에 parameter로 전달된 name이 value로 생성됨
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
  //   return this; // 생략 가능
}

apple.display();
orange.display();

const apple2 = new Fruit('apple', '🍊');
const orange2 = new Fruit('orange', '🍈');

apple2.display();
orange2.display();
