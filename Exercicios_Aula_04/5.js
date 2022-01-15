// 5 - Crie um programa para receber os dados de altura e sexo de 5 pessoas.
// Mostrar quantas são do sexo masculino e feminino.
// Mostrar qual o sexo do pessoa mais alta.

const readlineSync = require('readline-sync');
let men = 0, women = 0;
let biggerAge, biggerAgeSex;
for (let i = 0; i < 5; i++){
    const person = [];
    const sex = String(readlineSync.question(`Digite o sexo da ${i+1}º pessoa: `)).toUpperCase()[0];
    const age = Number(readlineSync.question(`Digite a idade da ${i+1}º pessoa: `));
    if (sex === 'M'){
        men += 1;
    } else {
        women += 1;
    }
    if (i == 0){
        biggerAge = age;
        biggerAgeSex = sex
    } else {
        if (age > biggerAge){
            biggerAge = age;
            biggerAgeSex = sex
        }
    }
}
console.log(`Foram contabilizados ${men} homens e ${women} mulheres`)
console.log(`A pessoa com maior idade é ${biggerAge} e o sexo dela é ${biggerAgeSex}`)
