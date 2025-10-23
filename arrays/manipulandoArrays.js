let lista = [
    'camisetas',
    'pijamas',
    'calças',
    'meias',
    'blusas',
];

let itensRemovidos = lista.shift()
//quando usamos o metodo push, sempre adiciona no final da lista
lista.push('blusas')
console.log(lista);

//quando usamos o pop, ele elimina o ultimo item do array
lista.pop()
console.log(lista);

//quando queremos mudar o comeco da nossa lista, usamos o unshift
lista.unshift('cuecas')
console.log(lista);

//quando queremos alterar a posisao do primeiro item usamos o shift
lista.shift()
console.log(lista);


console.log(itensRemovidos);


lista.push('sapatos');

const novoArmario = lista.map((itemArmario) => ( 
    {name: itemArmario, 
    isDirty: itemArmario === 'sapatos'
}));

const armarioFiltrado = novoArmario.filter((gaveta) => gaveta.isDirty)

console.log(novoArmario);

const descAllItems = novoArmario.reduce((prev, next) => {
    if(!prev.length) return next.name;
    return `${prev}, ${next.name}`
    
}, '')


const armarioEtiquetado = novoArmario.map((item, position) => {
    
    return {
        ...item, color: position === 2 ? 'amarelo' : 'azul'
    }
});

console.log(armarioEtiquetado.find((item) => {return item.color === 'azul'}));


console.log(armarioEtiquetado);

console.log(descAllItems);

console.log(armarioFiltrado);






