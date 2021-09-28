const buttonLogin = document.querySelector('#login');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const selectHouse = document.querySelector('select');
const checkbox = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');
const contador = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');

function validateForm() {
  buttonLogin.addEventListener('click', () => {
    if (inputEmail.value && inputSenha.value !== null) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
} validateForm();

function houses() {
  const optionsHouse = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
  const housesId = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];

  for (let i = 0; i < optionsHouse.length; i += 1) {
    const option = document.createElement('option');
    option.innerText = optionsHouse[i];
    option.id = housesId[i];
    selectHouse.appendChild(option);
  }
} houses();

// requisito 18
// fontes de consulta
// sobre o checked: https://www.w3schools.com/jsref/prop_checkbox_checked.asp
// sobre o check e if juntos: https://www.guj.com.br/t/habilitar-campo-quando-checkbox-e-selecionado-resolvido/198756
// sobre o corpo da função: https://www.horadecodar.com.br/2020/11/17/como-habilitar-um-botao-apenas-quando-os-inputs-estiverem-preenchidos/

function verifyAgreement() {
  // função de click no checkbox
  checkbox.addEventListener('click', () => {
    if (checkbox.checked === false) {
      buttonSubmit.disabled = true;
    } else {
      buttonSubmit.disabled = false;
    }
  });
} verifyAgreement();

function caractereCount() {
  contador.innerHTML = 500;
  // adicionar evento de digitção
  textArea.addEventListener('keyup', () => {
    const limitCount = 500;
    // pegar os a quantidade dos caracteres atuais
    const currentCaractereCount = textArea.value.length;
    // acrescentar ao contador
    contador.innerHTML = limitCount - currentCaractereCount;
  });
} caractereCount();

// pegar todas os valores do formulário
const formTrybeWarts = document.querySelector('#evaluation-form');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmailSingUp = document.querySelector('#input-email');
const familia = document.querySelectorAll('.family');
const materias = document.querySelectorAll('.subject');
const feedback = document.querySelectorAll('[name=rate]');

function checkedFamily() {
  for (let i = 0; i < familia.length; i += 1) {
    if (familia[i].checked) {
      const selected = familia[i].value;
      return selected;
    }
  }
}

function subjectFamily() {
  const arraySubject = [];
  for (let i = 0; i < materias.length; i += 1) {
    const indiceMateria = materias[i];
    if (indiceMateria.checked) {
      arraySubject.push(` ${indiceMateria.value}`);
    }
  }
  return arraySubject;
}

function feedBackSelected() {
  for (let i = 0; i < feedback.length; i += 1) {
    if (feedback[i].checked) {
      return feedback[i].value;
    }
  }
}

function clearForm() {
  formTrybeWarts.innerHTML = '';
}

function submitForm() {
  buttonSubmit.addEventListener('click', (e) => {
    clearForm();
    e.preventDefault();
    const name = document.createElement('p');
    name.innerText = `Nome: ${inputName.value} ${inputLastName.value}
    Email: ${inputEmailSingUp.value}
    Casa: ${selectHouse.value}
    Família: ${checkedFamily()}
    Matérias: ${subjectFamily()}
    Avaliação: ${feedBackSelected()}
    Observações: ${textArea.value}`;
    formTrybeWarts.appendChild(name);
  });
} submitForm();
