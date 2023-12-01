const handleAdd = function() {
  const x = document.querySelector('#txtX').value;
  const y = document.querySelector('#txtY').value;

  if (x.length === 0 || y.length === 0)
  {
    alert('Input 2 value');
    return;
  }

  if (isNaN(x)){
    document.querySelector('#txtX').classList.add('is-invalid');
    document.querySelector('#txtX').select();
    return;
  }

  if (isNaN(y)){
    document.querySelector('#txtY').classList.add('is-invalid');
    document.querySelector('#txtY').select();
    return;
  }

  document.querySelector('#txtX').classList.remove('is-invalid');
  document.querySelector('#txtY').classList.remove('is-invalid');

  const s =  parseInt(x) + parseInt(y);
  document.querySelector('#txtS').value = s; 

}

document.querySelector('#btnAdd').addEventListener('click', handleAdd);