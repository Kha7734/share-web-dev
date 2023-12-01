const inputText = document.getElementById('txtContent');
const button = document.querySelector('#btn');
const textDisplay = document.querySelector('#txtBold');

const boldText = function () {
  if (inputText.value.length === 0) alert('Input Text');
  textDisplay.innerHTML = `<p class="form-control form-control-sm" style="font-weight: bold"> ${inputText.value}`;
};

const displayBold = button.addEventListener('click', boldText);
