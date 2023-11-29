const barrapesquisa = document.querySelector('.pesquisa');
const botao = document.querySelector('.botao');
const Nome = document.querySelector('.titulo');
const Sobrenome = document.querySelector('.subtitulo')
const instrucoes = document.querySelector(".instrucoes")

const error = document.createElement("p")

function Clearform(){
    barrapesquisa.value = "";
    error.textContent = "";
}


botao.addEventListener("click", function(){


    if (barrapesquisa.value == 'dipirona'){
        Nome.textContent = 'Dipirona'
        Sobrenome.textContent = '300mg'
        instrucoes.textContent = 'Tomar 1 comprimido a cada hora'

    } else if (barrapesquisa.value == 'cefadroxila'){
        Nome.textContent = 'Cefadroxila'
        Sobrenome.textContent = '100mg'
        instrucoes.textContent = 'Tomar 2 comprimidos a cada 12 horas'

    } else { // Validação caso não exista o nome dentro do banco de dados/campo em branco
        error.textContent = "* Nome Inválido"
        botao.insertAdjacentElement("afterend", error)
        error.setAttribute("class", "error")
        return false;
    }

    Clearform();
})