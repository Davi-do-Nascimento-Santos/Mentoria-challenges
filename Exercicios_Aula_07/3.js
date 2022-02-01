// 3 - verificar se uma data é válida
function verifica_data(data){
    let data_full;
    if (data.indexOf('/') != -1){
        data_full = data.split('/');
    } else if (data.indexOf('-') != -1){
        data_full = data.split('-');
    } else if (data.indexOf(' ') != -1){
        data_full = data.split(' ');
    } else{
        return false;
    }
    if (data_full.length === 3){
        if (data_full[0].length <= 2 && 0 <= data_full[0] <= 31){
            if (data_full[1].length <= 2 && 0 <= data_full[1] <= 31){
                if (data_full[2].length <= 4 && 0 <= data_full[2]){
                    return true;
                } else{
                    return false;
                }    
            } else{
                return false;
            }
        } else{
            return false;
        }
    } else{
        return false;
    }
}
const readlineSync = require('readline-sync');
const data = readlineSync.question('Digite um data: ');
console.log(`A data é válida: ${verifica_data(data)}`);
