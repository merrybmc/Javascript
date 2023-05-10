function excute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}

// 함수로 호출하면 console.log가 먼저 호출된 뒤 setTimeout 콜백함수가 호출됨
excute();
