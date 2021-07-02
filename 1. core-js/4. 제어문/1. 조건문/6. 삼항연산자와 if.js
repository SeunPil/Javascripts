//변수의 조건부로 값을 대입하거나 함수의 반환값을 조건부로 반환할 때
//3항조건연산자가 리팩토링 측면에서 유리함.



var food = 5000;
if (money >= 5000) {
    food = `김치찌개`;
} else if (money >= 3000) {
    food = `라면`;
} else if (money >= 1000) {
    food = `삼각김밥`;
} else {
    food = `굶으세요`;
}

console.log(`선택된 음식: ${food}`);

//3항 연산자

var food = money >= 5000 ? `김치찌개` : money >= 3000 ? `라면` : money >= 1000 ? `삼각김밥` : `굶는다`;ㅋ