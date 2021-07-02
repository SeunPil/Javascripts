

//랜덤값 생성하기
// Math.random() -> 0.0이상 1.0미만의 랜덤 실수값을 생성

var random = Math.random();
console.log(`${random}`);

if (random > 0.66 ) {
    console.log(`짜장면`);
} else if(random > 0.33) {
    console.log(`칼국수`);
} else {
    console.log(`보쌈정식`);
}

// Math.floor () : 내림값, Math.ceil() : 올림값, Math.round(): 반올림값
console.log(Math.floor(3.3));
console.log(Math.ceil(3.3));
console.log(Math.round(3.3));

// 0 ~ 10 사이의 랜덤 정수

Math.random() // 0.0 ~ 1.0미만
Math.random() * 11; // 0.0 ~ 11.0 미만

var rn = Math.floor(Math.random()* 11); // 0 ~ 11 미만
console.log(`랜덤 정수 ${rn}`);

//1 ~ 45 랜덤 정수

var lotto = Math.floor(Math.random()* 45) + 1; // 0 ~ 46미만

// X ~ Y (이상 미만 개념)의 랜덤 정수 구하는 공식
// 공식) Math.floor(Math.random() * (Y - X)) + x;
Math.floor(Math.random() * (80)) + 40;
