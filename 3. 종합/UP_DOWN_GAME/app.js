// 게임에 필요한 데이터 객체

const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    min: 1,
    max: 100
};

//함수 정의부
//숫자 아이콘 생성 함수

const $numbers = document.getElementById('numbers');
const $frag = document.createDocumentFragment();
// live DOM인 $number에 100번 넣지 말고
// 가상의 돔 $frag ( createDocumentFragment)를 생성해 넣어 둔 뒤
// 반복문이 종료된 뒤 live DOM에 한 번 넣어준다.
// 과부하 방지, 유지보수 원할

function makeNumberIcons() {
    for (let i = 1; i <= 100; i++) {
        const $icon = document.createElement('div');
        $icon.classList.add('icon');
        $icon.textContent = i;
        $frag.appendChild($icon);
    }
    $numbers.appendChild($frag);
}



//메인 실행부
(function () {

    //아이콘 배치 함수
    makeNumberIcons();
})();