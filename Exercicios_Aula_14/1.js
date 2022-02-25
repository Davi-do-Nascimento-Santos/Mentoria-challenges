// 1 - Escreva uma função em javascript que reverta um número.
function reverse(number){
    let convert = String(number);
    let arrayNumbers = '';
    for (let i = convert.length-1; i >= 0; i--){
        arrayNumbers = arrayNumbers.concat(convert[i]);
    }
    newNumber = Number(arrayNumbers);
    return newNumber;
}
console.log(reverse(1245));

