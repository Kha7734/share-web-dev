const Name = document.querySelector('#name');
const txtName = document.querySelector('#txtName');
const Email = document.querySelector('#email');
const txtEmail = document.querySelector('#txtEmail');
const txtMath = document.querySelector('#txtMath');
const txtCalc = document.querySelector('#txtCalc');
const Calc = document.querySelector('#calc');
const btnSubmit = document.querySelector('#btnSubmit');

let sum = null;
let flag = false;

const initForm = function () {
  const text = 'required';

  txtName.textContent = text;
  txtEmail.textContent = text;
  txtCalc.textContent = text;
  Name.value = '';
  Email.value = '';
  Calc.value = null;
  sum = generateMath();

  Name.classList.remove('is-invalid');
  Email.classList.remove('is-invalid');
  Calc.classList.remove('is-invalid');

  flag = false;
};

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const generateMath = function () {
  const first = Math.trunc(Math.random() * 10);
  const second = Math.trunc(Math.random() * 10);

  txtMath.textContent = `${first} + ${second} = ?`;

  return first + second;
};
sum = generateMath();

const handleName = function () {
  if (Name.value.length === 0) {
    Name.focus();
    txtName.textContent = 'Please fill out your name';
    Name.classList.add('is-invalid');
    flag = false;
    return;
  }
  txtName.textContent = 'required';
  Name.classList.remove('is-invalid');
  flag = true;
};

const handleEmail = function () {
  if (!validateEmail(Email.value)) {
    Email.focus();
    txtEmail.textContent = 'Please fill out a valid email format';
    Email.classList.add('is-invalid');
    flag = false;
    return;
  }

  txtEmail.textContent = 'required';
  Email.classList.remove('is-invalid');
  flag = true;
};

const handleMath = function () {
  if (sum !== parseInt(Calc.value)) {
    txtCalc.textContent = 'Please fill out a correct answer';
    Calc.focus();
    Calc.classList.add('is-invalid');
    flag = false;
    return;
  }

  txtCalc.textContent = 'required';
  Calc.classList.remove('is-invalid');
  flag = true;
};

btnSubmit.addEventListener('click', (evt) => {
  if (flag) alert('Thank you for your information');
  else {
    btnSubmit.attributes('disabled');
    evt.preventDefault();
  }
});

Name.addEventListener('focusout', handleName);
Email.addEventListener('focusout', handleEmail);
Calc.addEventListener('focusout', handleMath);
