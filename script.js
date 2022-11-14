'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayCounter = function (counter) {
  document.querySelector('.number').textContent = counter;
};
const styleBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const styleCounter = function (style) {
  document.querySelector('.number').style.width = style;
};
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    displayCounter(secretNumber);
    styleBackgroundColor('#60b347');
    styleCounter('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('💥You lost the game!');
      setScore(0);
    }
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  setScore(score);
  displayCounter('?');
  document.querySelector('.guess').value = '';
  styleBackgroundColor('#222');
  styleCounter('15rem');
});
