
verificarVelocidade(100);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;

    if ( velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
        if( pontos >= 12)
            console.log('Carteira suspensa');
        else
            console.log('Pontos', pontos);
    }
}