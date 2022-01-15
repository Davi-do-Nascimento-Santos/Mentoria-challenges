const readlineSync = require('readline-sync');
const lista = ["oi", "galera"]
let run = true;
let gradesSum = 0;
let gradesTotal = 0;

while (run){
	const grade = readlineSync.question('insira a nota: ');

	if (grade === 'fim'){
		run = false;
	} else {
		gradesSum += Number(grade);
		gradesTotal += 1;
	}
}
const media = gradesSum / gradesTotal

console.log(`A média das notas digitadas é ${media}`);
