// 주어진 seconds(초)가 지나면 callback 함수를 호출
// 단, seconds가 0보다 작으면 에러 호출

function runInDelay(seconds) {
  // resolve = 성공했을 때 호출
  // reject = 실패했을 때 호출
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => {
    console.log('타이머 완료!');
  })
  .catch(console.error)
  .finally('함수호출 끝');

// runInDelay(2).then('성공할 시 필요한 일 수행').catch('에러를 처리').finally('최종적으로');
