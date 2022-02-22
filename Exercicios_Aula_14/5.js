// 5 - Escreva uma função que recebe uma string como parametro
// e conta o número de vogais na string.
function vowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let o = 0
    for (let i of str.toLowerCase()){
        if (vowels.indexOf(i) !== -1){
            o++;
        }
    }
    return o;
}

const teste = 'THE QUICK BROWN FOX';
console.log(vowels(teste));
