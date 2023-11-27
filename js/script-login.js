//Variavéis:
const button = document.querySelector(".button");
const inputNome = document.querySelector("#nome");
const inputDocumento = document.querySelector("#documento");
const inputSenha = document.querySelector("#senha");

//Criando elemento 'p' para o error
const error = document.createElement('p');

//Função para limpar os textos
function clearForm() {
  error.textContent = '';
  inputNome.value = '';
  inputDocumento.value = '';
  inputSenha.value = '';
}

//Criando evento para a validação
button.addEventListener(("click"), function(event) {
    event.preventDefault();

    //validação:
    //campos de nome
    if(inputNome.value === ''){
      error.textContent = "Este campo é obrigatório";
      inputNome.insertAdjacentElement('afterend', error);
      error.setAttribute('class', 'error');
      return false;
    } 
    
    //Campos pedindo números de documentos (CPF ou CRM)
    if(inputDocumento.value === ''){ 
      error.textContent = "Este campo é obrigatório";
      inputDocumento.insertAdjacentElement('afterend', error);
      error.setAttribute('class', 'error');
      return false;
    } 

    //Campos pedindo Senha
    if(inputSenha.value === ''){ 
      error.textContent = "Este campo é obrigatório";
      inputSenha.insertAdjacentElement('afterend', error);
      error.setAttribute('class', 'error');
      return false;
    }
    
    clearForm();
  }); 