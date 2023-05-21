

function VerificarEntrada() {

const nome = document.getElementById('nome').value
const conv = document.getElementById('convidado').value
const res = document.getElementById('res').value


    if(nome === '' && conv === '' ){
        alert('Preencha os campos')
    }
    else if (nome === 'Laura' && conv === 'Luna') {
        document.getElementById('res').textContent = "Você pode entrar!";
    }
    else {
        document.getElementById('res').textContent = "Você não pode entrar";
    }
}