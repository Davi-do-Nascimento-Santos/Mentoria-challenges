// 2 - Função que recebe 3 números e retorno eles em ordem crescente.
// 4 - Função que recebe uma array de qualquer tamanho e retorno em ordem crescente.
function ordem (array){
    const list = [];
    for (let i = 0; i < array.length; i++){
        if (i == 0){
            list.push(array[i]);
        } else {
            if (array[i] > list[list.length-1]) {
                list.push(array[i]);
            } else {
                for (let a = 0; a < list.length; a++){
                    if (array[i] < list[a]){
                        list.splice(list.indexOf(list[a]), 0, array[i]);
                        break;
                    }
                }
            }
        }
    }
    return list
}
console.log(ordem([1, 2, 3]));
console.log(ordem([3, 2, 1]));
console.log(ordem([2, 1, 3]));
console.log(ordem([1, 3, 2, 5, 4, 0]));
