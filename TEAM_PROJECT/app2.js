const horizontal = 5; // 가로
const vertical = 4; // 세로

// container 요소를 검색
// div 즉 카드가 만들어질 큰 박스 검색
const container = document.querySelector(".container");

// 뒷면에 넣을 색상 배열
// 2개씩 넣은 이유 = 2가지 색이 한 쌍을 이루므로 두가지씩 집어 넣었다.
const colorArray = [
  "red",
  "red",
  "orange",
  "orange",
  "yellow",
  "yellow",
  "green",
  "green",
  "blue",
  "blue",
  "salmon",
  "salmon",
  "plum",
  "plum",
  "white",
  "white",
  "pink",
  "pink",
  "purple",
  "purple",
];

// 새로 시작할 때 돌릴 색깔 배열을 만듬

// 색깔의 재배치 백업본, 즉 colorArray는 원본이고 
// colorSelect는 게임 시작을 위한색깔을 재배치 할 때 사용된다.
// 추후 게임 재 시작 함수를 만들 때 사용한다.
let colorSelect = colorArray.slice();

// 색상 배열에서 뽑은 색이 들어갈 배열
let color = [];

/*
  여기서 concat 함수는 문자열을 합쳐준다.
  splice는 배열 함수인데 배열을  위치에 삽입, 원하는 위치의
  항목만 제거하거나 교체를 할 수 있다(새로운 배열을 만듬 걔를 color 배열에 넣을 것이다).
  그래서 랜덤함수는 0 ~ 1 미만 사이의 숫자를 랜덤으로 생성을 하니 걔와 
  색상 배열의 길이를 곱하게되면 0 ~ 19 사이의 숫자가 나온다.
  걔를 소수점 버림으로해서 0 ~ 19까지만나오게 한다.
  배열은 0번부터 시작하니 랜덤한 번호의 방에 하나씩 color가 들어갈 것이다.
*/

// 완성 카드 ( 나중작성 )
// 클릭 이벤트로 2개만 뽑을 수 있게 작성하고
// 그 두개의 뽑은 카드의 색상이 같으면 이 배열에 작성된다.
let successCards = [];

// 게임 시작시간
let gameStart;

// 색깔을 셔플할 함수를 작성
// 아까 작성한 color  ## concat = 배열을 합쳐준다. 
// colorSelect(colorArray)를 랜덤정수로 나열하여 color에 넣어주고, 배열을 연결해준다.
// 즉 색깔들의 나열이 랜덤으로 섞이게 되는 함수이다.
const shuffle = () => {
  for (let i = 0; colorSelect.length > 0; i++) {
    color = color.concat(
      colorSelect.splice(Math.floor(Math.random() * colorSelect.length), 1)
    );
  }
};

// 카드 세팅
const setting = (hori, verti) => {
  for (let i = 0; i < hori * verti; i++) {
    // 문서객체를 생성

    // 카드 한 장의 객체 안에는 inner front back이 들어있다.
    const card = document.createElement("div");

    // 카드 한 장의 박스 앞면과 뒷면을 포함한 박스.
    // 애니메이션 작동
    const cardInner = document.createElement("div");

    // 카드의 앞면 
    const cardFront = document.createElement("div");

    // 색깔이 보여질 뒷면
    const cardBack = document.createElement("div");

    // 생성한 문서객체에 클래스를 부여
    card.classList.add("card");
    cardInner.classList.add("card-inner");
    cardFront.classList.add("card-front");
    cardBack.classList.add("card-back");
    cardBack.setAttribute('id', i);

    // 문서객체를 추가하기
    container.appendChild(card);
    card.appendChild(cardInner);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);

    // 앞면에 카드 색 넣기
    cardFront.style.backgroundColor = "navy";
    // 뒷면에 카드 색 넣기
    cardBack.style.backgroundColor = color[i];
  }

  /* 
    처음에는 카드 외울시간을 부여하기위해
    forEach랑 setTimeout 함수를 사용
  */

  // card들을 검색
  // fliiped 즉 뒤집힌 카드들에 대한 스크립트 작성을 위해 탐색
  const Cards = document.querySelectorAll(".card");

  // 세팅중에는 클릭 안되게 설정
  let clickFlag = false;

  // 카드가 두장 뒤집힐 때
  // 두 장이 같으면 true, 아니면 false를 논리값 설정을 위함
  let cardArray = [];

  // forEach 함수를 사용 카드 열기
  // 화살표 즉시실행 함수 사용

  // forEach는 배열에서 사용 가능한 반복문이다.
  // 주어진 함수를 각각의 배열에서 반복된다.

  const A = Cards.forEach((aCard, index) => {
    // setTimeout 함수를 사용
    // aCard에 flipped class를 부여해라.
    // 1000 + 100 * 카드의 수 (총 20장)
    // 총 3초간 20장의 카드를 오픈한다.
    setTimeout(() => {
      aCard.classList.add("flipped");
    }, 1000 + 100 * index);
  });


  // 5초 후에 카드를 뒤집기

  // 위에 3초동안 오픈 후에 5초가 아닌
  // 두개가 동시에 실행된다.
  // 3초동안 카드가 한장씩 오픈 / 2초동안 모든 카드 보기 / 5초뒤 모든 카드 한번에 덮기 ## total 5초

  // forEach = 배열에서 실행할 수 있는 반복문 입니다.
  // const num = [1, 2, 3];
  // forEach(m => log) = num의, 배열을 n으로 받고 log로 순서대로 출력한다.
  // num.forEach(n => console.log(n))
  // => 1, 2, 3이 차례대로 출력된다.

  /*  Cards안에 있는 배열을 한 개씩 모두 꺼낸 뒤
      setTimeout이라는 지연시간 함수를 실행한다.
      ## setTimeout은 지정한 시간이 지난 뒤, 작성한 구문을 실행한다.
      ## (aCard.classList.remove)
      setTimeout으로 인해 5초뒤 aCard.classList.remove를 실행한다. */
  const B = Cards.forEach((aCard) => {
    setTimeout(() => {
      aCard.classList.remove("flipped");
    }, 5000);
  });

  // 카드가 다 뒤집어지고 난 다음 true로 바꿔서 클릭이 되게 변경
  setTimeout(() => {
    clickFlag = true;
    // 게임 시작!
    gameStart = new Date();
  }, 5500);

  /*for (let card of Cards) {
    card.addEventListener("click", () => {});
  }*/

  Cards.forEach((card) => {
    card.addEventListener("click", e => {


      //includes() : 배열 요소의 존재 유무 확인
      // toggle: 요소에 해당 클래스가 있으면 삭제, 없으면 추가

      // clickFlag = ture 이고, 성공한 카드에 card라는 배열이 없어야 게임 시작 가능(!반대 부정문)
      // 세팅이 시작 될 때 clickflag는 false이니 게임 시작 불가. (세팅 전 카드 클릭 방지)
      // 게임이 진행되고 정답을 맞춘 두 카드는 successCards에 들어간다.
      // 그러므로 그 카드들은 클릭을 못하게 한다. ( 동일 카드 클릭 방지 )
      // ### 즉 시작 전 클릭 금지 게임 진행 후 정답을 맞춘 카드는 클릭을 못한다.

      if (clickFlag && !successCards.includes(card)) {

        // 만약 이 두조건이 맞으면 게임이 진행된다. # clickFlag = true / 짝 맞는 카드여부 X
        // 클릭시 flipped의 class를 부여하면 카드가 일시적으로 뒤집힌다.
        card.classList.toggle("flipped");

        // 내가 클릭한 카드를 cardArray에 푸쉬한다.
        cardArray.push(card);
        
        // cardArray에 들어간 카드가 2장일 때
        // 처음 뒤집은 카드는 cardA, 두번째는 cardB ( 맨 위에 작성한 카드 한 개의 div가 넣어진다.)
        // 그러므로 querySelector로 .card-back(뒤집었을 때 나타나는 카드)를 선택 후 색상을 각각 입력한다. 
        if (cardArray.length === 2) {
          let cardA =
            cardArray[0].querySelector(".card-back").style.backgroundColor;
          let cardB =
            cardArray[1].querySelector(".card-back").style.backgroundColor;


          // 두 카드의 색이 같다면
          if (cardA == cardB) {
            // 완성카드에 추가한다.
            // 완성된 카드가 다시 안뒤집히는 이유는 뒤에 조건문에 
            // !successCards.includes(card)라는 조건에 의해
            // successCards에 들어간 카드의 클래스가 card여서 뒤집히지 않는다.
            successCards.push(cardArray[0]);
            successCards.push(cardArray[1]);

            // 뒤집은 카드의 검사가 끝났으면 배열을 초기화시켜준다.
            cardArray = [];

            // 게임 초기화

            // 성공카드배열의 길이가 20일 때
            if (successCards.length == 20) {
              // 게임 끝 시간
              let gameEnd = new Date();

              // 총 시간을 알기 위해 만든 변수
              let complete = (gameEnd - gameStart) / 1000;

              // 알림창으로 출력
              alert("축하합니다!" + complete + " 초 걸렸습니다.");

              // 카드들 싹다 비우고
              container.innerHTML = "";

              // 성공카드 배열 비우고
              successCards = [];

              // 색깔 비우고
              color = [];

              // 랜덤으로 카드색 돌릴꺼 다시 만들고
              colorSelect = colorArray.slice();

              // 시작시간 null로 바꾸고
              gameStart = null;

              // 색 셔플 다시 하고
              shuffle();

              // 세팅도 다시한다.
              setting(horizontal, vertical);
            }

            // 두 카드의 색이 다르다면
          } else {
            // 다시 뒤집을 것이다.

            // 그 때 또 클릭을 할 수 있기 때문에 flag를 다시 false로 바꿈
            clickFlag = false;

            setTimeout(() => {
              // 뒤집기 위해 클래스 빼주고
              cardArray[0].classList.remove("flipped");
              cardArray[1].classList.remove("flipped");

              // 다시 true로 바꾸고
              clickFlag = true;

              // 배열 비워줌
              cardArray = [];
            }, 1000);
          }
        }
      }
    });
  });
};

shuffle();
setting(horizontal, vertical);