
var greeting;
// 변수 = 값
greeting = 'hello';
console.log(typeof greeting);

var exStr = '그는 나에게 "위험해"라고 말했다!'
exStr = "Let's go";
var exStr = "그는 나에게 \"위험해\"라고 말했다!";
console.log(exStr);

// 경로 지정
var filePath = 'd:\\temp\\new.jpg';
console.log(filePath);


//템플릿 리터럴 (ES6+)
console.log("================================================");

var template = `<ul>
    <li>
        <a href='#'>Home></a>
    </li>
</ul>
`;
console.log(template);
console.log("================================================");
var month = 8;
var day = 15;
var anni = '광복절';

// console.log(month + '월 ' + day + '일은 ' + anni + '입니다. ');
// 무조건 `` 사용
console.log(`${month}월 ${day}일은 ${anni}입니다.`);

// '' 붙히면 100200이 되고 안 붙히면 인수로 인식된다.
var x = 100;
var y = 200;
console.log(x+y);

