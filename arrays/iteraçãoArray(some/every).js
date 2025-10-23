/*
some e every: é uma funçao que tem a capacidade para retornar true ou false

some: ele verifica se pelo menos um elemento do array satisfaz uma condiçao
every: ele verifica se todos elementos do array satisfazem a condição da função

é como se estivessemos procurando em nossa guarda-roupa se pelo menos 1 camiseta é de algodão
ou se todas são
*/
let lista = [1,2,3,4,5,6,7,'8', 9]

const isEqualGreaterThan8 = lista.some((item) => {
    //verifica se pelo menos 1 dos itens satisfazem a condição;

    if (typeof item === 'number') return item >= 8;
    return false;
    
});

console.log(isEqualGreaterThan8);


const isNumber = lista.every((item) => {
    //verifica se todos itens correspondem a condição
    return typeof item === 'number'
});

console.log(isNumber)