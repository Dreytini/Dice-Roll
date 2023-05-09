// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let oneEl = document.getElementById("one");
let twoEl = document.getElementById("two");
let threeEl = document.getElementById("three");
let fourEl = document.getElementById("four");
let fiveEl = document.getElementById("five");
let sixEl = document.getElementById("six");

// Count Variables
let numOne = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.16) {
    outputEl.innerHTML = "<img src='img/sideOne.png'/>";
    numOne++;
    oneEl.innerHTML = numOne;
  } else if (randNum < 0.33) {
    outputEl.innerHTML = "<img src='img/sideTwo.png'/>";
    numTwo++;
    twoEl.innerHTML = numTwo;
  } else if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/sideThree.png'/>";
    numThree++;
    threeEl.innerHTML = numThree;
  } else if (randNum < 0.67) {
    outputEl.innerHTML = "<img src='img/sideFour.png'/>";
    numFour++;
    fourEl.innerHTML = numFour;
  } else if (randNum < 0.84) {
    outputEl.innerHTML = "<img src='img/sideFive.png'/>";
    numFive++;
    fiveEl.innerHTML = numFive;
  } else {
    outputEl.innerHTML = "<img src='img/sideSix.png'/>";
    numSix++;
    sixEl.innerHTML = numSix;
  }
}
