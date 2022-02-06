// 11 - Crie uma função que retorne o último dia do mês.
const readlineSync = require('readline-sync');
const mes = Number(readlineSync.question('Digite um mês: '));
const ano = Number(readlineSync.question('Digite um ano: '));
const date = new Date(ano, mes, 0);
console.log(`O último dia do mês é ${date.getDate()}`);
