// 7 - peça para o usuário digitar uma data.
// Exiba separadamente o dia, o mês e o ano.
const readlineSync = require('readline-sync');
function formata_data (data){
    date_full = data.split('/');
    day = date_full[0];
    month = date_full[1];
    year = date_full[2];
    console.log(`Dia: ${day}`);
    console.log(`Mês: ${month}`);
    console.log(`Ano: ${year}`);
}
data = readlineSync.question('Digite a data separada por "/": ');
formata_data(data);
