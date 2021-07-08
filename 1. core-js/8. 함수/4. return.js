// 두 수의 덧셈 결과를 호출부로 전달하는 함수
function add(n1, n2) {
    //return 아래는 코드 작동 X
    return n1 + n2;
    console.log(`hello`);
}

// 두 수의 곱셈의 결과를 콘솔창에 출력하는 함수
function showMultiply(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1*n2}`);
}

function infLooping() {
    var n = 1;
    while (true) {
        console.log(n);
        if (n === 5) return;
        n++;
    }
}

// 함수가 반환할 수 있는 값은 단 하나이다.
// 그런데 2개의 정수를 전달받아 덧셈,뺄셈,곱셈,나눗셈 값을 모두 리턴하고싶다.
function operateAll(n1, n2) {


    // 객체 사용
    return {
        plus: n1 + n2,
        minus: n1 - n2,
        multi: n1 * n2,
        divide: n1 / n2
    };

    //배열 사용
    //인덱스로 불러와야 한다. 확인법: indexOf(return)
    // return [
    //     n1 + n2,
    //     n1 - n2,
    //     n1 * n2,
    //     n1 / n2
    // ];
}

var result = add(10, 20);

console.log(add(5, 10)); // console.log(15);

//            add(add(10,10), add(20, 20));
//            add(add(20, 40);          
var result2 = add(add(10, 10), add(add(15, 5), 20));
console.log(`result2: ${result2}`);

//리턴값이 없는 함수는 변수에 저장하거나 다른 함수의 인수로
// 전달하지 않고 단독 호출해서 사용합니다.
var result = showMultiply(5, 4);
console.log(`result: ${result}`);

infLooping();

// 객체에는 20, 5가 들어가고 results.##으로 key를 불러온다.

var results = operateAll(20, 5);
console.log(`덧셈결과: ${results.plus}`);
console.log(`곱셈결과: ${results.multi}`);