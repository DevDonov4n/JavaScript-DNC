/*
O que é Async/Await?
Async/Await é uma forma mais moderna e intuitiva de lidar com código assíncrono em JavaScript, construída sobre o conceito de Promises. Essa abordagem permite escrever código assíncrono de uma maneira que se assemelha ao código síncrono tradicional, tornando-o mais fácil de ler e entender.

Principais características:

Async: Palavra-chave usada para declarar uma função assíncrona.
Await: Utilizado dentro de funções assíncronas para esperar a resolução de uma Promise.


const pedidoConfirmado = await confirmarPedido()

const confirmarPedido = async () => new Promise
*/

console.log('Busca de dados em um servidor');

let buscaDados = () => new Promise((resolve, reject) => {
    console.log('Iniciando busca de Dados no servidor');
    setTimeout(() => {
        sucesso = true;
        if(sucesso) resolve({name: 'Donovan', age: 19});
            else reject('Opa! nao foi possivel encontrar dados correspondentes')
    }, 3000);
});

const data = await buscaDados();
console.log(data);
