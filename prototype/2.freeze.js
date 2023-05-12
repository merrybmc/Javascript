// 객체의 불변성
// 동결, Object.freeze
// 수정, 추가, 삭제 불가능
const bmc = { name: 'bmc' };
Object.freeze(bmc);

// 동결된 객체 수정 불가능
bmc.name = 'Hello';
console.log(bmc);

// 동결된 객체에 추가 불가능
bmc.age = 20;
console.log(bmc.age);

// 동결된 객체 삭제 불가능
delete bmc;
console.log(bmc);

// 밀봉, Obejct.seal
// 값의 수정 가능, 추가/삭제 불가능
const cat = {};
Object.assign(cat, bmc);
console.log(cat);
Object.seal();
cat.name = 'Hello';
console.log(cat);
delete cat();

// 확장 금지 preventExtensions
// 수정 가능, 삭제 가능, 생성 불가능
const tiger = { name: 호랑이 };
Object.preventExtensions(tiger);
