//Variavéis:
const button = document.querySelector(".button");
const inputPaciente = document.querySelector("#paciente");
const inputCpfPaciente = document.querySelector("#cpf-paciente");
const inputDiagnostico = document.querySelector("#diagnostico");
const inputRemedio = document.querySelector("#remedio");
const inputDosagem = document.querySelector("#dosagem");

//Criando elemento 'p' para o error
const error = document.createElement('p');

//Função para limpar os textos
function clearForm(){
    error.textContent = '';
    inputPaciente.value = '';
    inputCpfPaciente.value = '';
    inputDiagnostico.value = '';
    inputRemedio.value = '';
    inputDosagem.value = '';
}

//Criando evento para Validação
button.addEventListener(("click"), function(event){
    event.preventDefault();

    //Validação:
    if(inputPaciente.value === ''){
      error.textContent = "Este campo é obrigatório";
      inputPaciente.insertAdjacentElement('afterend', error);
      error.setAttribute('class', 'error');
      return false;
    }

    if(inputCpfPaciente.value === ''){
      error.textContent = "Este campo é obrigatório";
      inputCpfPaciente.insertAdjacentElement('afterend', error);
      error.setAttribute('class', 'error');
      return false;
    }

    if(inputDiagnostico.value === ''){
      error.textContent = "Este campo é obrigatório";
      inputDiagnostico.insertAdjacentElement('afterend', error);
      error.setAttribute('class', 'error');
      return false;
    }

    if(inputRemedio.value === ''){
      error.textContent = "Este campo é obrigatório";
      inputRemedio.insertAdjacentElement('afterend', error);
      error.setAttribute('class', 'error');
      return false;
    }

    if(inputDosagem.value === ''){
      error.textContent = "Este campo é obrigatório";
      inputDosagem.insertAdjacentElement('afterend', error);
      error.setAttribute('class', 'error');
      return false;
    }

    clearForm();
})