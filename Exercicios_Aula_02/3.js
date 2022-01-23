// 3 - Função que recebe um array de números e retorno ele em ordem inversa.
function inverso(array){
    const list = [];
    for (let i=0; i < array.length; i++){
        if (i == 0){
            list.push(array[i]);
        } else  {
            if (array[i] > list[0]){
                list.unshift(array[i]);
            } else {
                for (let a=list.length; a > 0; a--){
                    if (array[i] < list[a-1] ){
                        list.splice(list.indexOf(list[a-1])+1, 0, array[i])
                        break;
                    }
                }
            }
        }
    }
    return list
}
console.log(inverso([1, 2, 3]));
console.log(inverso([3, 2, 1, 0]));
console.log(inverso([3, 1, 2]));
console.log(inverso([2, 1, 3]));
console.log(inverso([3, 4, 2, 1, 10, 9, 11, 0]));
