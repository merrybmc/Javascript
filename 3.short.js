const x = 1;
const y = 2;
const coordinate = { x: x, y: y };
const coordinate2 = { x, y };

console.log(coordinate);
console.log(coordinate2);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}

name = 'byeongMin';
age = 30;

const Obj = makeObj(name, age);
console.log(Obj);
