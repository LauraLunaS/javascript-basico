const filme = {

    titulo: 'Guardioes da galaxia',
    ano: 2018, 
    diretor: 'Laura',
    personagem: 'Rocket'

}


exibirPropriedades(filme);

function exibirPropriedades(obj) {
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}