// 7 - Verifica se um ano é bissexto.
const readlineSync = require('readline-sync');
const year = Number(readlineSync.question('Digite um ano e veja se ele é bissexto: '));
if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
    console.log(`${year} é bissexto`);
} else {
    console.log(`${year} não é bissexto`);
}

