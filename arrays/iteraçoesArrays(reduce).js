/*
ele e um ação acumuladora, ou seja, a cada valor do array(da esquerda => direita), para reduzir a um unico valor. Ou seja é uma maneira poderosa de transfornmar um array em unico valor seja ele uma string, numero, objeto ou ate msm outro array
*/

let lista = [1,2,3,4,5];

/*lista.reduce((valorPrevio, proximoValor) => {
    //trecho de um codigo executado para cada item da lista
    return dado manipulado
}, acumulador).acumulador; <-----------essa é a estrutura base de um reduce()*/

const armario = [
    {tipo: 'camisetas', quant: 4},
    {tipo: 'calças', quant: 6},
    {tipo: 'blusas', quant: 4},
    {tipo: 'tenis', quant: 3},
];

const valorTotal = armario.reduce((valorPrevio, proximoValor) => {
    return valorPrevio + proximoValor.quant;
}, 0);
console.log(valorTotal);

//assim como filter e o map, esse metodo nao altera o estado do original, sempre ele retorna algo novo, um array novo