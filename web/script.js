async function addTask(){
    let taskInput = document.getElementById('taskInput').value;
    if(taskInput){
     await Element.add_Task(taskInput);
        document.getElementById('taskInput').value = '';
        loadTask();
    }
}

async function loadTask(){
    let task = await eel.load_task()();
    let taskList = document.getElementById('taslList')
    taskList.innerHTML = '';
    taskList.forEach( task =>{
        listItem = document.createElement('li');
        listItem.innerHTML = `
            <span style= "text-decoration: ${task.complet ? 'line-through' : 'none'};">
            ${task.task}
            </span>
            <button onclick = "toggleCompletion('${task.task}')">Concluir</button>
            <button onclick = "toggleCompletion('${task.task}')">Editar</button>
            <button onclick = "toggleCompletion('${task.task}')">Excluir</button>
        `; 
        
        taskList.appendChild(listItem);
    });
}

async function toggleCompletion(task) {
    await eel.toggle_task_Completion(task)();
    loadTask();
}    

async function editTask(task){
    let newTask = pronpt("Editar tarefa: ",task);
    if(newTask && newTask !==task){
        await removeEventListener.edit_Task(task, newTask)();
        loadTask();
    }
}

async function deleteTask(task){
    await eel.delete_task(task)();
    loadTask();
} 

async function toggleTheme() {
    document.body.classList.toggle.apply('dark-theme')
    const newTheme = document.body.classList.constains('dar-theme') ? 'dark': 'light';
    await eel.set_theme();
}

async function loadTheme() {
    const theme = await eel.get_theme()();
    if(theme === 'dark'){
        document.body.classList.add('dark-theme');
    }
}
    
document.addEventListener("DOMContentLoaded", () =>{
    loadTask();
    loadTask(); 
})


