//Escreva uma função chamada soma que recebe dois números e retorna a soma deles

function somaNums(num1, num2){
    console.log(num1 + num2);    
}
somaNums(3,5);

const somaNumsArrow = (numA1, numA2) => {
    console.log(numA1 + numA2);
}
somaNumsArrow(17, 1);

//----------------------------------------------------------------------------------------------

//Crie uma função chamada ehPar que recebe um número e retorna true se o número for par e false caso contrário

function ehPAr(num){
    if(num % 2 ===0 ){
        console.log(`O ${num}, é um numero par`);
    }else{
        console.log(`O ${num}, é um numero impar`);
    }
}
ehPAr(2);
ehPAr(1);

const ehParArrow = (numA) => {
    console.log(numA % 2 === 0 ? `o ${numA}, é par`: `o ${numA}, é impar`);
}

ehParArrow(6)
ehParArrow(7)

//Escreva uma função chamada fatorial que calcula o fatorial de um número.

const fatorialNum = (numFat) => {
    let i = numFat;
    let resultado = 1;
    
    while(i > 1){

        resultado = resultado * i;
        i--;
    }
    console.log(`o fatorial do ${numFat} = ${resultado}`);
    
}

fatorialNum(5);

// Crie uma função chamada saudacao que receba um nome como argumento e retorne uma saudação com esse nome

const saudacao = (nome) => {
    console.log(`Saudações ${nome}`);
}

saudacao('dodo');

function saudacaoFunc(nomeFunc){
    console.log(`Saudações ${nomeFunc}`);
    
}

saudacaoFunc('lilly');

// Escreva uma função chamada maiorNumero que recebe um array de números e retorna o maior número do array.

let listaNums = [1,2,3,95,5]
const maiorNumero = (maiorNum) => {
    let numeroMaior = 0;
    for (recebeMaior of maiorNum){
        if(recebeMaior > numeroMaior){
            numeroMaior = recebeMaior;
        }
        
    }

    console.log(`O maior numero da lista é: ${numeroMaior}`);
}

maiorNumero(listaNums);

// Crie uma função chamada quadrado que recebe um número e retorna o quadrado desse número.

const quadrado = (numeroQua) => {
    let quadradoNum = numeroQua
    console.log(numeroQua * quadradoNum);
}
quadrado(4);

//Escreva uma função chamada palindromo que verifica se uma string é um palíndromo (lê-se da mesma forma de trás para frente)

const palindromo = (palavra) => {
    const invertida = palavra.split('').reverse().join('');
    if(palavra === invertida){
        console.log(`${palavra}, é um palindromo`);
    }else{
        console.log(`${palavra}, não é um palindromo`);
    }
}
palindromo('ovo');
palindromo('pato');
palindromo('dodo');
/*
split(''): transforma a string em um array
reverse(): inverte a ordem dos caracteres
join(''): junta de volta em uma string
*/

//Crie uma função chamada contarVogais que recebe uma string e retorna o número de vogais nessa string

const contarVogais = (str) => {
    let vogais = 'aeiouAEIOU';
    let contador = 0;

    for (char of str){
        if(vogais.includes(char)){
            contador++
        }/*else{
            console.log(`A palavra: ${str}, nao possui vogais`);
        }*/
    }
    console.log(contador === 0 ? `a palavra: "${str}", nao é uma vogal` : `a palavra: "${str}", possui ${contador} vogais`);
    
    
}

contarVogais('dodo')
contarVogais('hj')