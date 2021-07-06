//scores라는 이름을 가진 배열 변수가 있다.
//여기에는 학생들의 수학 점수가 8개 저장됩니다.
//점수는 임의로 설정

// -요구사항:
// 배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서 콘솔에 출력
// 학생들의 점수가 추가되었을 때 코드를 건드리지 않아도 자동으로 총점, 평균 갱신
var scores = [98, 32, 66, 87, 49, 12, 100, 82]
var total = 0;
for ( var num of scores ) {
    total += num;
}

var total2 = total / scores.length;
// 반올림 ( 69.5555 -> 6955.55 ( * 100 ) -> 6955(Math.round) -> 69.55 ( / 100 ))
var avg = Math.round(total2 * 100) / 100;
console.log(`총점: ${total}점 / 평균: ${total2}점`);

// for ( var i = 0; i < scores.length; i++) {
//     total += scores[i]
// }
 