//objects array
const quotes = [
    {
        quotes:"인생의 가장 큰 영광은 결코 넘어지지 않는데 있는 것이 아니라 넘어질 때마다 일어서는 데 있다.",
        author:"넬슨만델라",
    },
    {
        quotes:"우리의 가장 큰 약점은 포기한다는 것에 있다.성공하기 위한 가장 확실한 방법은 한번 더 시도해보는 것이다.",
        author:"빌 게이츠",
    },
    {
        quotes:"어떤 일을 하기에 앞서 스스로 그 일에 대한 기대를 가져야 한다",
        author:"마이클조던",
    },
    {
        quotes:"나머지 인생을 설탕물이나 팔면서 보내고 싶습니까, 아니면 세상을 바꿔놓을 기회를 갖고 싶습니까?",
        author:"스티브잡스",
    },
    {
        quotes:"돈은 유일한 해답은 아니지만 차이를 만들어 낸다",
        author:"버락오바마",
    },
    {
        quotes:"위험은 자신이 무엇을 하는지 모르는데서 온다. ",
        author:"워런 버핏",
    },
    {
        quotes:"명성을 쌓는데 20년이란 세월이 걸리지만 명성을 무너뜨리는 데에는 채 5분도 걸리지 않는다. 그걸 명심한다면 당신의 행동이 달라질 것이다.",
        author:"워런 버핏",
    },
    {
        quotes:"인내할 수 있는 사람은 그가 바라는 것은 무엇이든지 손에 넣을 수 있다.",
        author:"벤자민 프랭클린",
    },
    {
        quotes:"웃음은 두 사람 간 가장 가까운 거리다. ",
        author:"빅터 보르게",
    },
    {
        quotes:"반성하지 않는 삶은 살 가치가 없다. ",
        author:"소크라테스",
    }

]
const quoteForm = document.querySelector("#quote");
const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; //Math.random: 0~1

quote.innerText = todaysQuote.quotes;
author.innerText = `by ${todaysQuote.author}`;

if(savedUsername!==null){
    quoteForm.classList.remove(HIDDEN_CLASSNAME); 
}

