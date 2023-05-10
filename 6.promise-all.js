function getBanana() {
  const banana = 'banana';
  return Promise.resolve(
    setTimeout(() => {
      banana;
    }, 3000)
  );
}

function getApple() {
  const apple = 'apple';
  return Promise.resolve(
    setTimeout(() => {
      apple;
    }, 3000)
  );
}

function getOrange() {
  return Promise.reject(new Error('no Orange'));
}

// Promise.all
// 병렬적으로 한번에 모든 Promise를 실행
Promise.all([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log(fruits))
  .catch(console.error);

// Promise.race
// 주어진 Promise중에 제일 빨리 수행된 순서 먼저 출력
Promise.race([getBanana().getApple()]).then((fruit) => console.log(fruit));
