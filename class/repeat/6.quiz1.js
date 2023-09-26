// 카운터 구현
// 0 이상의 값으로 초기화 한 뒤 하나식 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스 만들기
{
  class Counter {
    constructor(number) {
      this.number = number;
    }

    addCount() {
      this.number += 1;
    }
  }

  const counter = new Counter(0);
  console.log(counter);

  counter.addCount();
  console.log(counter);
  counter.addCount();
  console.log(counter);
  counter.addCount();
  console.log(counter);
  counter.addCount();
  console.log(counter);
  counter.addCount();
  console.log(counter);
}

{
  class Counter {
    #value;
    constructor(startValue) {
      if (isNaN(startValue) || startValue < 0) {
        this.#value = 0;
      } else {
        this.#value = startValue;
      }
    }

    get value() {
      return this.#value;
    }

    increment = () => {
      this.#value++;
    };
  }

  const counter = new Counter(0);
  console.log('new', counter);

  console.log(counter.value);
  counter.increment(1);
  console.log(counter.value);
  counter.increment(1);
  console.log(counter.value);
  counter.increment(1);
  console.log(counter.value);
  counter.increment(1);
  console.log(counter.value);
  counter.increment(1);
  console.log(counter.value);
}
