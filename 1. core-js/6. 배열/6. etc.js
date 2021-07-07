var foods = [`떡볶이`, `오뎅`, `김말이`, `닭꼬치`];

// 배열.index Of() : 배열 요소의 인덱스를 알려줌

// idx에 foods.indexOf(#)의 배열을 알려줌
// 없을 시 -1로 표기
var idx = foods.indexOf('떡볶이');
console.log(`인덱스: ${idx}`);

//includes() : 배열 요소의 존재 유무 확인
var idx2 = foods.includes(`오뎅`);
console.log(`${idx2}`);

//slice() : 배열을 잘라내어 복사함
console.log(`====================`);

// 이상 미만 개념 (| 3, 4, 5, 6,| 7 이렇게 추출된다.)
// 원본 배열은 그대로
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var slice = arr.slice(3, 7);
console.log(slice);

// 6번부터 끝까지 추출
slicedArr = arr.slice(6);
console.log(slicedArr);

// reverse () : 배열을 역순으로 배치, 단 원본이 변화함.
console.log(`=======================`);

// arr.reverse();
// console.log(arr);

//원본을 변화시키지 않고 역순 정렬하려면 복사본을 이용
var copyArr = arr.slice(0); // 0번부터 끝까지 = 전체 복사
copyArr.reverse();
console.log(arr);

//join() : 배열의 요소들을 연결된 문자열로 변환
var foodStr = foods.join('랑 ');
console.log(foodStr);


//concat () : 배열을 연결 
// arr에 연결했다 해도 arr은 9까지, arr.concat은 9부터 300까지 표시된다.
var concatedArr = arr.concat([100, 200, 300]);
console.log(concatedArr);