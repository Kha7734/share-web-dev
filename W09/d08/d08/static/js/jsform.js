function handleAdd() {
  // const x = $('#txtX').val(); // jQuery
  const x = document.querySelector('#txtX').value;
  const y = document.querySelector('#txtY').value;

  if (x.length === 0 || y.length === 0) {
    alert('Please input a valid number.');
    return;
  }

  if (isNaN(x)) {
    // alert('Please input a valid number.');
    document.querySelector('#txtX').classList.add('is-invalid');
    document.querySelector('#txtX').select();
    return;
  }

  if (isNaN(y)) {
    // alert('Please input a valid number.');
    document.querySelector('#txtY').classList.add('is-invalid');
    document.querySelector('#txtY').select();
    return;
  }

  const s = parseInt(x) + parseInt(y);
  document.querySelector('#txtS').value = s;
}

// $('#btnAdd').on('click', handleAdd); // jQuery
document.querySelector('#btnAdd').addEventListener('click', handleAdd);