// 7 - Escreva uma função que aceita dois parametros, uma string
// e uma letra, a função vai contar o número de ocorrência 
// da letra na string passada.
function occurrence(str, l){
    let o = 0;
    for (let i of str){
        if (i === l){
            o++;
        }
    }
    return o;
}
let teste = 'w3resource.com';
console.log(occurrence(teste, 'o'));
