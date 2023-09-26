// 클로저 Closure
// 함수와 함수를 감싸고 있는 랙시컬 환경에 대한 조합
// inner함수에서 외부에 있는 함수에 접근할 수 있는 것

const text = 'hello';

// 어떤 블록이든지 함수 내부에서 외부로 접근 가능
// 함수 내부에서 선언된 변수는 외부에서 접근 불가능
function func() {
  console.log(text);
}

func();

function outer() {
  const x = 0;
  // inner 함수 내부에서 외부에 있는 x에 접근 가능
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  //   inner();
  // Closure
  // 클로저에 의해서 inner가 리턴이 될 때 innner() 함수 뿐만 아니라
  // 함수 외부에 있는 랙시컬 환경 outer의 x까지 묶여서 반환
  return inner;
}

const func1 = outer();
func1();
