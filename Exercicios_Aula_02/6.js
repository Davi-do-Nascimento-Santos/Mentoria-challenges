// 6 - Função que recebe uma quantidade de linhas e colunas.
// Retorna uma matriz com numeros a partir do 1.
const readlineSync = require('readline-sync');
function matriz (x, y){
    const list = [];
    let contador = 0;
    for (let i=0; i < x; i++){
        list.push([]);
        for (let a=0; a < y; a++){
            contador++
            list[i].push(contador);
        }
    }
    for (let i=0; i < list.length; i++){
        console.log(list[i]);
    }
    //return list;
}
const colunas = Number(readlineSync.question('Digite a quantidade de colunas: '));
const linhas = Number(readlineSync.question('Digite a quantidade de linhas: '));
matriz(linhas, colunas);

