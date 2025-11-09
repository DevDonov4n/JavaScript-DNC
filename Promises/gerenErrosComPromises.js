console.log('Busca de dados em um servidor');
let counter = 0
let promessaBusca = () => new Promise((resolve, reject) => {
    console.log('Iniciando busca de Dados no servidor');

    setTimeout(() => {
        let sucesso = false;
        if (counter > 0) {
            sucesso = true;
        }else counter++
        
        if(sucesso) resolve({name: 'Donovan', age: 19})
            else reject('Opa! nao foi possivel encontrar dados correspondentes')
    }, 3000);
});

promessaBusca()
    .then(console.log)
    .catch((error) => {
        console.log('Erro na busca de Dados: ' + error);
        promessaBusca()
            .then(console.log)
            .catch(console.log)
    });