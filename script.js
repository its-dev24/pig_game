'use strict';
//selecting all elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//intializing
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let finalScore = [0, 0];
let playing = true;

//function to set cuurent
let setCurrentScore = function (score) {
  document.getElementById(`current--${activePlayer}`).textContent = score;
};

//function to switch active player

const switchActivePLayer = function () {
  activePlayer = activePlayer === 1 ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//set final score

const setFinalScore = function () {
  document.getElementById(`score--${activePlayer}`).textContent =
    finalScore[activePlayer];
};

//button functions

//1.Roll dice button Function

rollDiceBtn.addEventListener('click', function () {
  if (playing) {
    //1.Generate a random number from 1 - 6
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2.Display the dice

    if (diceEl.classList.contains('hidden')) {
      diceEl.classList.remove('hidden');
    }
    diceEl.src = `dice-${dice}.png`;

    //3.check if roll is 1

    if (dice === 1) {
      currentScore = 0;
      setCurrentScore(currentScore);
      switchActivePLayer();
    } else {
      currentScore += dice;
    }
    setCurrentScore(currentScore);
  }
});

//2.Hold Button
holdBtn.addEventListener('click', function () {
  //1.Added value to the final score array
  if (playing) {
    finalScore[activePlayer] += currentScore;
    //2.Dispay the final score
    setFinalScore();
    if (finalScore[activePlayer] < 20) {
      currentScore = 0;
      setCurrentScore(currentScore);
      switchActivePLayer();
    } else {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      diceEl.classList.add('hidden');
    }
  }
});

//3. Reset Button
newGameBtn.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  currentScore = 0;
  finalScore = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
});
