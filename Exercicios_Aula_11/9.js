// 9 - Escreva uma função que cria um novo array com quantidade de
// elementos e o valor dados pelo usuário.
function fill(n, element){
    const array = [];
    for (let i=0; i < n; i++){
        array.push(element);
    }
    return array;
}
console.log(fill(3, 'a'));
console.log(fill(4, 'Davi'));
