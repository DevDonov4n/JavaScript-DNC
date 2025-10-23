/*
for (let item of lista){
    execuata bloco de codigo
}


let lista = [1,2,3,4,5]

for (let item of lista){
    console.log('item')
}
*/

let cart = [
    {name: 'Casaco', preco: 120},
    {name: 'camiseta', preco: 60},
    {name: 'calça', preco: 110},
];

let total = 0;

for (let cartItem of cart){
    total = total + cartItem.preco;
}

console.log(total);
