const adding = document.getElementById('add');
const deleting = document.getElementById('dlt');
const lists = document.getElementById('taskList');

let taskList = [];
function render(){
    lists.innerHTML= '';
    taskList.forEach((task, index)=>{
        const listItem = document.createElement('li');
        listItem.innerHTML = `${task.taskname} - ${task.status} <button class='dltt' onClick='deleteTask(${index})'>Delete</button>`;
        lists.appendChild(listItem);
    });
}
adding.addEventListener('click', ()=>{
    const taskInput= document.getElementById('taskInput');
    const taskStatus = document.getElementById('taskStatus');
    taskList.unshift({taskname:taskInput.value, status:taskStatus.value});
    render();
    taskInput.value='';
    taskStatus.value= 'Completed';
});

deleting.addEventListener('click', ()=>{
   taskList=[];
   render(); 
});
window.deleteTask = (index)=>{
    taskList.splice(index, 1);
    render();
};
