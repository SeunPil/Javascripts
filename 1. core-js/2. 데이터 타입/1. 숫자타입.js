

var decimal = 100; //10진수
var floatingPoint = 3.14; //실수 

// typeof 연산자: 데이터 타입을 문자열로 알려줌
console.log(typeof decimal);
console.log(typeof floatingPoint);

var bin = 0b01000010; //2진수
console.log(bin); //출력은 10진수로

var oct = 0o102; //8진수
console.log(oct);

var hex = 0xAC00; //16진수
console.log(hex);

console.log(10 / 4); // JS는 저장 될 때 실수(10.0 4.0)으로 저장된다
console.log(30 / '메롱'); // NaN = Not a Number 숫자가 아니다.