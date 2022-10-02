'use strict';

// Selecting Elements
const userName1 = document.getElementById('name-text-1');
const userName2 = document.getElementById('name-text-2');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerName0 = document.getElementById('name--0');
const playerName1 = document.getElementById('name--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modal0El = document.querySelector('.modal1');
const namesModal = document.querySelector('.modal1-name');
const sectionModal = document.querySelector('.names-modal-1');
const overlay0El = document.querySelector('.overlay1');

// const btnLogin = document.getElementById('user-name');

const btnCloseModal = document.querySelector('.close-modal');
const btnCloseNameModal = document.querySelector('.close-modal-2');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnOpenNameModal = document.querySelector('.btn--show-modal');
const btnDone = document.getElementById('user-name');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnRules = document.querySelector('.btn--rules');
const btnChangeName = document.querySelector('btn--name');

const inputPlayerName0El = document.querySelector('.input__name--player-1');
const inputPlayerName1El = document.querySelector('.input__name--player-2');

let scores, currentScore, activePlayer, playing, username;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
// console.log(activePlayer);

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling Dice functionality:
// ------------
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generating a random number between 1 and 6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Revealing the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const playerNames = function (e) {
  e.preventDefault();
  playerName0.innerHTML = userName1.value;
  playerName1.innerHTML = userName2.value;
};

btnDone.addEventListener('click', playerNames);

const openNameModal = function () {
  namesModal.classList.remove('modal-hidden');
  sectionModal.classList.remove('modal-hidden');
};

const closeNameModal = function () {
  namesModal.classList.add('modal-hidden');
  sectionModal.classList.add('modal-hidden');
};

for (let i = 0; i < btnOpenNameModal.length; i++)
  btnOpenNameModal[i].addEventListener('click', openNameModal);

btnCloseNameModal.addEventListener('click', closeNameModal);
document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !namesModal.classList.contains('modal-hidden')) {
    closeNameModal();
  }
});
btnDone.addEventListener('click', closeNameModal);

// btnOpenNameModal.addEventListener('click', function () {
//   namesModal.classList.add('modal1-active');
//   namesModal.classList.add('overlay1-active');
// });
// btnCloseNameModal.addEventListener('click', function () {
//   namesModal.classList.remove('modal1-active');
// });
