// 11 - Crie uma função que retorne o último dia do mês.
function ultimo_dia_mes(mes){
    const pares = [4, 6, 9, 11];
    const impares = [1, 3, 5, 7, 8, 10, 12];
    if (pares.indexOf(mes) !== -1){
        return 30;
    } else if (impares.indexOf(mes) !== -1){
        return 31;
    } else {
        return 28;
    }
}
const readlineSync = require('readline-sync');
const mes = Number(readlineSync.question('Digite um mês e veja seu último dia: '));
console.log(`O último dia do mês é ${ultimo_dia_mes(mes)}`);
