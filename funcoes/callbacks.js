// ela é uma funcao que usada como argumento para chamar outra funcao
//usadas para operaçoes assincronas, como requisições de rede,temporizadores ou manipulação de eventos

// Função que atualiza um contador regressivo e executa um callback no final
const atualizaContadorRegressivo = (tempo, callback) => {
    
    let segRes = tempo; // guarda o número inicial do contador (tempo)

    // Cria um intervalo que roda a cada 1000ms (1 segundo)
    const atualizadorCont = setInterval(() => {
        
        console.log(segRes); // mostra o valor atual do contador no console

        // Verifica se o contador chegou a zero
        if (segRes === 0) {
            clearInterval(atualizadorCont); // para o intervalo (encerra o loop)
            callback(); // chama a função callback passada como argumento
        } else {
            segRes--; // diminui 1 a cada segundo até chegar a 0
        }

    }, 1000); // intervalo de tempo em milissegundos
}

// Função que apenas chama a função do contador, repassando os parâmetros
const iniciarContador = (tempo, callback) => {
    atualizaContadorRegressivo(tempo, callback); // chama o contador e passa o callback
}

// Chama a função iniciarContador
iniciarContador(3, () => {
    // Essa função é o "callback"
    // Ela só será executada quando o contador chegar a 0
    console.log('finalizei a contagem regressiva');
});
