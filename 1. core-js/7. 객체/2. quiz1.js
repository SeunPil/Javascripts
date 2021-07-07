/*
Q1. 아래 문제를 각각 풀어보세요.
1. 빈 객체 user를 만듭니다.
2. user에 키가 name, 값이 John인 프로퍼티를 동적 추가하세요.
3. user에 키가 surname, 값이 Smith인 프로퍼티를 동적 추가하세요.
4. name의 값을 Pete로 수정해보세요.
5. user에서 프로퍼티 name을 삭제하세요.
*/

/*
Q2. 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.
var salaries = {
  kim: 1000000,
  park: 1600000,
  lee: 1300000
}
- 모든 팀원의 월급을 합한 값을 구하고, 
  그 값을 변수 total에 저장해주는 코드를 작성해보세요. 
  total엔 3900000이 저장되어야겠죠?
*/

var user =  {};

user.name = 'John';
user.surname = 'Smith';
console.log(user);

// 수정
user.name = 'Pete';
console.log(user);

delete user.name
console.log(user);

console.log('');
console.log('============================');
console.log('');

var salaries = {
    kim: 1000000,
    park: 1600000,
    lee : 1300000
}

// 월급의 총 합
var total = 0;

// 전체 월급의 덧셈
// money = 키를 받아 줄 변수 (월급 액수)
for (var money in salaries) {
    // total에 salaries의 객체(월급)을 더해서 쌓아준다.
    total += salaries[money]    
}
console.log(`급여 총합: ${total}원`);