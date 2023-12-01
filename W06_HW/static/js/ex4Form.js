const btn = document.getElementById('btn');
const main = document.getElementById('main');

const arrayColor = ['red', 'blue', 'purple'];

const changeColor = function () {
  const randNum = Math.trunc(Math.random() * 3);

  main.style.color = `${arrayColor[randNum]}`;
};

btn.addEventListener('click', changeColor);
