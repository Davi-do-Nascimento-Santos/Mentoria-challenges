// 4/5 - Imprimir a tabuada de qualquer número n.
const readlineSync = require('readline-sync');
const number = Number(readlineSync.question('Digite um número e veja sua tabuada: '));
for (let i = 1; i <= 10; i++){
    console.log(`${number} x ${i} = ${number * i}`);
}

