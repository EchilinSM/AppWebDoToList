#Funçoes de manipulaçao de tarefas
import json


def load_tasks_from_file():
    try:
        with open('tasks.json', 'r') as file:
            data = json.load(file)
            return data.get("task", []), data.get("theme", "light") #light é o tema padrao
    except FileExistsError:
       return [], "light"