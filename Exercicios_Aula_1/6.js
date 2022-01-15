const readlineSync = require('readline-sync');
let value = Number(readlineSync.question('Digite o preço do carro: R$ '));
value += value * (45/100);
value += value * (12/100);
console.log(`O preço final do carro é: R$ ${value}`);
