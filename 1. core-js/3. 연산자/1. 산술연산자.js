
//0으로 나누는건 불가능
console.log( 10 % 0 );
//피제수가 더 크면 제수가 나머지
console.log(4 % 14);
//제수가 0이면 몫과 나머지 모두 0
console.log( 0 % 99 );

//2의 4제곱
console.log(2**4); //ES7
console.log(Math.pow(2, 4)); //ES7 이전

//단항 산술 연산자 ++, --
console.log("=================================");

var x = 3;
x++;
++x;
x--;
console.log(`x: ${x}`);

//전위연산(prefix), 후위연산(postfix)
console.log('==========================');

//후위연산: 선할당 후연산
var a = 10, result;
result = a++;
console.log(`1 - result: ${result}, a: ${a}`);

//전위연산: 선연산 후할당
result = ++a;
console.log(`2 - result: ${result}, a: ${a}`);

/*
    아래 코드가 전부 실행 된 이후
    a, b, c, d에 할당된 값을 구하세요.
    (console.log로 확인하지 말 것!)
*/
var a = 1, b = 1;
var c = ++a; 
var d = b++;


//a: ? , b: ?, c: ?, d: ?
console.log(`a: ${2}, b: ${2}, c: ${2}, d: ${1}`);

