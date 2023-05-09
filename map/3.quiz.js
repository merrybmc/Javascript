// 주어진 배열에서 중복 제거
const fruits = ['바나나', '사과', '포도', '바나나', '사과', '딸기'];
console.log(new Set(fruits));
console.log([...new Set(fruits)]);

function removeDuplication(array) {
  return [...new Set(fruits)];
}
const arr = removeDuplication(fruits);
console.log(arr);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들기
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
console.log(new Set([set1, set2]));

function findIntersection(set1, set2) {
  const arr = [...set1].filter((item) => set2.has(item));
  return new Set(arr);
}

console.log(findIntersection(set1, set2));
