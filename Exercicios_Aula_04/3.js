// 3 - Peça ao usuário para digitar 5 números. verifique qual é o maior número e  exiba-o. 

const readlineSync = require('readline-sync');
let maior;
for (let i=0; i<5; i++){
	const number = Number(readlineSync.question(`Digite o ${i+1}º número: `));
	if (i == 0 ){
		maior = number;
	} else {
		if (number > maior){
			maior = number;
		}
	}
}
console.log(`O maior número digitado foi ${maior}`)
