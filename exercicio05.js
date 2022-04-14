//  5 - Crie uma função que recebe o ano de nascimento 
// da pessoa informando se ela é maior de idade ou menor.

function receberAno(ano){
    if (ano > 2004){
        return 'Você é menor de idade'
    }else{
        return "Você é maior de idade"
    }
}

console.log(receberAno(2004))