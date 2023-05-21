
let endereco = {
    rua: 'rua joao cardoso',
    cidade: 'recife',
    cep: '52090234'
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
    //declara so o endereco
    //declara chave e endereco se (endereco,chave[chave])
        console.log(endereco[chave]);
}

exibirEndereco(endereco)