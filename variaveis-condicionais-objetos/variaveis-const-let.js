const conversor = 0.01
function calcImc(person){
    hight *= conversor;
    let imc = weight / (hight * hight);
}


const person = {
    nome: 'Donovan',
    weight: 80,
    hight: 170,
}


console.log(calcImc(person));



/*
    Nessa aula vimos que uma variavel pode mudar o seu valor
    ao contrario de uma constante, quer tera seu valor sempre 
    ao valor posto nela.

    nesse pequena liçao podemos notar que as duas variaveis declaradas
    com let, se alterarmos o valor delas notaremos que o valor final do imc
    tb altera. Diferente da const conversor que tem um valor definido assim que
    declaramos essa constante

    tb usamos o operador *= que pega a variavel que queremos multiplicar por outra
    
*/