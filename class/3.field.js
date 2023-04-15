// 접근제어자 - 캡슐화
// private(#), public(아무것도 쓰지 않을 경우 기본), protected
class Fruit {
  #name;
  #emoji;
  #type = '과일';

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  #display = () => {
    console.log(`${this.#name} : ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍊');
console.log(apple);
