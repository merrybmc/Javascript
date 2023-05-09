// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (2020)
// ?.

let item = { price: 1 };
// const price = item && price;
const price = item?.price;
console.log(price);

let obj = { name: 'dog', owner: { name: 'bmc' } };
// const ownerName = obj && obj.owner && obj.owner.name;
const ownerName = obj?.owner.name;
console.log(ownerName);
