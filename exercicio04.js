// 4 - Crie uma função que retorna a palavra (impar/par)
// de acordo com seu parâmetro.

function calculaParEImpar(numero) {
    if (numero % 2 == 0) {
        return `O  ${numero} é par.`
    } else {
        return `O  ${numero} é impar.`
    }
}
console.log(calculaParEImpar(7))