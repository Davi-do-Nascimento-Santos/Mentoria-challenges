// 10 - Escreva uma função que dado array pode ter números duplicados,
// limpe o array de maneira que tenhamos um array com apenas 
// elementos unicos.
function unique(array){
    const newArray = [];
    for (let i=0; i < array.length; i++){
        if (newArray.length === 0){
            newArray.push(array[i]);
        } else {
            let n = true;
            for (let a=0; a < newArray.length; a++){
                if (array[i] === newArray[a]){
                    n = false
                }
            }
            if (n ===  true){
                newArray.push(array[i]);
            }
        }
    }
    return newArray;
}



console.log(unique([1, 1, 2, 3, 2, 3, 4]));
console.log(unique([1, 2, 2, 3, 4, 4]));
console.log(unique([1, 1, 2, 2]));

