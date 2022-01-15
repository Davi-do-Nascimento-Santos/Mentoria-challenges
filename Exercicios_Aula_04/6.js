const readlineSync = require('readline-sync');
const people = [];
let end = true;
while (end){
    const person = String(readlineSync.question('Digite um nome: '));
    if (person == 'fim') {
        end = false;
    } else {
        people.unshift(person);
    }
}
console.log(people)
