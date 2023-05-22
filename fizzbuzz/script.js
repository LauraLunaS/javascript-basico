
const resultado = fizzBuzz(11);
console.log(resultado)

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não pe um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 5 === 0)
        return 'Fizz'
    
    return entrada;
}