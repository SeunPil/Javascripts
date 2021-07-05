/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 “정답입니다”를 
   틀린 답을 입력할 시 “오답입니다”를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고 
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/


var Num1 = 0;
var Num2 = 0;

while (true) {
   // 기본적인 반복 구문 (문제 변경 = N , N2 변수 반복)
   var N = Math.floor(Math.random() * 101) + 1;
   var N2 = Math.floor(Math.random() * 101) + 1;

   // 0과 1의 랜덤
   // var rn = Math.floor(Math.random() *2);
   // var mark = rn === 0 ? '+' : '-';
   // var total = +prompt(`${N} ${mark} ${N2} 의 값을 입력하세요.`); 

   //true
   if (total === N+N2 ) {
      alert(`정답입니다.`);
      Num1++;
      continue;
   }
   
   //프로그램 종료 조건
   else if( total === 0 ) {
      alert(`정답 횟수: ${Num1}회 / 오답 횟수: ${Num2}회`);
   
      
   //false
   }
   else { alert(`오답입니다.`);
         Num2++
         continue;
 }
}





