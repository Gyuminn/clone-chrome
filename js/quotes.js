const quotes = [
    {
        quote: "Qmin is good1" ,
        author: "qmin1",
    },
    {
        quote: "Qmin is good2" ,
        author: "qmin2",
    },
    {
        quote: "Qmin is good3" ,
        author: "qmin3",
    },
    {
        quote: "Qmin is good4" ,
        author: "qmin4",
    },
    {
        quote: "Qmin is good5" ,
        author: "qmin5",
    },
    {
        quote: "Qmin is good6" ,
        author: "qmin6",
    },
    {
        quote:  "Qmin is good7",
        author: "qmin7",
    },
    {
        quote: "Qmin is good8" ,
        author: "qmin8",
    },
    {
        quote: "Qmin is good9" ,
        author: "qmin9",
    },
    {
        quote: "Qmin is good10" ,
        author: "qmin10",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;