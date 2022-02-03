// 4 - Escreva uma função que ordene os elementos de um array em ordem
// crescente
function ordena(array){
    const lista = [];
    for (let i = 0; i < array.length; i++){
        if (i === 0 || array[i] > lista[lista.length-1]){
            lista.push(array[i]);
        } else{
            for (let a = 0; a < lista.length; a++){
                if (array[i] < lista[a]){
                    lista.splice(lista.indexOf(lista[a]), 0, array[i]);
                    break;
                }
            }
        }
    }   
    return lista;
}

console.log(ordena([1, 2, 4, 3]));
console.log(ordena([1, 10, 9, 8, 2, 3, 5, 7, 4]));
