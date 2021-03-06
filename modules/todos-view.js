import Todo from "./todo.js";

export default class TodosView {
    static todos = [];
    static listTodoContainer = document.querySelector('.list-todo-container');
    static listTodoContainerProgress = document.querySelector('.list-todo-container-progress');
    static listTodoContainerEnded = document.querySelector('.list-todo-container-ended');
    static maxId = 0;

    static addTodo(todo) {
        TodosView.listTodoContainer.appendChild(todo.form);
        todo.form.setAttribute('id', TodosView.maxId);
        TodosView.maxId++;
        TodosView.dragTodo();
    }

    static loadTodos() {
        window.onload = function() {
            Object.keys(localStorage).sort().forEach(key => {
                TodosView.maxId = parseInt(key);
                TodosView.addTodo(new Todo(localStorage.getItem(key), parseInt(key)));
                TodosView.checkDate();
                console.log(localStorage.getItem(key));
            });
        }
    }
    

    static checkDate() {
        // Assigning CSS-Colour when day of todo is today: iterating list of todos
        let today = new Date().getDate();
        let todos = document.getElementsByClassName('.input-group-addon');
        let myRe = /^(\d+)-/g;
        for (let i = 0; i < todos.length; i++) {
            let textContentDay = todos[i].textContent;
            let extractedDay = myRe.exec(textContentDay)[1]
            if (parseInt(extractedDay) === today) {
                todos[i].parentNode.classList.add('today');
            }
            myRe.lastIndex = 0; // Necessary because exec global object? So reset
        } 
    }


    static dragTodo() {
        TodosView.listTodoContainerProgress.addEventListener('dragover', evt => {
            evt.preventDefault();
        });

        TodosView.listTodoContainerProgress.addEventListener('drop', evt => {
            evt.preventDefault();
            let data = evt.dataTransfer.getData("text");
            evt.target.style.color = 'green';
            evt.target.appendChild(document.getElementById(data));
        });
        }
    }

