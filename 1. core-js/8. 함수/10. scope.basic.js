0

function foo(x) {
    var y = 10;
    console.log(x);
    console.log(y);
}

console.log('======================');
// console.log(x);
// console.log(y);

foo(5);

console.log('==================');

// 지역변수는 함수가 실행 될 때만 1순위로 실행된다.
// 함수가 종료됐을 시, 메모리에서 삭제된다.
// 만약 함수 안에 z가 없을 시, global로 인식 되지만 안에 있으면 안에 걸 끌어온다.

var z = 'global'; // 전역변수

function bar() {
    var z = 'local'; // 지역변수
    console.log(`함수내부: ${z}`);    
}

bar ();
console.log(`함수외부: ${z}`);