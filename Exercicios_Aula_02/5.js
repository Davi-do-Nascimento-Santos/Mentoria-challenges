// 5 - Função que recebe um vetor e um número. 
// A função retorna todos as posições onde o número aparece.  
function posições(array, elemento){
    const list = [];
    for (let i=0; i < array.length; i++){
        for (let a=0; a < array[i].length; a++){
            if (elemento == array[i][a]){
                list.push([i, a]);
            }
        }
    }
    return list;
}
const lista = [[1, 2, 3], [4, 3, 1], [5, 7, 10]];
const array1 = [[3, 3, 3], [2, 1, 4], [1, 2, 5], [3, 1, 2]]
console.log(posições(lista, 2));
console.log(posições(array1, 3));
