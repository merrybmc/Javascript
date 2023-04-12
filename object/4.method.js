const apple = {
  name: 'apple',
  display1: function () {
    console.log(this.name);
  },
  display2: function () {
    console.log(`${this.name}:🍊`);
  },
};

apple.display1();
apple.display2();
