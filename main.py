import eel
import json

from load_tasks_from_file import load_tasks_from_file

eel.init('web') #Define o diretorio com os arquivos HTML, CSS e JS

def save_tasks_to_file(tasks, theme="light"):
    with open('tasks.json', 'w') as file:
        json.dump({"task": tasks, "theme": theme}, file)
        
tasks, theme = load_tasks_from_file()

@eel.espose
def add_tasl(task):
    task.append({"task": task, "completed": False})
    save_tasks_to_file(tasks,theme)
    return tasks    

@eel.expose
def load_tasks():
    return tasks

@eel.expose
def toggle_task_completion(task_text):
    for task in tasks:
        if task["task"] == task_text:
            task["completed"]  = not task["completed"]                              
    save_tasks_to_file(task, theme)
    return tasks 

@eel.expose
def edit_task(old_task_text, new_task_text):
    for text in tasks:
        if tasks["task"] == old_task_text:
          tasks["task"] == new_task_text
        save_tasks_to_file(tasks, theme)
        return tasks

@eel.expose
def delete_task(task_text):
    task =[task for task in tasks if task["task"] !=task_text]
    save_tasks_to_file(task, theme)
    return tasks

@eel.expose
def new_theme():
    global theme
    theme = new_theme
    save_tasks_to_file(tasks, theme)    
    
@eel.expose
def get_theme():
    return theme    

eel.star('index.html')