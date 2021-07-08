

// 객체의 중첩 구조
// 게시글 데이터

var articleList = {
    totalCount: 3670,
    admin: 'admin123', 
    articles: [
    {
        bno: 3,
        title: `하하호호`,
        writer: `둘리`,
        view: 15
    },

    {
        bno: 2,
        title: `hhhhhhhh`,
        writer: `도우너`,
        view: 30
    }, 

    {
        bno: 1,
        title: `qwewqewqe`,
        writer: `고길동`,
        view: 41
    }
]
};

console.log(articleList.articles[0]);
console.log(articleList.articles[1].title);

