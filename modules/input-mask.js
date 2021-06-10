import TodosView from "./todos-view.js";
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
            TodosView.addTodo(this.todo);



            TodosView.checkDate();
            // localStorage.setItem(this.id, this.inputField.value.toString());
            // console.log(localStorage.getItem(this.id));
            // window.sessionsStorage.getItem(this.id - 1);  
            this.inputField.value = ""; // clearing inputfield

            // Assigning listeners TODO THIS
            // this.deleteBtn = this.buttons[0];
            // this.editBtn = this.buttons[1];
            // this.todo.deleteTodo();
            // this.todo.editTodo(); 
        });            
    }

    getInput() {
        return this.inputField.value;
    }

    deleteAllTodos() {
        this.deleteAllBtn.addEventListener('click', e => {
            Todo.pseudoDayCounter = 8;
            while ( TodosView.listTodoContainer.firstElementChild ) {
                TodosView.listTodoContainer.firstElementChild.remove();
            }
        });
    }



}