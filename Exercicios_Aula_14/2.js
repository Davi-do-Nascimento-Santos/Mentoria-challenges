// 2 - Escreva uma função que verifique se uma string passada é um palindromo ou não.
function palindromo(str){
    let newSentence = '';
    for (let i = str.length-1; i >= 0; i--){
        newSentence = newSentence.concat(str[i]);
    }
    if (str.replace(/\s/g, '') === newSentence.replace(/\s/g, '')){
        return true;
    } else{
        return false
    }
}
console.log(palindromo('roma me tem amor'));
