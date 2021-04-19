const states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
const emailInput = document.getElementById('email');
const state = document.getElementById('state');
const getAllInputs = document.querySelectorAll('input');
const getDataSection = document.querySelector('.form-data');
const submitButton =  document.getElementById('submit-form');

function onload() {
  statesOptions();
  calendar();
};

onload();

function statesOptions() {
  for (let index = 0; index < states.length; index += 1) {
    let options = document.createElement('option');
    options.innerHTML = states[index];
    state.appendChild(options);
  }
}

function calendar() {
  var field = document.getElementById('datepicker');
  var picker = new Pikaday({
    onSelect: function (date) {
      field.value = picker.toString();
    }
  });
  field.parentNode.insertBefore(picker.el, field.nextSibling);
}

function validateEmail() {
  const insertedEmail = emailInput.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);

  if(!emailFormat && insertedEmail.length) {
    emailInput.value = '';
    alert('email inválido');
    return false;
  }
  return emailFormat;
}

function generateResumeDiv(event) {
  event.preventDefault();
  for (let index = 0; index < getAllInputs.length; index += 1) {
    if (getAllInputs[index].type === 'radio' && !getAllInputs[index].checked) {
      continue;
    } if (validateEmail()) {
      const newResumeDiv = document.createElement('div');
      newResumeDiv.className = 'user-inputs';
      newResumeDiv.innerHTML = getAllInputs[index].value;
      getDataSection.appendChild(newResumeDiv);
    }
  }
}

submitButton.addEventListener('click', generateResumeDiv);