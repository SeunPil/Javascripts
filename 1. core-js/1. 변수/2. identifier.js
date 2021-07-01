
// 식별자: 데이터를 구분하기 위한 고유의 이름 (변수이름, 함수이름...)

//1. 대소문자를 구분할 것
var banana = '바나나';
var BANANA = '뻐네이너';
var Banana = '바네이너';

//2. 숫자로 시작 X

//var 7 = 99; (X)
//var 99haha = 100; (X)
var number3 = 3;
var number33haha = 100;

//3. 특수문자는 _, $ 외 사용금지
// my-name = '홍길동'; (X)
var hellow = '안녕'
var my_name = '홍길동';
var $grape = '포도';

//4. 띄어쓰기 X
// var user phone number = '010-1234-1234' (X)
var userphonenumber = '11'
//관례: convention
var user_phone_number = 1; //snake case
var userPhoneNumber =1; //camel case : JS 추천
var UserPhoneNumber = 1;  //pascal case : 클래스 이름
var strName = '홍길동' //Hungerian case : 변수명 앞에 데이터의 모양을 표기
var numPoint = 78;

//5. 키워드는 식별자 이름으로 사용 불가능

//var var;
//var for;
//var if;