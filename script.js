const input = document.getElementById('taskInput');
const status = document.getElementById('taskStatus');
const adding = document.getElementById('add');
const deleting=document.getElementById('dlt');
const lists = document.getElementById('taskList');

let taskList =[];
function render(){
    lists.innerHTML = '';
    taskList.forEach((task, index)=>{
        const listItem = document.createElement('li');
        listItem.innerHTML = `${task.taskname} - ${task.taskstatus} <button class='delet' onClick='deleteTask(${index})'>Delete</button>`;
        lists.appendChild(listItem);
    });
}

adding.addEventListener('click',()=>{
    taskList.unshift({taskname:taskInput.value, taskstatus:taskStatus.value});
    render();

    taskInput.value='';
    taskStatus.value='Completed';
});

deleting.addEventListener('click', ()=>{
    taskList = [];
    render();
});

window.deleteTask = (index)=>{
    taskList.splice(index, 1);
    render();
};
