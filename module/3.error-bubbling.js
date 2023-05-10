// Bubbling up, Propagating
// 에러가
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log(error + '생각해보니 이 에러는 내가 핸들링 할 수 없을 것 같다');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log(error + ' ' + 'Cathced');
}
console.log('done');
