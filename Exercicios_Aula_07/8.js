// 8 - Crie uma função que retorne o número de dias dado o número do mês.
function dias_mes(mes){
    const pares = [4, 6, 9, 11];
    const impares = [1, 3, 5, 7, 8, 10, 12];
    const fevereiro = [2];
    if (pares.indexOf(mes) != -1){
        return 30;
    } else if (impares.indexOf(mes) != -1){
        return 31;
    } else {
        return 28;
    }
}
const readlineSync = require('readline-sync');
const mes = Number(readlineSync.question('Digite o número do mês para ver a quantidade de seus dias: '));
console.log(`O mês ${mes} tem ${dias_mes(mes)} dias.`);
