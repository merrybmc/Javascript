// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('do eat!');
//   }

//   sleep() {
//     console.log('do sleep..');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('do eat!');
//   }
//   sleep() {
//     console.log('do sleep..');
//   }
//   play() {
//     console.log('lets play!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('do eat!');
  }
  sleep() {
    console.log('do sleep..');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    // super
    // 상속하고 있는 부모를 가리킴
    // 부모의 생성자 함수를 호출하여 필요한 정보를 전달받는다.
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('lets play!');
  }

  // 오버라이딩 overriding
  // 부모 클래스에 있는걸 자식 클래스가 덮어씌우는 것
  eat() {
    super.eat();
    console.log('강아지가 먹는다');
  }
}

const dog = new Dog('빨강이', '철수');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();
