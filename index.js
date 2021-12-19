let quoteElement = document.querySelector("#quote")
let generateQuoteButton = document.querySelector("#generateQuote")
let moon = document.querySelector("#moon")
let sun = document.querySelector("#sun")
let loader = document.querySelector("#loader")
let authorName = document.querySelector("author")
let quoteImages = document.querySelectorAll('.quoteImg')
var cssRootVar = document.querySelector(':root');

if(localStorage.getItem("currentTheme") === "dark") {
    changeToDark()
}

async function fetchData() {
    // Fetch Data From API
    quoteElement.innerText = '';
    authorName.innerText = '';
    loader.style.display = 'unset';
    try{
        let response = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
        let quoteData = await response.json();
        let quote = quoteData.quotes[0];
        displayQuote(quote)
    }
    catch(error) {
        console.log('an error occured');
        quoteElement.innerText = 'An Error Occured :( Please Check your Internet Connection or Try Again Later; Thank You!';
        loader.style.display = 'none';
    }
}


function displayQuote(quoteData) {
    // Make Change in Front (HTML Elements)
    loader.style.display = 'none';
    quoteElement.innerText = quoteData.text;
    authorName.innerText = quoteData.author;
}

function changeToDark () {
    document.body.setAttribute("class","dark")
    moon.setAttribute("class","fas fa-moon mode-icon")
    sun.setAttribute("class","far fa-sun mode-icon")
    quoteImages[0].src = 'whitequotes.png';
    quoteImages[1].src = 'whitequotes.png';
    generateQuoteButton.setAttribute("class","dark")
    cssRootVar.style.setProperty('--loader-color',"white")
    localStorage.setItem("currentTheme","dark")
}
function changeToLight () {
    document.body.removeAttribute("class","light")
    moon.setAttribute("class","far fa-moon mode-icon")
    sun.setAttribute("class","fas fa-sun mode-icon")
    quoteImages[0].src = 'blackquote.png';
    quoteImages[1].src = 'blackquote.png';
    cssRootVar.style.setProperty('--loader-color',"black")
    generateQuoteButton.removeAttribute("class","dark")
    localStorage.setItem("currentTheme","light")
}
