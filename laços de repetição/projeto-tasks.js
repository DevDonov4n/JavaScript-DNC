let tasks = {
    'caminhar': true,
    'treinar': true,
    'estudar': true,
    'trabalhar': false
}

for (let key in tasks){
    console.log(`A tarefa: ${key} esta ${tasks[key] ? 'concluida' : 'incompleta'}`);
    
}