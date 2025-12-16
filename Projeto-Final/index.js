let tasks = [
    {id: undefined, desc: 'Tarefa exemplar', checked: true},
];


const removeTask = (taskId) => {
    tasks = tasks.filter(({ id }) => parseInt(id) !== parseInt(taskId));

    document
        .getElementById('toDo-list-section')
        .removeChild(document.getElementById(taskId));
}

const getCheckBoxInputs = ({id, desc, checked}) => {
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkBoxId = `${id}-checkbox`;

    checkBox.type = 'checkbox';
    checkBox.id = checkBoxId;
    checkBox.checked = checked || false;

    label.textContent = desc;
    label.htmlFor = checkBoxId;

    wrapper.className = "checkbox-label-container";
    
    wrapper.appendChild(checkBox);
    wrapper.appendChild(label)

    return wrapper
}

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
}

const getNewTaskId = () => {
    const lastId = tasks[tasks.length - 1 ]?.id
    return lastId ? lastId + 1 : 1;
}

const getNewTaskData = (event) => {
    const desc = event.target.elements.desc.value;
    const id = getNewTaskId();

    return { desc, id}
}

const createTask = (event) => {
    event.preventDefault();
    
    const newTaskData = getNewTaskData(event);
    //const {id, description} = newTaskData;

    const checkBox = getCheckBoxInputs(newTaskData)
    createTaskListItem(newTaskData,checkBox);

    tasks = [...tasks, newTaskData];

    event.target.reset();
}
window.onload = function(){

    const form = document.getElementById('create-todo-form');
    form.addEventListener('submit', createTask);

    tasks.forEach((task) => {
    const checkBox = getCheckBoxInputs(task);
    createTaskListItem(task, checkBox);
});

}