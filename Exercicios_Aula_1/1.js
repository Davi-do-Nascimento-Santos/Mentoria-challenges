const readlineSync = require('readline-sync');
let numero = Number(readlineSync.question('Digite um número: '));
console.log(`O sucessor de ${numero} é ${numero+1}`)
