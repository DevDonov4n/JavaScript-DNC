// Crie uma Promise chamada "verificarIdade".
// Ela deve receber uma idade como parâmetro.
// - Se a idade for maior ou igual a 18, a Promise deve ser resolvida com a mensagem "Maior de idade".
// - Caso contrário, deve ser rejeitada com a mensagem "Menor de idade".

// Depois, chame a Promise e use .then() e .catch() para exibir o resultado no console.


let checkAge = new Promise((resolve, reject) => {
    let age = 19;
    if(age >= 18) resolve('maior de idade')
        else reject('menor de idade')
});

checkAge
    .then((mensage) => console.log(mensage))
    .catch((mensage) => console.log(mensage));

console.log('==================Exercico do ChatGPT==========================');

// Crie uma função chamada "buscarUsuario" que retorna uma Promise.
// Ela deve simular uma requisição a um servidor usando setTimeout (2 segundos de espera).

// - Se o usuário for encontrado (ex: nome === "Donovan"), resolva a Promise com os dados do usuário.
// - Caso contrário, rejeite com a mensagem "Usuário não encontrado".

// Teste chamando buscarUsuario("Donovan") e buscarUsuario("Maria"), usando .then() e .catch().

let userList = [
    {name: 'Donovan', age: 19},
    {name: 'Isabelli', age: 20},
    {name: 'Felipe', age: 49},
    {name: 'Nicolly', age: 12}
]

let findUser = ((userName) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const user = userList.find((user) => user.name === userName);
            if(user) resolve('User Founded')
                else reject('user not founded')
        }, 2000);
    });
    
});

findUser('Isabelli')
    .then((mensage) => console.log(mensage))
    .catch((mensage) => console.log(mensage));

findUser('Simba')
    .then((mensage) => console.log(mensage))
    .catch((mensage) => console.log(mensage));

