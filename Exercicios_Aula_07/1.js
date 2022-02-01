// 1 - crie um objeto com a data de hoje.
const data = Date().split(' ');
const data_full = {'Day': data[2], 'Month': data[1], 'Year': data[3]};
console.log(data_full);
