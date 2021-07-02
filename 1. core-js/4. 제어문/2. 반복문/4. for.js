
//1~10까지의 누적 총합
var total = 0;
var n = 1;

    0
for (var n = 1; n <= 10; n++) {
    total += n;
}
console.log(`총합: ${total}`);


//1~100사이의 정수 중 6의 배수이면서 12의 배수가 아닌 수 출력하기


for(var num2 = 1; num2 <= 100 ; num2++) {
    // && (그리고), !== 반대 (아니면)
    if (num2 % 6 === 0 && num2 % 12 !== 0) {
        console.log(num2) 
    }
}

console.log('===========================');

//반복에 직접 관여하는 변수만 for구문에 넣는다.

var count = 0;
for(var n1 = 1; n1 <= 4000; n1++) {
    if(n1 % 9 === 0) {
        count++;       
    }
}
console.log(count);

console.log('===========================');

var count1 = 0;
var n2 = 1;

while (n2 <= 4000) /*n2가 4천까지*/ {
    if(n2 % 5 === 0 && n2 % 10 !==0) /*n2가 5로 나눴을 때 0, n2가 10으로 나눴을 때 나머지가 0이면 false.*/ {
        count1++; //위의 조건이 맞으면 count1에 (+1)
    }
    n2++; //while {}에 들어있으니 n2를 4천까지 반복.
}
console.log(count1);