
// 배열 될 변수
var numbers = [];

while (true) {
// 사용자 입력 값
var inputdata = prompt(`숫자를 입력하세요. \n그만두려면'그만'이라고 입력하세요.`);

if ( inputdata === '그만') break;

// 배열에 입력 데이터 삽입 ( numbers에 밀어 넣는다 inputdata를)
// +는 이 때 넣어준다. ( 정수 변환 )
numbers.push (+inputdata);
}

var total = 0;
for (var num of numbers) {

    //total = 총합 / num = numbers에 저장된 숫자들을 더한 값을 저장 할 변수
    total += num;
}
alert(`입력한 숫자 총합: ${total}`);
