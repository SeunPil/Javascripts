
//명시적 문자열 변환
var a = 10, b = 20;
// var result = String(a) + String(b);
// var result = a.toString() + b.toString();
var result = '' + a + b; // 문자 + 숫자 = 숫자를 문자로 바꾼다. / '' + # = 문자열로 변경한다.
console.log(`${result}`);


//명시적 숫자 변환
console.log('============================');

var m = `100`, n = `5.11`;

// var result2 = Number(m) + Number(n);
// var result2 = parseInt(m) + parseFloat(n); // Int = 정수 , Float = 소수점 포함
var result2 = (+m) + (+n);
console.log(`result2: ${result2}`);

//명시적 논리 변환
console.log('===========================');

var ex1 = Boolean(undefined);
console.log(`${ex1}`); //f

var ex2 = !!`메롱`;
console.log(`${ex2}`); //t