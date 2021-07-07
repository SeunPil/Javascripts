//객체 생성
var dog = {
    name: '뽀삐',
    kind: '시츄',
    age: 2,
    favorite: ['산책', '간식'],
    injection: true
};
var cat = {
    name: '콩순이',
    kind: '코숏',
    age: 3,
    favorite: ['낮잠', '캣타워'],
    injection: false
};

console.log(typeof dog);



//객체 프로퍼티 참조
console.log(dog.name);
console.log(cat.age);

console.log(dog.favorite);
// dog.favorite의 0번 배열 
console.log(dog.favorite[0]);

// dog.favorite 마지막에 '꼬리흔들기' 추가
dog.favorite.push('꼬리흔들기');
console.log(dog.favorite);



// 프로퍼티 참조 2
console.log(dog.age);
console.log(dog['age']); //대괄호 참조 시 키를 문자열로 해야함.

// 프로퍼티 값 수정
dog.age = 5;
console.log(dog.age);

// 배열 수정
cat.favorite[1] = '참치';
console.log(cat.favorite);

// 프로퍼티 동적 추가
dog.master = '김철수'
console.log(dog);

// 프로퍼티 삭제
delete dog.master;
console.log(dog);

// 객체 프로퍼티 전체 순회
// for ~ in (ES6)

console.log(`=====================`);

for (var key in cat ) {
    // str로 인식되어 [] 사용
    var value = cat[key];
    console.log(`${key}: ${value}`);

}

console.log(`=====================`);

// 객체의 프로퍼티 키 존재 유무 확인
var flag = 'kind' in cat;
console.log(`flag: ${flag}`);



var key = 'favorite';

if (key in dog) {
    console.log('해당 키는 존재합니다.');
} else {
    console.log('해당 키는 존재하지 않습니다.');
}