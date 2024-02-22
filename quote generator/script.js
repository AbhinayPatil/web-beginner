let url = "https://api.quotable.io/random";
let quote = document.querySelector("h2");
let author = document.querySelector("h4");
let newQuoteBtn = document.querySelector("#new-quote-btn");
let tweetBtn = document.querySelector("#tweet-btn");


let getQuote = async ()=> {
    let responce = await fetch(url);
    let data = await responce.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

let tweet = ()=>{
    window.open(`https://twitter.com/intent/tweet?text=${quote}--${author}`,"height:200px");
}

newQuoteBtn.addEventListener("click",getQuote);
tweetBtn.addEventListener("click",tweet);

getQuote();