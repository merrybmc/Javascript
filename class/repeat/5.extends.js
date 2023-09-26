class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log('먹자!');
  }

  sleep() {
    console.log('자자!');
  }
}

class Tiger extends Animal {}

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }

  play() {
    console.log('놀자!');
  }

  eat() {
    // 부모에 있는걸 유지하면서 추가적인걸 구현
    super.eat();

    // 오버라이딩 overriding
    // 부모 클래스에 있는걸 자식 클래스가 덮어씌운다.
    console.log('강아지가 먹는다!!');
  }
}

const tiger = new Tiger('노랑이!');
console.log(tiger);
tiger.eat();
tiger.sleep();

const dog = new Dog('파랑이!', '새람이!');
console.log(dog);
dog.play();

dog.eat();
