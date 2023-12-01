const btnStart = document.querySelector('#btnStart');
const btnStop = document.querySelector('#btnStop');
const btnReset = document.querySelector('#btnReset');
const counter = document.querySelector('#counter');

let intervalID = null;
let currentValue = parseInt(counter.textContent);

const resetCounter = function () {
  clearInterval(intervalID);
  counter.textContent = 1;
  intervalID = null;
};

const stopCounter = function () {
  clearInterval(intervalID);
  intervalID = null;
};

const increasement = function () {
  currentValue = (currentValue % 360) + 1;
  counter.textContent = currentValue;
};

const startCounter = function () {
  if (intervalID === null) {
    currentValue = parseInt(counter.textContent);
    intervalID = setInterval(increasement, 1000);
  }
};

btnStart.addEventListener('click', startCounter);
btnStop.addEventListener('click', stopCounter);
btnReset.addEventListener('click', resetCounter);
