// 3 - Crie uma função que recebe um array e  retorna o último elemento
// desse array se nenhum outro argumento for passado, porém se outro
// argumento for passado ela vai retornar os últimos "n" elementos do
// array.
function first (array, n=0){
    if (Array.isArray(array) === true){
        if (n === 0){
            return array[array.length-1];
        } else{
            return array.slice(n-1);
        }
    }
}
console.log(first([1, 2, 3]));
console.log(first([1, 2, 3], 2)); 
