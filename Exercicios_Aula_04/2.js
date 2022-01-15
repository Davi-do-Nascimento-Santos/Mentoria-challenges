// 2 - Faça um programa que peça números e imprima o quadrado de cada número.

const readlineSync = require('readline-sync');
let run = true;
while(run){
	const input = readlineSync.question('Digite o seu número: ')
	if (input == 'sair'){
		run = false;
	} else {
		const number = Number(input)
		console.log(`O quadrado de ${number} é ${number *  number}`)
	}
}

