

// 배열 생성
var fruits = [`딸기`, `포도`, `복숭아`, `사과`]; // 0 ~ 3번

//배열의 길이
console.log(`배열 요소 수: ${fruits.length}`);

// 배열 요소 참조
console.log(`배열의 3번째 요소: ${fruits[2]}`);
var apple = fruits[3];
console.log(`apple: ${apple}`);

// 배열 요소 수정
fruits[1] = '수박';
console.log(fruits);

fruits[4] = '파인애플';

//배열 요소 순회 (전체 참조)
console.log(`=================`);
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}