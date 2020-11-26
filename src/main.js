// Retrieving the elements we need from the DOM
const pad1 = document.querySelector('.pad-1');
const pad2 = document.querySelector('.pad-2');
const pad3 = document.querySelector('.pad-3');
const pad4 = document.querySelector('.pad-4');
const startGameButton = document.getElementById('start-button');
const stopGameButton = document.getElementById('stop-button');
const score = document.getElementById('score');

// Declaring variables for the Simon Memory Game
let playerScore = 0;
let patternArray = [];
let playerPatternArray = [];
let patternLength = 1;
score.innerText = playerScore;
let isGame = false;

// Event for the start button to begin the game
startGameButton.addEventListener('click', () => {
  startGame();
  startGameButton.classList.add('bump');
  stopGameButton.classList.remove('bump');
  setTimeout(() => {
    startGameButton.classList.remove('bump');
  }, 500);
}); 

// Function to reset all the variables and then call the next function
function startGame() {
  playerScore = 0;
  patternArray = [];
  playerPatternArray = [];
  isGame = true;
  // Add an item to the patternArray to start off with
  let randNum = Math.floor(Math.random() * 4) + 1;
  patternArray.push(randNum);
  startRandomPattern();
}


// Function to randomly select pads and push them to an array
function startRandomPattern() {
  // removeEventListener(pad1);
  // removeEventListener(pad2);
  // removeEventListener(pad3);
  // removeEventListener(pad4);

  for(let i = 0; i < patternArray.length; i ++) {
    setTimeout(() => {
      let randNum = Math.floor(Math.random() * 4) + 1;
      document.querySelector('.pad-' + randNum).classList.add('color-' + randNum);
      setTimeout(() => {
        document.querySelector('.pad-' + randNum).classList.remove('color-' + randNum);
      }, 700);
    },1000)
  }
  startPlayerMatchPattern();
}

function startPlayerMatchPattern() {
  // Adding event listeners to the pads
  pad1.addEventListener('click', () => {
    pad1.classList.add('color-1');
    setTimeout(() => {
      pad1.classList.remove('color-1');
    }, 300);
  });

  pad2.addEventListener('click', () => {
    pad2.classList.add('color-2');
    setTimeout(() => {
      pad2.classList.remove('color-2');
    }, 300);
  });

  pad3.addEventListener('click', () => {
    pad3.classList.add('color-3');
    setTimeout(() => {
      pad3.classList.remove('color-3');
    }, 300);
  });

  pad4.addEventListener('click', () => {
    pad4.classList.add('color-4');
    setTimeout(() => {
      pad4.classList.remove('color-4');
    }, 300);
  });
  //startRandomPattern();
}

// Event for the stop button to end the game;
stopGameButton.addEventListener('click', ()=> {
  patternArray = [];
  stopGameButton.classList.add('bump');
  startGameButton.classList.remove('bump');
  setTimeout(() => {
    stopGameButton.classList.remove('bump');
  }, 500);
})