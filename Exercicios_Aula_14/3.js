// 3 - Escreva uma função que retorna uma string passada em ordem alfabetica
function ordered(str){
    const array = [];
    for (let i = 0; i < str.length; i++){
        if (i === 0 || str[i] > array[array.length-1]){
            array.push(str[i]);
        } else {
            for (let a = 0; a < array.length; a++){
                if (str[i] <= array[a]){
                    array.splice(array.indexOf(array[a]), 0, str[i]);
                    break;
                }
            }
        }
    }
    let sentence = '';
    for (let i = 0; i < array.length; i++){
        sentence = sentence.concat(array[i]);
    }
    console.log(sentence);
}
ordered('webmaster');
