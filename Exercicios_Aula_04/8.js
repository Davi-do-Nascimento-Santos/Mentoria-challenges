// 8 - Crie um cardapio e peça ao usuário para selecionar os produtos e a quantidade.
// Exiba o preço total no final.
console.log('Coffee Shop');
console.log('   Menu');
console.log('1 - Coca Cola - R$ 4.00');
console.log('2 - Coxinha   - R$ 2.50');
console.log('3 - Pastel    - R$ 3.00');
console.log('4 - Suco      - R$ 3.50');
const readlineSync = require('readline-sync');
let fim = true;
let total = 0;
const menu = [4, 2.50, 3, 3.50]
while (fim){
    let item = readlineSync.question('Item: ');
    if (item == 'fim'){
        fim = false;
    } else {
        let quantidade = Number(readlineSync.question('Quantidade: '));
        total += menu[Number(item) - 1] * quantidade;
    }
}
console.log(`Valor total: R$ ${total}`);
