// 1 - Função que recebe uma array de 2 números e retorna o array em ordem. 
function ordena (l){
    const lista = [];
    if (l[1] < l[0]){
        lista.push(l[1]);
        lista.push(l[0]);
        return lista;
    } else {
        return l;
    }
}
console.log(ordena([2, 1]))
