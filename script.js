const aflScorer = document.querySelector("#afl-scorer");
const guessTheNumber = document.querySelector("#guess-the-number");
const diceRoller = document.querySelector("#dice-roller");

function goToPage(page){
    window.location.replace("page");
}

aflScorer.onclick = () => { goToPage("https://26sproab.github.io/Website/afl-scorer")};
guessTheNumber.onclick = () => { goToPage("https://26sproab.github.io/Website/guess-the-number")};
diceRoller.onclick = () => { goToPage("https://26sproab.github.io/Website/dice-roller")};
