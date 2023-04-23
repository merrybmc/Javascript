// 얕은 복사 = Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어진다.
// Array.from, concat, slice, spread(...), Object.assign...
// 오브젝트가 복사될 때 새로운 오브젝트가 만들어지는 것이 아니라 메모리 주소가 복사됨
const pizza = { name: 'pizza', price: 2 };
const ramen = { name: 'ramen', price: 3 };
const sushi = { name: 'sushi', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log(store1);
console.log(store2);
console.clear();

store2.push(sushi);
console.log(store1);
console.log(store2);
console.clear();

pizza.price = 4;
console.log(store1);
console.log(store2);
