var height = +prompt('당신의 키는?');

if (height >= 140) {
    var age = +prompt(`당신의 나이는 ?`);
    if (age >= 8) {
     alert(`이용 가능합니다.`)
    }
 else {
    alert(`이용 불가합니다.`); 
}
}
else {
    alert(`키가 작아서 놀이기구에 탈 수 없어요.`)
}