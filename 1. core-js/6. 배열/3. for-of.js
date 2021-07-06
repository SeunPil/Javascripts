

var week = ['월', '화', '수', '목', '금', '토', '일'];

// for (var i = 0; i < week.length; i++) {
// console.log(week[i] + '요일');
//}


// [var # (첫 번째 배열을 저장 할 함수)] of [배열함수]

//전체 순환일 때 매우 유리 / 조건부 일때는 일반적 사용 X
for (var day of week) {
    console.log(day + `요일`);
}