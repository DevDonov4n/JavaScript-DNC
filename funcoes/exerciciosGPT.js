const numeros = [1, 2, 3, 4, 5]; // aqui estamos declarando o array com seus itens
// 
function somaDosItens (lista){
    let total = 0; //criamos uma variavel para acumular a soma dos valores
    for(let recebe of lista){ //percorremos a lista usando for of
        total += recebe; // aqui somamos o valor atual a cada giro   
    }
    return total   //aqui retornamos o total
}

console.log(somaDosItens(numeros)); //chamamos a funcção recebendo o array (numeros)

//-----------------------------------------------------------------------------------------------------------------------

const frutas = ['banana', 'maçã', 'uva']; // aqui estamos declarando o array com seus itens

function retornaQuant(itens){ //criamos uma função onde recebe itens como seu parametro, seu objetivo é retornar quantidade de itens no array
    let totalItens = 0;     //declaramos uma variavel que sera responsavel para cada volta do laço no array ele soma 1
    for(let recebeItens of itens){  //criamos o laço com a variavel 'recebeItens' dos itens
       totalItens++ // como dito, a cada volta ele soma 1
    }
    return totalItens; //desta funcao ele vai retornar o valor da variavel 'totalItens'
}
console.log(retornaQuant(frutas));   //chamamos a função recebendo o array como parametro para passar dentro da função
//--------------------------------------------------------------------------------------------------------------------------

const nomes = ['Dodo', 'Lia', 'Rafa'];

function showNames (names){
    for(let listNames of names){
        
    }
}