// 6 - Aplicar imposto ao preço de um carro.
// a - 45% de imposto ao custo do carro.
// b - 12% de imposto ao distribuidor.
const readlineSync = require('readline-sync');
let value = Number(readlineSync.question('Digite o preço do carro: R$ '));
value += value * (45/100);
value += value * (12/100);
console.log(`O preço final do carro é: R$ ${value}`);
