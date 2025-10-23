//laço for: é para açoes que sabemos quantas vezes vai rodar

for(let i = 1; i<=5; i++){
    console.log(i);
}

//whule: nao sabemos quantas vezez vai ser executado, ele executa ate determinada 
// condição ser falsa

let f = 1;
while(f <= 5){
    console.log(`o laço rodou ${f}`);
    f++
}

//do while: ele é tipo o while, mas aqui ele executa pelo menos 1 vez
let d = 1
do{
    console.log(d);
    d++
}while(d < 5);

// for in: ele é util para precisa rodar sobre propridades de um Obejeto

let person = {
    name: 'dodo',
    age: 19,
}

for(let atributo in person){
    console.log(person[atributo]);
    
}

//for of: ele é usado para iterar sobre listas rodar em cima de listas
/// para executar um trecho de codigo para cada um dos itens

let total = 0
let cart = [
    {name: 'casaco', price: 50},
    {name: 'calça', price: 70},
];

for (let cartItem of cart){
    total = total + cartItem.price
}

console.log(total);

//exercicio de fixação de conteudo: percorrer por esse array de objetos
// usando: for, while e for of

const frutas = [
    {name: 'orange'},
    {name: 'banana'},
    {name: 'apple'},
    {name: 'pineapple'},
    {name: 'melon'}
];

console.log('-------------com lacço for-------------');


for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i].name);
}
console.log('--------------com laço while-----------------');

let n = 0
while(n < frutas.length){
    console.log(frutas[n].name);
    n++
}

console.log('-------------com laço for of-------------');

for(let r in frutas){
    console.log(frutas[r].name)
}