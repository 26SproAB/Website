const rollButton = document.querySelector("#roll-button");
const die1 = document.querySelector("#dice-one");
const die2 = document.querySelector("#dice-two");

function dieRoll1() {
  var num1 = Math.floor(Math.random() * 6) + 1;
  return num1;
}

function dieRoll2() {
  var num2 = Math.floor(Math.random() * 6) + 1; 
  return num2;
}

function changeDieFace() {
  die1.src = dieRoll1() + ".png";
  die2.src = dieRoll2() + ".png";
}

rollButton.onclick = changeDieFace;
