// 6 - Escreva uma função que remova um elemento especifico do array.
function remove(array, n=0){
    if (Array.isArray(array) === true){
        if (n === 0){
            array.pop();
            return array;
        } else{
            array.splice(n-1, 1);
            return array;
        }
    }
}
console.log(remove([1, 2, 3], 3));
