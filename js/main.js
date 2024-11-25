
var allQuotes=[
    {   Quote:`“Be yourself; everyone else is already taken.”`,
        Person:`― Oscar Wilde`
    },
    {   Quote:`“So many books, so little time.”`,
        Person:`― Frank Zappa`
    },
    {   Quote:`“A room without books is like a body without a soul.”`,
        Person:`― Marcus Tullius Cicero`
    },
    {   Quote:`“You only live once, but if you do it right, once is enough.”`,
        Person:`― Mae West`
    },
    {   Quote:`“Be the change that you wish to see in the world.”`,
        Person:`― Mahatma Gandhi`
    },
];

var prevIndex=-1;
var pName=document.getElementById('Pname');
var quote=document.getElementById('quote');


function newQuote(){
    var randIdx=Math.floor(Math.random()*allQuotes.length);
    while(randIdx==prevIndex){
        randIdx=Math.floor(Math.random()*allQuotes.length);
    }
    pName.innerText=allQuotes[randIdx].Person;
    quote.innerText=allQuotes[randIdx].Quote;
    prevIndex=randIdx;
    
}