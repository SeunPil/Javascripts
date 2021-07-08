


function calcNumbersTotalAndAverage(...numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
        console.log(total);
    }
    var avg = total / numbers.length; // length = 객체의 숫자(4)
    return {
        total: total, // 변수와 값이 똑같을 때는 한 번만 사용 total: total, = total
        avg: avg // avg 
    }
    
}


var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!

console.log(`총합: ${result.total}, 평균: ${result.avg}`);