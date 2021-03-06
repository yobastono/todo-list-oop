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
            this.addListener();
        });
        
        this.inputField.addEventListener('keyup', e => {
            if (e.keyCode === 13) this.addListener();
        });            
    }

    addListener() {
        this.todo = new Todo(this.inputField.value, TodosView.maxId);
        TodosView.addTodo(this.todo);
        TodosView.checkDate();
        this.addToLocalStorage();
        this.inputField.value = "";
    }


    deleteAllTodos() {
        this.deleteAllBtn.addEventListener('click', e => {
            Todo.pseudoDayCounter = 8;
            while ( TodosView.listTodoContainer.firstElementChild ) {
                let nodeId = TodosView.
                                listTodoContainer.
                                firstElementChild.getAttribute('id');
                localStorage.removeItem(nodeId);
                TodosView.listTodoContainer.firstElementChild.remove();

            }
            // not using this because in the future other data could be saved into localStorage
            // localStorage.clear();
        });
    }

    addToLocalStorage() {
        localStorage.setItem(this.todo.basicInfo.id, this.todo.basicInfo.value);
        // console.log(localStorage.getItem(this.id));
        // window.sessionsStorage.getItem(this.id - 1);  
    }



}