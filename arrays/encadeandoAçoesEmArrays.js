const armario = [
    {type: 'camisetas', itens: [{name: 'camiseta 1'}]},
    {type: 'calças', itens: [{name: 'calça 1'}, {name: 'calça 2'}]},
    {type: 'blusas', itens: [{name: 'blusa 1'}, {name: 'blusa 2'}, {name: 'blusa 3'}]},
    {type: 'tenis', itens: [{name: 'tenis 1'}, {name: 'tenis 2'}, {name: 'tenis 3'}]}
];
let fraseInicial = 'As gavetas que possuem pelo menos 3 itens dentro são: '
const armarioOrganizado = 
    armario
        .sort((gaveta1, gaveta2) => {return gaveta2.itens.length - gaveta1.itens.length;})
        .map((gaveta) => ({...gaveta, count: gaveta.itens.length}))
        .filter((gaveta) => gaveta.count >= 3)
        .reduce((prev, next) => {
            if(prev === fraseInicial) return prev + next.type
            return prev + `, ${next.type}`
        }, fraseInicial);



console.log(armarioOrganizado);


