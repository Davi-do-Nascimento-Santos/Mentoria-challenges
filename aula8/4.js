/*Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maiores de 18 anos e quantas são menores.*/
const readlineSync = require('readline-sync');
let run = true;
const biggest = [];
const smallest = [];
while (run){
	const idade = readlineSync.question('Digite uma idade: (digite "fim" para parar)');
	if (idade == 'fim'){
		run = false;
	} else {
		if (Number(idade) >= 18){
			biggest.push(Number(idade));
		} else {
			smallest.push(Number(idade));
		}
	}
}
console.log(`${biggest.length} pessoas são maiores de 18 anos`);
console.log(`${smallest.length} pessoas são menores de 18 anos`);
