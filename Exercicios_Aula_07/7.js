// 7 - crie um array com data de quando você foi à academia.
// Crie uma função para verificar se você fez exercicio no dia 01/01/2021
function first_exercise(array){
    const date = [01, 01, 2021];
    let cont = 0
    for (let i=0; i < array.length; i++){
        if (array[i][0] == date[0] && array[i][1] == date[1] && array[i][2] == date[2]){
            cont++;
        }
    }
    if (cont != 0){
        return 'Você fez exercicio no primeiro dia de 2021';
    } else {
        return 'Você não fez exercicio no primeiro dia de 2021';
    }
}


datas = [[01, 01, 2021], [19, 07, 2001], [20, 10, 2019], [02, 02, 2005]]
console.log(first_exercise(datas));
