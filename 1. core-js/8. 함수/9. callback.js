
function showNumbers(n) {
    for (var i=1; i<=n ; i++) {
        console.log(i);
    }
}
// showNumbers(5);

function showOddNumbers (n) {
    for (var i=1; i<=n ; i++) {
        if ( i % 2 === 1) { //홀수 일 때 (=== 0) 짝수
        console.log(i);
    }
}
}
// showOddNumbers(10);

function showEvenNumbers (n) {
    for (var i=1; i<=n ; i++) {
        if ( i % 2 === 0) { 
        console.log(i);
    }
}
}
showEvenNumbers(10);


console.log('==================');



// 콜백 함수
// condition = 조건식 (함수로 넣어라) ## 콜백
function showAllNumbers (n, condition) {
    for (var i = 1; i <=n; i++) {
        if (condition(i)) {
            console.log(i);
        }
    }
}


// 콜백함수는 함수 호출자(사용자)가 기본기능은 만든사람에게 맡기고
// 커스텀기능을 스스로 생성해서 사용하고 싶을 때 쓰는 기법입니다.
showAllNumbers(10, function(i) {
    return i % 2 === 0;
})

//showAllNumbers(10, i => i % 2 === 0 );

console.log('========================');
//숫자배열을 전달하면 해당 배열을 조건부로 필터링하여
//복사배열을 만들어주는 함수
// ex) [1,2,3,4,5,6,7,8,9,10]을 전달하면서 짝수조건을 걸면
//     [2,4,6,8,10]을 리턴

function filter(array, filterCondition) {
    //필터링 할 배열
    var filteredArray = [];
    for (var n of array) {
        // array에 입력된 숫자를 n에 넣는다.
        // if (numbers, (함수)) 에 적은 조건이 입력된다.
        if (filterCondition(n)) {
            // 조건에 걸러진 숫자들을 filteredArray배열에 밀어 넣는다.
            filteredArray.push(n);
        }
    }
    //var=filteredArray 입력된 숫자들을 출력한다.
    return filteredArray;
}

//array에 들어 갈 값 = numbers
var numbers = [1,2,3,4,5,6,7,8,9,10];
var results = filter(numbers, n => n % 3 === 0 );

console.log(`${results}`);