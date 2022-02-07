// 8 - Escreva uma função para gerar um array entre dois inteiros.
function rangeBetween(a, b){
    const array = [];
    if (a < b){
        for (let i = a; i <= b; i++){
            array.push(i);
        }
        return array;
    } else if (a > b){
        for (let i = a; i >= b; i--){
            array.push(i);
        }
        return array;
    }

}
console.log(rangeBetween(-10, 10));
console.log(rangeBetween(-10, 10));
console.log(rangeBetween(4, 7));
console.log(rangeBetween(-4, -7));
console.log(rangeBetween(-7, -4));
console.log(rangeBetween(4, -3));

