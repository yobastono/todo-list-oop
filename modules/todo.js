export default class Todo {
    static pseudoDayCounter = 9;
    static id = 0;

    constructor(value, id) {  
        // Mocking the days of the month for css highlight when day matches
        // Unique id for the todo
        this.basicInfo = {
            id: id,
            value: value
        }

        // this.basicInfo['id'] = this.setId(id);
        // if (localStorage.getItem("id") !== null) {
            
        // }
        // localStorage.setItem("id", this.id);
        this.form = this.createFormContainer();
        this.div = this.createDivContainer();
        this.labelDate = this.createDate();
        this.createdTodoInput = this.createEditableTodo();
        this.todoButtons = this.createButtons();

        this.form.appendChild(this.div);
        this.div.appendChild(this.labelDate);
        this.div.appendChild(this.createdTodoInput);
        this.deleteBtn = this.todoButtons[0];
        this.editBtn = this.todoButtons[1];
        this.div.appendChild(this.deleteBtn);
        this.div.appendChild(this.editBtn);

        // Add listeners
        this.deleteTodo();
        this.editTodo();

    }


    //     if (id) return id;
    //     else return Todo.id;
    // }

    // getters and eventually setters
    get getValue() {
        return this.basicInfo.value;
    }


// -----------------------------private methods----------------------------- // 
    
    createFormContainer() {
        // Create form
        let form = document.createElement('form');
        form.classList.add('row', 'g2', 'single-item');
        return form;
    }

    createDivContainer() {
        let div = document.createElement('div');
        div.classList.add('col-auto');
        return div;
    }

    createDate() {
        // Create Date
        let labelDate = document.createElement('span');
        labelDate.classList.add('.input-group-addon');
        let date = new Date(2021, 6, Todo.pseudoDayCounter);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        // mocking days
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        let dateShort = day + "-" + month + "-" + year;
        labelDate.textContent = dateShort;
        Todo.pseudoDayCounter++; // increase counter for the next todo
        return labelDate;
    }

    createEditableTodo() {
        // Input field that I can edit
        let createdTodoInput = document.createElement('input');
        createdTodoInput.setAttribute('type', 'text');
        createdTodoInput.readOnly = true; // It's not editable at this point
        createdTodoInput.value = this.basicInfo.value;
        return createdTodoInput;
    }

    createButtons() {
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger');
        deleteBtn.textContent = "Delete";
        deleteBtn.type = 'button';
        
        let editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-warning');
        editBtn.textContent = "Edit";
        editBtn.type = 'button';
        let buttons = [];
        buttons.push(deleteBtn, editBtn);
        return buttons;
    }

    editTodo() {
        this.editBtn.addEventListener('click', e => {
            e.target.parentNode.children[1].readOnly = false;
            console.log("You can edit now.");
            this.toggleEditConfirm(e);
        });
    }

    deleteTodo() {
        this.deleteBtn.addEventListener('click', e => {
            e.target.parentNode.parentNode.remove();
        });
    }

    toggleEditConfirm(e) {
        this.saveBtn = document.createElement('button');
        this.saveBtn.classList.add('btn', 'btn-success');
        this.saveBtn.type = 'button';
        this.saveBtn.textContent = "Save";
        this.editBtn = e.target; // Since this.editBtn is always the last created and we want maybe to edit a todo in the middle
        this.editBtn.insertAdjacentElement('beforebegin', this.saveBtn);
        this.editBtn.classList.add('hidden');
        this.saveBtn.addEventListener('click', e => {
            e.target.parentNode.children[1].readOnly = true;
            console.log('Todo edited and saved');
            this.editBtn.classList.remove('hidden');
            this.saveBtn.classList.add('hidden');
        });
    }

//     displayTodos() {
//         window.addEventListener('load', e => {
//             console.log("Adding local storage items to display");
//             for (item in window.localStorage) {
//                 this.addTodo(localStorage.getItem(item));
//             }    
//         });
//     }
}