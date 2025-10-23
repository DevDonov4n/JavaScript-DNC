/*
o metodo sort é usado para ordenar os elementos de um array em ordem
 alfabetica || numerica
*/

let lista = [1, 2, 3, 1, 5, 5, 8,7];

let lista2 = ['a', 'm', 'd', 'z', 'l']

const listaOrdenada = lista.sort((firstValue, secondValue) => secondValue - firstValue);
const lista2Ordenada = lista2.sort().reverse()
//                                 ^--------pode ser feito tb com uma função
//                                         (firstValue, secondValue) => firstValue > secondValue ? -1 : 1
console.log(listaOrdenada);
console.log(lista2Ordenada);
//-------------------------------------------------------------------------------------------------------------------


const listaObj = [
    {id: 1, name:'dodo'},
    {id: 95, name:'LILLY'},
    {id: 7, name:'FÊ'},
    {id: 666, name:'NY'},
    {id: 69, name:'LEO'},
];

const ListaOrdenadaObj = listaObj.sort((firstValue, secondValue) => secondValue.id - firstValue.id);
console.log(ListaOrdenadaObj);
//--------------------------------------------------------------------------------------------------------------------------------

const armario = [
    {type: 'camisetas', itens: [{name: 'camiseta 1'}]},
    {type: 'calças', itens: [{name: 'calça 1'}, {name: 'calça 2'}]},
    {type: 'blusas', itens: [{name: 'blusa 1'}, {name: 'blusa 2'}, {name: 'blusa 3'}]}
];

const armarioOrganizado = armario.sort((gaveta1, gaveta2) => {
    return gaveta2.itens.length - gaveta1.itens.length;
});

console.log(armarioOrganizado);
