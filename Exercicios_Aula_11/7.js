// 7 - Escreva uma funçãoq para encontrar um elemento em um array
// caso exista retornar a posição, caso não existir retornar null.
function encontra(array, n){
    if (Array.isArray(array) === true){
        for (let i=0; i < array.length; i++){
            if (array[i] === n){
                return i;
            }
        }
        return null;
    }
}
console.log(encontra([1, 2, 3, 4, 5], 4));
console.log(encontra([1, 2, 3], 10));
