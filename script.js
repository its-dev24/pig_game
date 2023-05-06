'use strict';
//selecting all elements
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');
let rollDiceBtn = document.querySelector('.btn--roll');

//intializing
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//button functions

//1.Roll dice button Function

rollDiceBtn.addEventListener('click', function () {
  if (diceEl.classList.contains('hidden')) {
    diceEl.classList.remove('hidden');
  }
});
