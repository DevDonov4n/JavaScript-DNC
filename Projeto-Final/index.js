let tasks = [
    {id: 1, desc: 'estudar', checked: false},
    {id: 2, desc: 'ir na academia', checked: false},
    {id: 3, desc: 'beber agua', checked: true},
];

const getCheckBoxInputs = ({id, desc}) => {
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkBoxId = `${id}-checkbox`;

    checkBox.type = 'checkbox';
    checkBox.id = checkBoxId;
    checkBox.checked = tasks.checked;

    label.textContent = desc;
    label.htmlFor = checkBoxId;

    wrapper.className = "checkbox-label-container";
    wrapper.appendChild(checkBox);
    wrapper.appendChild(label)

    return wrapper
}

window.onload = function(){
    tasks.forEach((tasks) => {
        const checkBox = getCheckBoxInputs(tasks);
        
        const list = document.getElementById('toDo-list-section');
        const toDo = document.createElement('li');

        toDo.textContent = tasks.desc;
        toDo.appendChild(checkBox);
        list.appendChild(toDo);
    })
}