export default class TodosView {
    static todos = [];
    static listTodoContainer = document.querySelector('.list-todo-container');
    constructor() {

    }

    // static todosView () {
    //     this.todos.push(todo);
    // }

    // addTodo(todo) {
    //     this.displayTodo(todo); // UI
    // }

    // displayTodo(todo) {
        
    //     this.todoFormAppendChildren();
    //     this.checkDate();
    //         // localStorage.setItem(this.id, this.todoInputField.value.toString());
    //         // console.log(localStorage.getItem(this.id));
    //         // window.sessionsStorage.getItem(this.id - 1);  
    //         this.savedTodos = [];
    //         // Assigning listeners
    //     this.deleteBtn = this.buttons[0];
    //     this.editBtn = this.buttons[1];
    //     this.deleteTodo();
    //     this.editTodo(); 
    // }


    static addTodo(todo) {
        TodosView.listTodoContainer.appendChild(todo);
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