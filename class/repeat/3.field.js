// 접근 제어자
// private, public, protected

// public = default 모두 접근 가능
// private(#) = 내부에서 사용 가능, 외부에서 사용 불가능
class Fruit {
  #name;
  #emoji;
  #type = '과일';

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display() {
    console.log(`${this.#name}: ${this.#emoji}`);
  }
}

const apple = new Fruit('apple', '사과');
console.log(apple); // #field는 외부에서 접근이 불가능함

// 접근 수정 가능
apple.name = '오렌지';
console.log(apple);
