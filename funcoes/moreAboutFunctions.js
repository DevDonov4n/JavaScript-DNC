function nomeDaFuncao(par1, par2){
    //corpo da função
    let resultado = par1 + par2;
    return resultado;
}

/*qual a diferencia entre parametro e argumento para uma função?

parametro: São as variáveis listadas na declaração da função.
argumentos:  São os valores reais passados para a função quando ela é chamada.

exemplo: 

Declaração da função (parâmetros) function somar(a, b) { return a + b; } 
Chamada da função (argumentos) let resultado = somar(5, 3);


//iniciar o contador com 5 segundos:
let getTimeM = function (tempoInSec){
    return tempoInSec * 1000
}
setInterval(function (){
    console.log('faz algo');
    
}, getTimeM(5))

*/
function iniciarContador(tempo){
    let segRes = tempo;
    const atualizadorCont = setInterval(function(){
        console.log(segRes);
        if(segRes === 0){
            clearInterval(atualizadorCont);
        }else{
            segRes--
        }
    }, 1000);
    
}

iniciarContador(10);

/* primeiro criamos a funcao chamada iniciarContador()
que recebe um numero (tempo) -> esse numero sera o tempo inicial do contador em seg

criamos uma variavel chamada segRes(se segundos restantes) que guarda o valor nela
que veio do parametro dado na função(o tempo), ou seja segRes comeca valendo o numero
que foi dado para a função

na constante atualizadorCont começa o intervalo de tempo, onde: setInterval vai executar a 
funçao dentro dele repetidamente a cada tempo em milesegundos

exibimos no console o segRes e dai caimos em uma condicional que verifica se o contador chegou ate zero
se true: ele para o intervalo, ou seja ele para de rodar o contador
se false: ele diminui 1 do valor de segRes(fazendo uma contagem regressiva)

no fechamento do setInterval é definido que a funcao vai ser executada a cada
1000 milissegundosm, ou seja, a cada 1 segundo, fechamos a funcão

por fim chamamos a funcao -> iniciarContador(10)
nesse caso ele vai começar de 10 e vai diminuindo: 10, 9, 8.....2, 1, 0.

*/