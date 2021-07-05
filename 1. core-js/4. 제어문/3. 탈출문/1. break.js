for (var i = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}
console.log(`반복문 종료`);

console.log(`=====================`);

for (var i = 0; i < 3; i++) {
    for (var j = 0; i < 2; j++) {
        if (i === j) break;
        console.log(`${i}, ${j}`);

    }
}

