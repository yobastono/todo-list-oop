import TodosView from './todos-view.js';
import  Todo  from "./todo.js";

export default class InputMask {

    constructor() {
        this.inputField = document.querySelector('.write-todo');
        this.addTodoBtn = document.querySelector('.btn-add-todo');
        this.deleteAllBtn = document.querySelector('.btn-delete-all');

        // Event listeners
        this.addTodo();
        this.deleteAllTodos();
        
    }

    addTodo() {
        this.addTodoBtn.addEventListener('click', e => {
            // Set initial id in local storage
            this.todo = new Todo(this.inputField.value);
            TodosView.addTodo(this.todo.ui);
            TodosView.checkDate();
            this.addToLocalStorage();
            this.inputField.value = ""; // clearing inputfield
            
        });            
    }

    deleteAllTodos() {
        this.deleteAllBtn.addEventListener('click', e => {
            Todo.pseudoDayCounter = 8;
            while ( TodosView.listTodoContainer.firstElementChild ) {
                TodosView.listTodoContainer.firstElementChild.remove();
            }
        });
    }

    addToLocalStorage() {
        localStorage.setItem(this.todo.basicInfo.id, this.todo.basicInfo.value);
        // console.log(localStorage.getItem(this.id));
        // window.sessionsStorage.getItem(this.id - 1);  
    }



}