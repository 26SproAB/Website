const aflScorer = document.querySelector("#afl-scorer");
const guessTheNumber = document.querySelector("#guess-the-number");
const diceRoller = document.querySelector("#dice-roller");

function goToPageScorer(){
    window.location.replace("https://26sproab.github.io/Website/afl-scorer");
}

function goToPageGTN(){
    window.location.replace("https://26sproab.github.io/Website/guess-the-number");
}

function goToPageRoller(){
    window.location.replace("https://26sproab.github.io/Website/dice-roller");
}


aflScorer.onclick = goToPageScorer;
guessTheNumber.onclick = goToPageGTN;
diceRoller.onclick = goToPageRoller;
