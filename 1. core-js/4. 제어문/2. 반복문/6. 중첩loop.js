

//구구단 2단을 출력해야함.

// 단수를 저장할 변수


for (var table = 2; table <= 9; table ++) { // 1번 실행 , 2번실행 , (log ~ for까지) 3번 실행 , (table++) 4번 실행
console.log('=================');
console.log(`구구단 ${table} 단`);
console.log('=================');

for (var line =1 ; line <= 9; line ++) 
    console.log(`${table} X ${line} = ${table * line}`);
}

// ### 반복문은 X ~ Y 일 때 X이상 Y미만 인 경우가 대부분이다. ###

var count = 1;

for (var i = 0; i < 5; i++) { //5번 ( 바깥반복문 1번 실행 될 때, 내부 반복문은 3번이 돌아가야 바깥 반복문이 1번 완성된다. )
    for (var j = 0; j < 3; j++) { // 3번
        for ( var k =0 ; k < 4; k++) { // 4번
            console.log('안녕~~' + count++); // = 60번 
        }
    } 
}