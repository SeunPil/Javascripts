var score = 20;

// score가 60보다 큽니까? 맞다면 '합격' : 그게 아니라면 '불합격'
// = 은 우항의 결과를 좌항에 저장
var result = score >= 60 ? '합격' : '불합격'

console.log(`시험결과: ${result}`);

console.log('=================================');

var money = 2000;

money >= 3000 ? console.log('짜장면') : console.log('굶으세요');