// 색깔 정의
const colorList = [
    '#black',
    '#black',
    '#red',
    '#red',
    '#aqua',
    '#aqua',
    '#blue',
    '#blue',
    '#white',
    '#white',
    '#aquamarine',
    '#aquamarine'
];

// 랜덤으로 들어 올 색깔의 배열
let randomColor = [];

// 0~1번의 랜덤 정수를 생성해 배열을 합쳐준다.
for (let i = 0; colorList.length > 0; i++) {
    randomColor = randomColor.concat(
        colorList.splice(Math.floor(Math.random() * colorList.length), 1)
    );
}


function makeCard() {
    // Live DOM 생성
    const $numbers = document.getElementById('numbers');

    // Live DOM에 밀어넣기 전, 가상 DOM 생성
    const $frag = document.createDocumentFragment();

    for (let i = 1; i <= 12; i++) {
        // div 생성
        const card = document.createElement("div");
        const cardInner = document.createElement("div");
        const cardFront = document.createElement("div");
        const cardBack = document.createElement("div");

        cardInner.classList.add('card-Inner');
        cardFront.classList.add('card-Front');
        cardBack.classList.add('card-Back');
        card.classList.add('card');

        // 만들어진 카드들을 가상 돔에 입력
        card.appendChild(cardInner);
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        $frag.appendChild(card);

        //카드 색 적용
        card.style.backgroundColor = 'navy';
        cardBack.style.backgroundColor = 'black';

        // 클릭시 flipped class 부여, 있으면 제거
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");

        });

        // 라이브 돔에 입력 ( 과부하 방지 )
        $numbers.appendChild($frag);
    }
}


// 함수 실행부

makeCard()