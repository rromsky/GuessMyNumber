'use strict';

const body = document.querySelector('body');
const msg = document.querySelector('.message');
const num_o = document.querySelector('.guess');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const button = document.querySelector('.check');
const button_again = document.querySelector('.again');
const big_number = document.querySelector('.number');

let random_number = Math.trunc(Math.random() * 20) + 1;
let score_num = 20;

const invalid = () => {
  msg.textContent = 'Not a number!';
};
const lost = () => {
  msg.textContent = 'You lost the game ;(';
};
const to_low = () => {
  msg.textContent = 'To low📉';
  score_num--;
  score.textContent = `${score_num}`;
};
const to_high = () => {
  msg.textContent = 'To hight📈';
  score_num--;
  score.textContent = `${score_num}`;
};
const equal = () => {
  msg.textContent = 'Good job📊';
  score_num > Number(highscore.textContent)
    ? (highscore.textContent = `${score_num}`)
    : {};
  big_number.textContent = `${num_o.value}`;
  body.style.backgroundColor = '#60b347';
};

button.addEventListener('click', () => {
  const num = num_o.value;
  !num
    ? invalid()
    : num == random_number
    ? equal()
    : score_num <= 1
    ? lost()
    : num > random_number
    ? to_high()
    : to_low();
  console.log(`Good, is ${num} / ${num > random_number}`);
});

button_again.addEventListener('click', () => {
  msg.textContent = 'Start guessing...';
  score_num = 20;
  score.textContent = `${score_num}`;
  num_o.value = ` `;
  body.style.backgroundColor = '#222';
  big_number.textContent = `?`;
  random_number = Math.trunc(Math.random() * 20) + 1;
});
