const gaveta = [ 
    {name: 'camiseta 1', material: ['algodao', 'elastano']},
    {name: 'camiseta 2', material: ['algodao']},
    {name: 'camiseta 3', material: ['elastano', 'algodao']},
    {name: 'camiseta 4', material: ['algodao']},
    {name: 'camiseta 5', material: ['algodao']},

];

const hasElastano = gaveta.every((item) => {
    return item.material.every(material => material === 'algodao')
});

console.log(hasElastano);


/*const everyItemHasElastano = gaveta.every((item) => {
    return item.material === 'elastano'
});

console.log(everyItemHasElastano);*/
