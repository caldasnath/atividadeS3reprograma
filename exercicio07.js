// 7 - Crie uma função que recebe 2 parâmetros e retorna o resultado 
// da divisão entre eles. Além disso, se o resto dessa divisão for 
//zero deverá imprimir no console o valor e dizer que ele é par.

function dividirNumero(num1, num2) {
    let resultado = num1 / num2
    if (num1 % num2 === 0) {
        return `O resultado da divisão é ${resultado}. Este é um número par.`
    }
    else {
        return `O resultado da divisão é ${resultado}.`
    }
}

console.log(dividirNumero(6, 3))