/**
 * =========================================================
 * TO-DO LIST — DOCUMENTAÇÃO COMPLETA DA APLICAÇÃO
 * =========================================================
 *
 * Esta aplicação implementa uma lista de tarefas (To-Do List)
 * utilizando JavaScript puro, com persistência via LocalStorage.
 *
 * Funcionalidades principais:
 * - Criar novas tarefas
 * - Marcar/desmarcar tarefas como concluídas
 * - Remover tarefas individualmente
 * - Remover todas as tarefas concluídas
 * - Persistir dados no LocalStorage
 * - Exibir progresso de tarefas concluídas
 *
 * Tecnologias utilizadas:
 * - JavaScript (ES6+)
 * - Manipulação direta do DOM
 * - LocalStorage
 */

/* =========================================================
 * ESTADO DA APLICAÇÃO
 * =========================================================
 *
 * A aplicação trabalha com um array de tarefas.
 * Cada tarefa segue o seguinte formato:
 *
 * {
 *   id: number        → Identificador único da tarefa
 *   desc: string      → Descrição da tarefa
 *   checked: boolean  → Indica se a tarefa está concluída
 * }
 *
 * OBS:
 * Este array serve apenas como estado inicial de exemplo.
 * O estado real da aplicação é sempre lido do LocalStorage.
 */
let tasks = [
    { id: 1, desc: 'Tarefa exemplar', checked: true },
];

/* =========================================================
 * LOCAL STORAGE — PERSISTÊNCIA DE DADOS
 * =========================================================
 */

/**
 * Salva o array de tarefas no LocalStorage.
 *
 * @param {Array<Object>} tasks
 */
const setTasksInLocalStorage = (tasks) => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
};

/**
 * Recupera as tarefas salvas no LocalStorage.
 *
 * @returns {Array<Object>}
 * Retorna um array vazio caso não exista nada salvo.
 */
const getTasksFromLocalStorage = () => {
    const localTasks = JSON.parse(window.localStorage.getItem('tasks'));
    return localTasks ? localTasks : [];
};

/**
 * Atualiza o indicador visual de progresso das tarefas.
 * Exemplo de exibição: "2/5 concluídas"
 *
 * @param {Array<Object>} tasks
 */
const renderTasksProgressData = (tasks) => {
    let tasksProgress;
    const tasksProgressDOM = document.getElementById('tasks-progress');

    // Cria o elemento de progresso caso ainda não exista
    if (tasksProgressDOM) {
        tasksProgress = tasksProgressDOM;
    } else {
        const newTasksProgressDOM = document.createElement('div');
        newTasksProgressDOM.id = 'tasks-progress';
        document.getElementById('todo-footer').appendChild(newTasksProgressDOM);
        tasksProgress = newTasksProgressDOM;
    }

    const doneTasks = tasks.filter(({ checked }) => checked).length;
    const totalTasks = tasks.length;

    tasksProgress.textContent = `${doneTasks}/${totalTasks} concluídas`;
};

/* =========================================================
 * CHECKBOX — MARCAR / DESMARCAR TAREFAS
 * =========================================================
 */

/**
 * Handler disparado ao marcar ou desmarcar um checkbox.
 *
 * Responsabilidade:
 * - Atualizar apenas a tarefa correspondente no LocalStorage
 *
 * @param {Event} event
 */
const onCheckboxClick = (event) => {
    /**
     * O ID do checkbox segue o padrão:
     * "ID-checkbox"
     * Exemplo: "3-checkbox"
     */
    const id = event.target.id.split('-')[0];

    const tasks = getTasksFromLocalStorage();

    const updatedTasks = tasks.map(task =>
        parseInt(id) === task.id
            ? { ...task, checked: event.target.checked }
            : task
    );

    setTasksInLocalStorage(updatedTasks);
    renderTasksProgressData(updatedTasks);
};

/* =========================================================
 * REMOÇÃO DE TAREFAS
 * =========================================================
 */

/**
 * Remove todas as tarefas concluídas.
 *
 * Responsabilidades:
 * - Atualizar o LocalStorage
 * - Remover os elementos correspondentes do DOM
 */
const removeDoneTaks = () => {
    const tasks = getTasksFromLocalStorage();

    const tasksToRemove = tasks.filter(task => task.checked);
    const idsToRemove = tasksToRemove.map(task => task.id);

    const updatedTasks = tasks.filter(task => !task.checked);

    setTasksInLocalStorage(updatedTasks);
    renderTasksProgressData(updatedTasks);

    idsToRemove.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.remove();
    });
};

/**
 * Remove uma única tarefa pelo ID.
 *
 * @param {number} taskId
 */
const removeTask = (taskId) => {
    const tasks = getTasksFromLocalStorage();

    const updatedTasks = tasks.filter(
        ({ id }) => parseInt(id) !== parseInt(taskId)
    );

    setTasksInLocalStorage(updatedTasks);
    renderTasksProgressData(updatedTasks);

    document
        .getElementById('toDo-list-section')
        .removeChild(document.getElementById(taskId));
};

/* =========================================================
 * CRIAÇÃO DE ELEMENTOS VISUAIS (DOM)
 * =========================================================
 */

/**
 * Cria o bloco visual contendo:
 * - Checkbox
 * - Label com a descrição da tarefa
 *
 * @param {Object} task
 * @returns {HTMLDivElement}
 */
const getCheckBoxInputs = ({ id, desc, checked }) => {
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');

    const checkBoxId = `${id}-checkbox`;

    checkBox.type = 'checkbox';
    checkBox.id = checkBoxId;
    checkBox.checked = checked || false;

    checkBox.addEventListener('change', onCheckboxClick);

    label.textContent = desc;
    label.htmlFor = checkBoxId;

    wrapper.className = 'checkbox-label-container';
    wrapper.appendChild(checkBox);
    wrapper.appendChild(label);

    return wrapper;
};

/**
 * Cria o elemento <li> que representa uma tarefa na lista.
 *
 * @param {Object} task
 * @param {HTMLElement} checkbox
 * @returns {HTMLLIElement}
 */
const createTaskListItem = (task, checkbox) => {
    const list = document.getElementById('toDo-list-section');
    const toDo = document.createElement('li');

    const removeTaskButton = document.createElement('button');
    removeTaskButton.textContent = 'X';
    removeTaskButton.ariaLabel = 'Remover Tarefa';
    removeTaskButton.onclick = () => removeTask(task.id);

    toDo.id = task.id;
    toDo.appendChild(checkbox);
    toDo.appendChild(removeTaskButton);

    list.appendChild(toDo);
    return toDo;
};

/* =========================================================
 * CRIAÇÃO DE NOVAS TAREFAS
 * =========================================================
 */

/**
 * Gera um novo ID incremental.
 *
 * @returns {number}
 */
const getNewTaskId = () => {
    const tasks = getTasksFromLocalStorage();
    const lastId = tasks[tasks.length - 1]?.id;
    return lastId ? lastId + 1 : 1;
};

/**
 * Extrai os dados do formulário e cria o objeto da tarefa.
 *
 * @param {Event} event
 * @returns {Object}
 */
const getNewTaskData = (event) => {
    const desc = event.target.elements.desc.value;
    const id = getNewTaskId();

    return { desc, id, checked: false };
};

/**
 * Simula a criação de uma tarefa de forma assíncrona.
 *
 * @param {Event} event
 * @returns {Promise<Object>}
 */
const getCreatedTaskInfo = (event) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getNewTaskData(event));
        }, 1000);
    });
};

/**
 * Handler do submit do formulário de criação de tarefas.
 *
 * @param {Event} event
 */
const createTask = async (event) => {
    event.preventDefault();

    const saveButton = document.getElementById('save-task');
    saveButton.setAttribute('disabled', true);

    const newTaskData = await getCreatedTaskInfo(event);

    const checkBox = getCheckBoxInputs(newTaskData);
    createTaskListItem(newTaskData, checkBox);

    const tasks = getTasksFromLocalStorage();
    const updatedTasks = [...tasks, newTaskData];

    setTasksInLocalStorage(updatedTasks);
    renderTasksProgressData(updatedTasks);

    saveButton.removeAttribute('disabled');
    event.target.reset();
};

/* =========================================================
 * INICIALIZAÇÃO DA APLICAÇÃO
 * =========================================================
 */

/**
 * Executado ao carregar a página.
 * - Configura eventos
 * - Renderiza tarefas persistidas
 */
window.onload = function () {
    const form = document.getElementById('create-todo-form');
    form.addEventListener('submit', createTask);

    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => {
        const checkBox = getCheckBoxInputs(task);
        createTaskListItem(task, checkBox);
    });

    renderTasksProgressData(tasks);
};
