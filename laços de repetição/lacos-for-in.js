/*
for(let chave in objeto){
    executar a iteração na propriedade do obejto
}
*/

let pessoa = {
    name: 'dodo',
    age: 19,
    hight: 184,
    doc: 12345678900,
}

let carro = {
    brand: 'McQueen'
}

Object.prototype.surname = 'teste'

for (let chave in pessoa){
    console.log(pessoa[chave])
}
console.log(pessoa, carro);
