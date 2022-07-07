window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodoForm = document.querySelector('#todo_form');



newTodoForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = {
        content: e.target.elements.content.value,
        done: false,
        createdAt: new Date().getTime()
    }

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
    e.target.reset();
    DisplayTodos();

})
//completed

const completeButton = document.createElement('button');
completeButton.addEventListener('click', e => {
          
    // todos = todos.filter(c => c === todo.done)
    localStorage.getItem('todos', JSON.stringify(todos));
    if (todo.done) {
        todoItem.classList.add('done');
    } else {
        todoItem.classList.remove('done');
    }
    DisplayTodos();
})
//all
const allButton = document.createElement('button');
allButton.addEventListener('click', e => {
          
    todos = todos.filter(a => a === todo)
    localStorage.getItem('todos', JSON.stringify(todos));
    DisplayTodos();
})
//active
const activeButton = document.createElement('button');
activeButton.addEventListener('click', e => {
          
    todos = todos.filter(v => v != todo.done)
    localStorage.getItem('todos', JSON.stringify(todos));
    DisplayTodos();
})


    DisplayTodos();

})

function DisplayTodos() {
    const todoList = document.querySelector('#todo_list');

    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo_item')

        const label = document.createElement('label');
        const input = document.createElement('input');
        const content = document.createElement('div');
        const actions = document.createElement('div');
        // const completeButton = document.createElement('button');
        const deleteButton = document.createElement('button');


        input.type = 'checkbox';
        input.checked = todo.done;

        content.classList.add('todo_content');
        actions.classList.add('actions');
        // completeButton.classList.add('edit');
        deleteButton.classList.add('delete');

        content.innerHTML = `<input type="text" value=${todo.content}
        readonly>`;
        // completeButton.innerHTML ='Completed';
        deleteButton.innerHTML ='Delete';

        label.appendChild(input);
        // actions.appendChild(completeButton);
        actions.appendChild(deleteButton);
        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);

        todoList.appendChild(todoItem);
        //mark done
        if (todo.done) {
            todoItem.classList.add('done');

        }
        
        input.addEventListener('click', e => {
            todo.done = e.target.checked;
            localStorage.setItem('todos', JSON.stringify(todos));

            if (todo.done) {
                todoItem.classList.add('done');
            } else {
                todoItem.classList.remove('done');
            }
            DisplayTodos();
        })

        /* //completed
        completeButton.addEventListener('click', e => {
            
                todos = todos.filter(c => c != todo)
                localStorage.setItem('todos', JSON.stringify(todos));
                DisplayTodos();
            }) */
        

        //delete
        deleteButton.addEventListener('click', e => {
            todos = todos.filter(t => t != todo);
            localStorage.setItem('todo', JSON.stringify(todos));
            DisplayTodos();
        })

    })
    
}