// Validação forms
const button = document.querySelector(".button");
const inputNome = document.querySelector("#nome");
const inputDocumento = document.querySelector("#documento");
const inputSenha = document.querySelector("#senha");
const inputPaciente = document.querySelector("#paciente");
const inputDiagnostico = document.querySelector("#diagnostico");
const inputRemedio = document.querySelector("#remedio");
const inputDosagem = document.querySelector("#dosagem");


// Criando elemento 'p' para o error
const error = document.createElement('p');

// Função para limpar os textos
function clearForm() {
    input.value = '';
    error.textContent = '';
}

// Criando evento
button.addEventListener(("click"), function(event) {
    event.preventDefault();
  
    // validações do formulário
    if (input.value === '') {
      error.textContent = "Este campo é obrigatório";
      input.insertAdjacentElement("afterend", error);
      error.setAttribute("class", "error");
      return false;
    }
    
    // Chamando a função criada para limpar os blocos
    clearForm();
  });