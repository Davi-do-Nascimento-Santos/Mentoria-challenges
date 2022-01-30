// 9 - Crie uma função que retorne o nome do mês de uma data.
function nome_mes(data){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let data_full;
    if (data.indexOf('/') != -1){
        data_full = data.split('/');
    } else if (data.indexOf('-') != -1){
        data_full = data.split('-');
    } else if (data.indexOf(' ') != -1){
        data_full = data.split(' ');
    }
    return meses[Number(data_full[1])-1];
}

const readlineSync = require('readline-sync');
const data = readlineSync.question('Digite uma data: ');
console.log(`O mês digitado foi ${nome_mes(data)}`);
