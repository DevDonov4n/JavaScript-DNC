/*
criar uma lista de tarefas. cada tarefa sera representada
por um objeto com as descrição, prioridade e status.
utilizando os metodos de array e funçoes avançadas vistas no modulo,
vamos manipular essa lista de tarefas de varias maneiras
*/

//criar a lista de tarefas
let tarefas = [
    {desc: 'academia', prioridade: 1, status: 'pendente' },
    {desc: 'estudar', prioridade: 2, status: 'concluida' },
    {desc: 'ler', prioridade: 3, status: 'pendente' },
    {desc: 'orar', prioridade: 1, status: 'concluida' },
];
//adicionar nova tarefa
tarefas.push({desc: 'limpar a mesa', prioridade: 2, status: 'pendente'});

console.log(tarefas);

//remove tarefas concluidas
const tarefasPendentes = tarefas.filter((task) => task.status === 'pendente');
console.log(tarefasPendentes);

//mostra tarefas concluidas
const tarefasConcluidas = tarefas.filter((task) => task.status === 'concluida');
console.log(tarefasConcluidas);

//encontra a tarefa ler;
const encontraTarefa = tarefas.find((task) => task.desc === 'ler');
console.log(encontraTarefa);

//Verificar conclusão de todas as tarefas
const checkAllTasks = tarefas.every((task) => {
    if(task.status === 'concluida'){
        console.log(`Meus parabens! todas as tarefas foram concluidas!!`);
    }else{
        console.log(`Calma la! Nem todas as tarefas foram concluidas.`);
    }
});