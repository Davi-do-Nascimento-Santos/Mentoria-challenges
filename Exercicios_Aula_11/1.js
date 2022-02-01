// 1 - Escreva uma função que verifica se uma entrada é uma array ou não.
function is_array(array){
    if (Array.isArray(array) === true){
        return true;
    } else{
        return false;
    }
}
console.log(is_array([1, 2, 3, 4]));
console.log(is_array('Olá Mundo!'));
