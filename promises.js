/*            V-------usamos um construtor 
let promise = new Promise ((resolve, reject) => {
    //operação assincrona
    let sucesso = true;
    if(sucesso){
        resolve("operação concluida");
    }else{
        reject("operação falhou")
    }
});
*/
//-----------------------------------------------------------------------

console.log('Eu preciso de um caderno novo');

let promessaDoFeh = new Promise((resolve,reject) => {
    console.log("feh indo comprar o caderno");
    setTimeout(() => {
        let sucesso = false;
        if (sucesso) resolve("Aqui esta o caderno")
        else reject("a loja tava fechada")
    }, 3000);
});

console.log("vou estudando enquanto isso no notebook");

promessaDoFeh
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro));
    

//----------------------------------------------------------------------------------------------
//Exercicio pratico:
/*
escreva um codigo que crie uma Promise que simula u a operação de buscar dados em um servidor.
Se os dados forem encontrados a Promise deve ser resolvida se nao deve ser rejeitada
*/

let tasks = [
    {name: 'ler'},
    {name: 'estudar'},
    {name: 'academia'}
];

let findTask = new Promise((finded, miss) => {
    console.log('Procurando a tarefa...');
    setTimeout (()=> {
        tasks.find((task) => {
            if(task.name === 'ler')
            finded('Tarefa Encontrada! Começe a executa-la!')
            else miss('Tarefa NAO encontrada, essa foi por pouco')
        });
        
    },3000);
    
});

findTask
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro));