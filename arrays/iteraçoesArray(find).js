/*
o metodo find ele retorna um unico item da lista que passa
por um teste (ou seja, uma função fornecida). ele nao modifica o array
original mas retorna o primeir item encontrado na codificação

é como se nos estivessemos proocurando uma camiseta roxa no armario, a primeira
que encontrarmos nos a pegamos e nao procuramos mais
*/

let lista = [1, 2, 3, 1, 5, 5, 8,7];

const itemEncontrado = lista.find((item) => {
    return item > 6;
});
console.log(itemEncontrado);
