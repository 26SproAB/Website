const logo = document.querySelector("#navbar-logo);

let upOrDown = document.querySelector("#result-text");
let progressBar = document.querySelector("#progress-bar");
let inputText = document.querySelector("#input-text")

const submitButton = document.querySelector("#submit-button");
const retryButton = document.querySelector("#retry-button");

let hasWon = false;
let Num = 0;


function setRanNum() {
  Num = Math.floor(Math.random() * 100 + 1);
}

setRanNum();

console.log(`number is ${Num}`);

function checkNum() {
  let inputVal = parseInt(inputText.value);
  progressBar.value++;

  if (inputVal > Num) {
    upOrDown.textContent = "lower";
    inputText.value = "";

  } else if (inputVal < Num) {
    upOrDown.textContent = "higher";
    inputText.value = "";

  } else if (inputVal === Num) {
    upOrDown.textContent = `Correct! the number was ${Num}`;
    progressBar.value = 10;
    inputText.value = "";
    hasWon = true;
  }

  function checkProgress() {
    if (progressBar.value === 10 && hasWon === false) {
      upOrDown.textContent = "Unlucky. you lost. try again";
    }
  }

  console.log(inputText.value);

  checkProgress();

}

function retry() {
  progressBar.value = 0;
  hasWon = false;
}

function returnHome(){
    window.location.replace("https://26sproab.github.io/Website");
}

retryButton.onclick = retry;
submitButton.onclick = checkNum;

logo.onclick = returnHome;
