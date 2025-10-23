/*.Escreva um laço for que imprime os números de 1 a 10 no console.

for (let i = 1; i<=10; i++){
    console.log(i);
    
}

//2 Crie um laço while que imprime os números de 1 a 5 no console.
let a = 1
while (a <= 5){
    console.log(a);
    a++
}

//Escreva um laço do .while que imprime os números de 1 a 3 no console.

let b = 1;
do{
    console.log(b);
    b++
}while(b <= 3);

//Escreva um laço for que imprime os números pares de 2 a 20 no console

for(let i = 2; i <= 20; i+= 2){
    
    console.log(i);
    
}



//Crie um laço while que imprime os números de 10 a 1 no console (em ordem decrescente).

let i = 10;
while(i > 0){
    console.log(i);
    i--;
}


//Escreva um laço for que imprime a tabuada do 5 (5, 10, 15,..., 50).
let mult = 5
for(let num = 1; num <= 10; num++){
    
    console.log(`${mult} x ${num} = ${mult * num}`);
    
}


//Crie um laço for que calcula e imprime a soma dos números de 1 a 100.
let soma = 0
for(let i = 1; i <= 100;i++ ){
    soma+= i;
}
console.log(soma);


*/

// escreva um laço while que imprime apenas os numeros impares de 1 a 20

let i = 2;
while (i < 20){
    /*if(i % 2 != 0){
        console.log(i);
    }*/
    console.log(i);
    i += 2
}

