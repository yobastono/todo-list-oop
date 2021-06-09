export default class Todo {

    constructor(value) {  
        // Mocking the days of the month for css highlight when day matches
        this.pseudoDayCounter = 1;
        // Unique id for the todo
        this.id = 0;
        // Value declaration: this will be set throught the listener in the i-mask
        this.value = value;
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
        this.div.appendChild(this.todoButtons[0]);
        this.div.appendChild(this.todoButtons[1]);
        return this.form;
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
        let date = new Date(2021, 6, this.pseudoDayCounter);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        this.pseudoDayCounter++; // mocking days
        let dateShort = day + "-" + month + "-" + year;
        labelDate.textContent = dateShort;
        return labelDate;
    }

    createEditableTodo() {
        // Input field that I can edit
        let createdTodoInput = document.createElement('input');
        createdTodoInput.setAttribute('type', 'text');
        createdTodoInput.readOnly = true; // It's not editable at this point
        createdTodoInput.value = this.value;
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


    

    toggleEditConfirm(e) {
        this.saveBtn = document.createElement('button');
        this.saveBtn.classList.add('btn', 'btn-success');
        this.saveBtn.type = 'button';
        this.saveBtn.textContent = "Save";
        this.editBtn = e.target;
        this.editBtn.insertAdjacentElement('beforebegin', this.saveBtn);
        this.editBtn.classList.add('hidden');
        this.saveBtn.addEventListener('click', (e) => {
            e.target.parentNode.children[0].readOnly = true;
            console.log('Todo edited and saved');
            this.editBtn.classList.remove('hidden');
            this.saveBtn.classList.add('hidden');
        });
    }

    editTodo() {
        this.editBtn.addEventListener('click', e => {
            e.target.parentNode.children[0].readOnly = false;
            console.log("You can edit now.");
            this.toggleEditConfirm(e);
        });
    }

    deleteTodo() {
        this.deleteBtn.addEventListener('click', e => {
            let targetElement = e.target.parentNode.parentNode;
            targetElement.parentNode.removeChild(targetElement);
        });
    }

    // // Setter and eventually getter
    // set value(value) {
    //     this.value = value;
    // }

//     displayTodos() {
//         window.addEventListener('load', e => {
//             console.log("Adding local storage items to display");
//             for (item in window.localStorage) {
//                 this.addTodo(localStorage.getItem(item));
//             }    
//         });
//     }
}