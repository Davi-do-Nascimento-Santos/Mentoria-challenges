// 6 - Escreva uma função que extrai caracteres únicos de uma string.
function noRepeat(str){
    const letters = [];
    for (let i=0; i < str.length; i++){
        if (letters.indexOf(str[i]) == -1){
            letters.push(str[i]);
        } 
    }
    let sentence = '';
    for (let i=0; i < letters.length; i++){
        sentence = sentence.concat(letters[i]);
    }
    return sentence;
}
console.log(noRepeat('thequickbrownfoxjumpsoverthelazydog'));
