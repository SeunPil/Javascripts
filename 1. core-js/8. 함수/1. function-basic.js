

//원의 넓이 : pi * r ** 2

// 반지름이 5인 원의 넓이를 구해야 함
// var circle1 = 3.14159265 * 5 **2;
// // 반지름이 10
// var circle2 = 3.14159 * 10 ** 2;
// // 반지름이 20
// var circle3 = 3.14159 * 20 ** 2;

// // 다른작업 3만줄 ########################

// var circle4 = 3.113159 * 100 ** 2;



///////////////////////////////////////////////

// 함수의 정의
function calcAreaCircle (r) {
    // r = 변수처리 
    var areaCircle = 3.14159 * r ** 2;
    // 반환은 호출 했을 때 실행 될 변수;
    return areaCircle;
}

// 함수의 호출
// 반지름 5인 원의 넓이
var result1 = calcAreaCircle(5);
console.log(`result1: ${result1}`);

// 반지름 10
var result2 = calcAreaCircle(10);
console.log(`result2: ${result2}`);

// 반지름 20
var result3 = calcAreaCircle(20);
console.log(`result3: ${result3}`);


// math(1, 6)을 입력 했을시 1+6으로 반환된다.
function math (num1, num2) {
    return num1 + num2;
}

var math = math(1, 6);
console.log(math);

// 함수의 정의 2 : 함수 리터럴 
function add1(n1, n2) {
    return n1+n2;
}
add1(10, 20);


var add2 = function(n1, n2) {
    return n1+n2;
};
add2(10,20);

//함수를 변수에 할당
var cac = calcAreaCircle;
cac(5);
console.log(cac(5));


