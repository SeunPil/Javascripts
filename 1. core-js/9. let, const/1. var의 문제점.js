
// 1. 변수 중복선언 허용
var x = 10; //선언
var x = 50;
console.log(x);

var loginUser = '김철수';


//2. 블록레벨 스코프를 지원하지 않음.
var y = '안녕';

for (var y=1; y<=3; y++) {
    console.log(y);
}
console.log(y);

//3. 변수 호이스팅 - 선언문은 전부 자동으로 위로 올린다.
z = 100;
console.log(z);

var z;

