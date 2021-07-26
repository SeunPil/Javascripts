                                const random = adsadsad






var foods = ['닭강정', '볶음밥', '피자']
console.log(foods);

console.log(' ');
console.log('==========================');
console.log(' ');

// 맨 뒤 배열 삭제 (foods.pop())
var lastfood = foods.pop ();
//var lastfood = foods.pop() ( 삭제 할 요소를 var # 에 저장 할 수 있다.) 백업 느낌?
// console.log(foods);
console.log(foods);
console.log(`삭제된 요소: ${lastfood}`);
console.log(' ');
console.log('==========================');
console.log(' ');


var pushfood = foods.push();
foods.push(`파스타`);
foods.push(`족발`);
console.log(foods);
console.log(`추가된 요소: ${pushfood}`);


console.log(' ');
console.log('==========================');
console.log(' ');


// 맨 앞에 제거
var firstElement = foods.shift();
console.log(`제거된 요소 ${firstElement}`);
console.log(foods);


console.log(' ');
console.log('==========================');
console.log(' ');


// 맨 앞에 추가
foods.unshift (`떡볶이`);
console.log(foods);