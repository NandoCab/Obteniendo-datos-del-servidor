const verseChoice = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoice.onchange = function() {
    const verse = verseChoice.value;
    updateDisplay(verse);
};

function updateDisplay(verse) {
    verse = verse.replace(" ", "");
    verse = verse.toLowerCase();
    let url = verse + ".txt";
    /*let request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "text";

    request.onload = function() {
    poemDisplay.textContent = request.response;
    };

    request.send()

    fetch(url).then(function(response) {
    response.text().then(function(text) {
        poemDisplay.textContent = text;
        });
    });*/

    let myFetch = fetch(url);

    myFetch.tjen(function(response) {
        response.text().then(function(text) {
            poemDisplay.textContent = text;
        });
    });
    
};



updateDisplay("Verse 1");
verseChoice.value = "Verse 1";