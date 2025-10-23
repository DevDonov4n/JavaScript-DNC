/* 
ele cria um novo array nao alterando o outro array, cria um array com todos elementos
passando por uma condição/funcao
*/

const armario = [
    {name: 'camiseta', color: 'red'},
    {name: 'camiseta', color: 'yellow'},
    {name: 'camiseta', color: 'blue'},
    {name: 'camiseta', color: 'green'},
    {name: 'camiseta', color: 'red'},
]

const novoArmario = armario.filter((item) => {
    return item.color === 'green';
});

console.log(novoArmario);


//para o metodo filter() funcionar ele sempre vai precisar de uma condição, se nao ele vai retornar tudo

//-------------------------------------------------------------------------------
