let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'

    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }

}

function validaSenha() {
    let txtSenha = document.querySelector('#txtSenha')

    if (assunto.value.length < 4) {
        txtSenha.innerHTML = 'Senha muito pequena , digite no minimo 5 caracteres'
        txtSenha.style.color = 'red'
        txtSenha.style.display = 'block'
    } else {
        txtSenha.style.display = 'none'
    }
}