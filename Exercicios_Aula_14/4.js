// 4 - Escreva uma função que recebe uma string como parametro e encontra
// a maior palavra contida na string.
function biggest_word(str){
    let words;
    if (str.indexOf(',') != -1){
        words = str.split(',');
    } else if (str.indexOf(' ') != -1){
        words = str.split(' ');
    }
    let bigger = 0;
    let name;
    for (let i of words){
        if (i.length > bigger){
            bigger = i.length;
            name = i;
        }
    }
    return name;
}

let teste = 'Olá, mundo!';
console.log(biggest_word(teste));
console.log(biggest_word('Web Development Tutorial'));
