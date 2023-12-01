// play_circle_filled
// pause_circle_filled

let sample = '';
for (let i = 0; i < 6; i++) {
  sample += `<div class="col-sm-2" id="img${i + 1}">`;
  sample += `<img src="img/img${
    i + 1
  }.jpg" class="rounded col-sm-12" alt="sample"></img>`;
  sample += `</div>`;
}

document.querySelector('#sample').innerHTML = sample;

const showImage = function (idx) {
  img = `<img src="img/img${
    idx + 1
  }.jpg" class="rounded mx-auto" alt="sample"></img>`;

  document.querySelector('#zoom').innerHTML = img;
};

for (let i = 0; i < 6; i++) {
  document
    .getElementById(`img${i + 1}`)
    .addEventListener('click', showImage(i));
}
// document.getElementById(`img${0 + 1}`).addEventListener('click', showImage(0));
// document.getElementById(`img${1 + 1}`).addEventListener('click', showImage(1));
// document.getElementById(`img${2 + 1}`).addEventListener('click', showImage(2));
