/*O método map é uma função poderosa em JavaScript que permite transformar cada elemento de um array, criando um novo array com os resultados. Suas principais características são:

Cria uma nova lista a partir da original
Transforma cada item do array original
Mantém a quantidade de itens do array original
Não modifica o array original (imutabilidade)
*/

let lista = [1,2,3,4,5];

const novaLista = lista.map((item) => {
    return {number: item}
})

console.log(lista);
console.log(novaLista);

//-------------------------------------------------------------------

