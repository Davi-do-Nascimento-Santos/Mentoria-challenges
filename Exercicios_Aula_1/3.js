const numbers = [];
for (let i = 0; i < 100; i++){
    if (i % 4 === 0){
        numbers.push(i)
    }
}
console.log(`Os números menores de 100 que são diviveis por 4 são:\n${numbers}`)
