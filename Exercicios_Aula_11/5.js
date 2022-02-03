// 5 - Escreva uma funçãoq que ordene os elementos de um array em ordem 
// decrescente
function inverso(array){
    const lista = [];
    for (let i = 0; i < array.length; i++){
        if (i === 0 || array[i] > lista[0]){
            lista.unshift(array[i]);
        } else{
            for (let a = lista.length-1; a >= 0; a--){
                if (array[i] < lista[a]){
                    lista.splice(lista.indexOf(lista[a])+1, 0, array[i]);
                    break;
                }
            }
        }
    }
    return lista
    return lista;;
} 
console.log(inverso([1, 2, 3, 4]));
console.log(inverso([4, 3, 2, 1]));
console.log(inverso([1, 4, 2, 3, 6, 9, 10, 8, 6]));
