var t = true,
    f = false;

// AND 연산 (로그인) ID와 PW를 생각하면 t && t = true가 맞다.
console.log(t && t); // t
console.log(t && f); // f
console.log(f && t); // f
console.log(f && f); // f

// OR연산 true(참)가 1개라도 들어가있으면 true 
console.log('==================');

console.log(t || t); // t
console.log(t || f); // t
console.log(f || t); // t
console.log(f || f); // f

console.log('==================');

// 놀이기구를 타려면 키가 145이상, 나이가 8세 이상인 조건
var height = 140, age = 15;
// >= # ( #보다 크거나 같음)
console.log(`놀이기구 탑승 여부: ${height >= 145 && age >= 8}`);

//NOT 연산 (단항 연산자) 반대로 작동
console.log('==================');

console.log(!true); // f
console.log(!false); // t

// hasMoney () 함수: 돈이 있으면 true, 없으면 flase
// !hasMoney = !!돈이 없으면!! ### 라는 구문을 만들 수 있다.
// if (!hasMoney()) {}

