/**
 * ================================
 * TO-DO LIST - DOCUMENTAÇÃO GERAL
 * ================================
 *
 * Esta aplicação gerencia uma lista de tarefas (To-Do List),
 * permitindo criar, marcar como concluída, remover tarefas
 * e persistir os dados no LocalStorage.
 *
 * Tecnologias usadas:
 * - JavaScript puro
 * - Manipulação do DOM
 * - LocalStorage
 */

/**
 * --------------------------------
 * ESTADO PRINCIPAL DA APLICAÇÃO
 * --------------------------------
 * Array que armazena todas as tarefas.
 * Cada tarefa possui:
 * - id: identificador único (number)
 * - desc: descrição da tarefa (string)
 * - checked: indica se a tarefa foi concluída (boolean)
 */
let tasks = [
    { id: 1, desc: 'Tarefa exemplar', checked: true },
];

/**
 * --------------------------------
 * LOCAL STORAGE
 * --------------------------------
 */

/**
 * Salva o array de tarefas no LocalStorage.
 * @param {Array} tasks - Lista atual de tarefas
 */
const setTasksInLocalStorage = (tasks) => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
};

/**
 * Recupera as tarefas do LocalStorage.
 * Caso não exista nada salvo, retorna um array vazio.
 * @returns {Array}
 */
const getTasksFromLocalStorage = () => {
    const localTasks = JSON.parse(window.localStorage.getItem('tasks'));
    return localTasks ? localTasks : [];
};

/**
 * --------------------------------
 * CHECKBOX (MARCAR / DESMARCAR)
 * --------------------------------
 */

/**
 * Evento disparado ao marcar ou desmarcar um checkbox.
 * Atualiza apenas a tarefa correspondente no LocalStorage.
 * @param {Event} event
 */
const onCheckboxClick = (event) => {
    // O id do checkbox segue o padrão: "id-checkbox"
    // Exemplo: "1-checkbox" → pegamos apenas o "1"
    const id = event.target.id.split('-')[0];

    // Busca as tarefas salvas
    const tasks = getTasksFromLocalStorage();

    // Atualiza somente a tarefa cujo id corresponde ao checkbox clicado
    const updatedTasks = tasks.map(task =>
        parseInt(id) === task.id
            ? { ...task, checked: event.target.checked }
            : task
    );

    // Salva o novo estado
    setTasksInLocalStorage(updatedTasks);
};

/**
 * --------------------------------
 * REMOÇÃO DE TAREFAS
 * --------------------------------
 */

/**
 * Remove todas as tarefas que estão marcadas como concluídas.
 * Atualiza o LocalStorage e remove os elementos do DOM.
 */
const removeDoneTaks = () => {
    const tasks = getTasksFromLocalStorage();

    // Filtra apenas tarefas concluídas
    const tasksToRemove = tasks.filter(task => task.checked);

    // Extrai os IDs das tarefas que serão removidas
    const idToRemove = tasksToRemove.map(task => task.id);

    // Mantém apenas as tarefas não concluídas
    const updatedTasks = tasks.filter(task => !task.checked);
    setTasksInLocalStorage(updatedTasks);

    // Remove os elementos <li> correspondentes do DOM
    idToRemove.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.remove();
    });
};

/**
 * Remove uma única tarefa com base no ID.
 * @param {number} taskId
 */
const removeTask = (taskId) => {
    const tasks = getTasksFromLocalStorage();

    // Remove a tarefa do array
    const updatedTasks = tasks.filter(
        ({ id }) => parseInt(id) !== parseInt(taskId)
    );

    // Atualiza o LocalStorage
    setTasksInLocalStorage(updatedTasks);

    // Remove o elemento visual <li> da lista
    document
        .getElementById('toDo-list-section')
        .removeChild(document.getElementById(taskId));
};

/**
 * --------------------------------
 * CRIAÇÃO DE ELEMENTOS VISUAIS
 * --------------------------------
 */

/**
 * Cria o bloco visual do checkbox com o texto da tarefa.
 * @param {Object} task
 * @returns {HTMLDivElement}
 */
const getCheckBoxInputs = ({ id, desc, checked }) => {
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');

    // Define o padrão do ID do checkbox
    const checkBoxId = `${id}-checkbox`;

    checkBox.type = 'checkbox';
    checkBox.id = checkBoxId;
    checkBox.checked = checked || false;

    // Evento para atualizar o estado da tarefa
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
 * Inclui checkbox e botão de remoção.
 * @param {Object} task
 * @param {HTMLElement} checkbox
 * @returns {HTMLLIElement}
 */
const createTaskListItem = (task, checkbox) => {
    const list = document.getElementById('toDo-list-section');
    const toDo = document.createElement('li');

    // Botão para remover a tarefa individualmente
    const removeTaskButton = document.createElement('button');
    removeTaskButton.textContent = 'X';
    removeTaskButton.ariaLabel = 'Remover Tarefa';

    removeTaskButton.onclick = () => removeTask(task.id);

    // O ID do <li> é o mesmo ID da tarefa
    toDo.id = task.id;

    toDo.appendChild(checkbox);
    toDo.appendChild(removeTaskButton);
    list.appendChild(toDo);

    return toDo;
};

/**
 * --------------------------------
 * CRIAÇÃO DE NOVAS TAREFAS
 * --------------------------------
 */

/**
 * Gera um novo ID incremental para a próxima tarefa.
 * @returns {number}
 */
const getNewTaskId = () => {
    const tasks = getTasksFromLocalStorage();
    const lastId = tasks[tasks.length - 1]?.id;
    return lastId ? lastId + 1 : 1;
};

/**
 * Extrai os dados do formulário e cria o objeto da nova tarefa.
 * @param {Event} event
 * @returns {Object}
 */
const getNewTaskData = (event) => {
    const desc = event.target.elements.desc.value;
    const id = getNewTaskId();

    return { desc, id, checked: false };
};

/**
 * Handler do submit do formulário.
 * Cria a tarefa no estado (LocalStorage) e no DOM.
 * @param {Event} event
 */
const createTask = (event) => {
    event.preventDefault();

    const newTaskData = getNewTaskData(event);

    // Cria os elementos visuais
    const checkBox = getCheckBoxInputs(newTaskData);
    createTaskListItem(newTaskData, checkBox);

    // Atualiza o estado
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = [...tasks, newTaskData];
    setTasksInLocalStorage(updatedTasks);

    // Limpa o formulário
    event.target.reset();
};

/**
 * --------------------------------
 * INICIALIZAÇÃO DA APLICAÇÃO
 * --------------------------------
 */

/**
 * Executado quando a página é carregada.
 * - Configura o evento do formulário
 * - Renderiza as tarefas salvas
 */
window.onload = function () {
    const form = document.getElementById('create-todo-form');
    form.addEventListener('submit', createTask);

    // Carrega e renderiza tarefas salvas
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => {
        const checkBox = getCheckBoxInputs(task);
        createTaskListItem(task, checkBox);
    });
};
