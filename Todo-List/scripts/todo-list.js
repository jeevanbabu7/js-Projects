const todoList = JSON.parse(localStorage.getItem('todolist'));
renderTodoList();

function renderTodoList(){
  let todoListHTML = ' ';
  for(let i = 0;i<todoList.length;++i) {
    const {name , dueDate} = todoList[i];
    todoListHTML += `
      
      <div>${i+1}.${name}</div>
      <div> ${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1);
        storeTodo();
        renderTodoList();
      " class = "todo-delete-btn">Delete</button>
    `;
  }
  document.querySelector('.js-todoListHtml').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElem = document.querySelector('.js-input');
  const dateInput = document.querySelector('.js-due-dateinput');

  const name = inputElem.value;
  const dueDate = dateInput.value;
  if(name != '' && dueDate != '') todoList.push({name,dueDate});
  else alert("Name or date is invalid");
  inputElem.value = '';
  dateInput.value = '';

  storeTodo();
  renderTodoList();
}

function storeTodo() {
  localStorage.setItem('todolist',JSON.stringify(todoList));
}
