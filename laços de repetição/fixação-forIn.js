let tasks = {
    'lavar louça': true,
    'ir na academia': true,
    'estudar': true,
    'ler algum livro': false,
}

for (let key in tasks){
    console.log(`A tarefa: ${key} esta ${tasks[key] ? 'concluida' : 'incompleta'}`);
    
}