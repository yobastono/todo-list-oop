import Todo from "./todo.js";

export default class TodosView {
    static todos = [];
    static listTodoContainer = document.querySelector('.list-todo-container');

    static addTodo(todo) {
        TodosView.listTodoContainer.appendChild(todo.ui);
    }

    static loadTodos() {
        window.onload = function() {
            Object.keys(localStorage).forEach(key => {
                TodosView.addTodo(new Todo(localStorage.getItem(key)));
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

 
}