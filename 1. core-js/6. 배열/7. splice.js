//splice() : 배열 요소 삭제
var foods = [`떡볶이`, `오뎅`, `김말이`, `닭꼬치`];

// 1번 2번 X, ### 1번부터 자기 포함한 2개를 삭제
// splice는 삭제된 요소를 다시 배열로만들어 복사본을 리턴
var delFoods = foods.splice(1, 2);
console.log(foods);
// console.log(delFoods);


// 0번 인덱스부터 1개를 삭제하고 그 자리에 '치킨'을 삽입
foods.splice(0, 1, '치킨');
console.log(foods);


// 중간 추가 ( 1번 인덱스 부터 0개 삭제하고 그 자리에 보쌈을 넣어라 )
foods.splice(1, 0, 'MIDDLE보쌈');
console.log(foods);

// 맨 뒤 추가
foods.push(`파스타`);
console.log(foods);

// 맨 앞 추가
foods.unshift(`김치`);
console.log(foods);

//2번 인덱스 부터 끝까지 삭제
foods.splice(2);
console.log(foods);



// 특정요소를 탐색하여 삭제
console.log('=================================');

foods.push(`보쌈`);
foods.push(`닭발`);
foods.push(`파스타`);
console.log(foods);

// 사용자의 삭제 요구 데이터
var requestData = '보쌈';

if (foods.includes(requestData)) {

    var targetIdx = foods.indexOf(requestData);
    foods.splice(targetIdx, 1);
    console.log(`${requestData} 삭제 완료!`);
    console.log(foods);
} else {
    console.log( `${requestData} : 존재하지 않는 음식입니다.`);
}
