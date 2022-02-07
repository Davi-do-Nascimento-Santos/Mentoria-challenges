// 2 - Escreva uma função que retorna o primeiro elemento de um array.
function first (array, n=1){
    if (Array.isArray(array) === true){
        return array.slice(0, n);
    }
}
console.log(first([1, 2, 3, 4, 5]));
console.log(first([10, 9, 1, 2, 3, 4], 5));
