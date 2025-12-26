/**
 * Array principal de estado da aplicação.
 * Cada tarefa possui:
 * - id: identificador único
 * - desc: descrição da tarefa
 * - checked: indica se a tarefa está concluída
 */
let tasks = [
    { id: 1, desc: 'Tarefa exemplar', checked: true },
];

/**
 * Evento disparado ao marcar/desmarcar um checkbox.
 * Atualiza o estado da tarefa correspondente no array `tasks`.
 */
const onCheckboxClick = (event) => {
    // Extrai o ID da task a partir do id do checkbox (ex: "1-checkbox")
    const id = event.target.id.split('-')[0];

    // Atualiza apenas a task correspondente
    tasks = tasks.map(task =>
        parseInt(id) === task.id
            ? { ...task, checked: event.target.checked }
            : task
    );
};

/**
 * Remove todas as tarefas que estão marcadas como concluídas.
 * Atualiza o array `tasks` e remove os elementos do DOM.
 */
const removeDoneTaks = () => {
    // Filtra apenas as tarefas concluídas
    const tasksToRemove = tasks.filter(task => task.checked);

    // Obtém apenas os IDs das tarefas a serem removidas
    const idToRemove = tasksToRemove.map(task => task.id);

    // Atualiza o estado removendo as tarefas concluídas
    tasks = tasks.filter(task => !task.checked);

    // Remove cada elemento correspondente no DOM
    idToRemove.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.remove();
    });
};

/**
 * Remove uma única tarefa pelo ID.
 * Atualiza o array `tasks` e remove o elemento visual.
 */
const removeTask = (taskId) => {
    // Remove a task do estado
    tasks = tasks.filter(({ id }) => parseInt(id) !== parseInt(taskId));

    // Remove o elemento <li> correspondente
    document
        .getElementById('toDo-list-section')
        .removeChild(document.getElementById(taskId));
};

/**
 * Cria o bloco visual do checkbox + label da tarefa.
 * Retorna um container com checkbox e texto.
 */
const getCheckBoxInputs = ({ id, desc, checked }) => {
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');

    // ID do checkbox segue o padrão: "id-checkbox"
    const checkBoxId = `${id}-checkbox`;

    checkBox.type = 'checkbox';
    checkBox.id = checkBoxId;
    checkBox.checked = checked || false;

    // Evento para atualizar o estado ao marcar/desmarcar
    checkBox.addEventListener('change', onCheckboxClick);

    label.textContent = desc;
    label.htmlFor = checkBoxId;

    wrapper.className = 'checkbox-label-container';

    wrapper.appendChild(checkBox);
    wrapper.appendChild(label);

    return wrapper;
};

/**
 * Cria o item da lista (<li>) que representa uma tarefa.
 * Inclui checkbox, texto e botão de remoção.
 */
const createTaskListItem = (task, checkbox) => {
    const list = document.getElementById('toDo-list-section');
    const toDo = document.createElement('li');

    // Botão de remoção individual
    const removeTaskButton = document.createElement('button');
    removeTaskButton.textContent = 'X';
    removeTaskButton.ariaLabel = 'Remover Tarefa';

    removeTaskButton.onclick = () => removeTask(task.id);

    // O ID do <li> é o mesmo ID da task
    toDo.id = task.id;

    toDo.appendChild(checkbox);
    toDo.appendChild(removeTaskButton);
    list.appendChild(toDo);

    return toDo;
};

/**
 * Gera um novo ID incremental para a próxima tarefa.
 */
const getNewTaskId = () => {
    const lastId = tasks[tasks.length - 1]?.id;
    return lastId ? lastId + 1 : 1;
};

/**
 * Extrai os dados do formulário e cria o objeto da nova tarefa.
 */
const getNewTaskData = (event) => {
    const desc = event.target.elements.desc.value;
    const id = getNewTaskId();

    return { desc, id, checked: false };
};

/**
 * Handler do submit do formulário.
 * Cria a nova tarefa no estado e no DOM.
 */
const createTask = (event) => {
    event.preventDefault();

    const newTaskData = getNewTaskData(event);

    const checkBox = getCheckBoxInputs(newTaskData);
    createTaskListItem(newTaskData, checkBox);

    // Atualiza o estado
    tasks = [...tasks, newTaskData];

    // Limpa o formulário
    event.target.reset();
};

/**
 * Inicialização da aplicação após o carregamento da página.
 */
window.onload = function () {
    const form = document.getElementById('create-todo-form');
    form.addEventListener('submit', createTask);

    // Renderiza as tarefas iniciais
    tasks.forEach(task => {
        const checkBox = getCheckBoxInputs(task);
        createTaskListItem(task, checkBox);
    });
};
