// 2개의 정수의 합을 구하는 함수
function add2(n1, n2) {
    return n1 + n2;
}

// 3개의 정수의 합을 구하는 함수
function add3(n1, n2, n3) {
    return n1 + n2 + n3;
}

// n개의 정수의 합을 구하는 함수
function addAll(numbers) {
    var total = 0;
    // numbers의 배열을 n에 저장한다.
    for (var n of numbers) {
        total += n;
    }
    return total;

}

// 입력값을 배열로 받는다.
var result = addAll([10, 20]);
console.log(result);


// 스프레드 문법(ES6+)
// (...) = 자동으로 배열로 전달
function addAll2(...numbers) {
    var total2 = 0;
    for (var n of numbers) {
        total2 += n;
    }
    return total2;

}

var result2 = addAll2(10, 20, 30, 40);
console.log(`result2: ${result2}`);

