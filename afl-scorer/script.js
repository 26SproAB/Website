const logo = document.querySelector("#navbar-logo");

const teamAPoint = document.querySelector('#team-a-point');
const teamAGoal = document.querySelector('#team-a-goal');

const teamBPoint = document.querySelector('#team-b-point');
const teamBGoal = document.querySelector('#team-b-goal');

const teamAScore = document.querySelector('#team-a-score');
const teamBScore = document.querySelector('#team-b-score');

const undoAButton = document.querySelector('#undo-A-button');
const undoBButton = document.querySelector('#undo-B-button');

const resetButton = document.querySelector('#reset-button');

const teamAName = document.querySelector('#team-a');
const teamBName = document.querySelector('#team-b');

let teamAScoreNum = 0;
let teamBScoreNum = 0;

let lastScoreA = 0;
let lastScoreB = 0;

function setTeamNames(){
    let AName = prompt("Enter the home team's name:");
    teamAName.textContent = AName;

    let BName = prompt("Enter the away team's name:");
    teamBName.textContent = BName;
}

function addAGoal() {
  teamAScoreNum += 6;
  lastScoreA = 6;
  teamAScore.textContent = teamAScoreNum;
}

function addAPoint() {
  teamAScoreNum++;
  lastScoreA = 1;
  teamAScore.textContent = teamAScoreNum;
}

function addBGoal() {
  teamBScoreNum += 6;
  lastScoreB = 6;
  teamBScore.textContent = teamBScoreNum;
}

function addBPoint() {
  teamBScoreNum++;
  lastScoreB = 1;
  teamBScore.textContent = teamBScoreNum;
}

function undoLastA() {
  teamAScoreNum -= lastScoreA;
  teamAScore.textContent = teamAScoreNum;
}

function undoLastB() {
  teamBScoreNum -= lastScoreB;
  teamBScore.textContent = teamBScoreNum;
}

function resetAll(){
  teamAScoreNum = 0;
   teamAScore.textContent = teamAScoreNum;
    lastScoreA = 0;
  
  teamBScoreNum = 0;
   teamBScore.textContent = teamBScoreNum;
    lastScoreB = 0;
}

function returnHome(){
    window.location.replace("https://26sproab.github.io/Website");
}

setTeamNames();

teamAGoal.onclick = addAGoal;
teamAPoint.onclick = addAPoint;

teamBGoal.onclick = addBGoal;
teamBPoint.onclick = addBPoint;

undoAButton.onclick = undoLastA;
undoBButton.onclick = undoLastB;

resetButton.onclick = resetAll;

logo.onclick = returnHome;

