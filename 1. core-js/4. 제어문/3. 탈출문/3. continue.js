for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue; // SKIP
    console.log(i);
}
console.log(`반복문 종료!`);




while (true) {
    var n = +prompt('숫자를 입력.');
    if (n === 0) {
        break;
    } else if (n === 1) {
        continue;
    }

    alert(`반복문 끝`);
}
alert(`안녕안녕`);