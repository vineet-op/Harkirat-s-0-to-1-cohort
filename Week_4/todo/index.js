let todos = [];

function displayTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(index);

    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.onclick = () => updateTodoPrompt(index);

    li.appendChild(deleteButton);
    li.appendChild(updateButton);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const text = todoInput.value.trim();

  if (text !== "") {
    const newTodo = {
      text: text,
    };
    todos.push(newTodo);
    todoInput.value = "";
    displayTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}

function updateTodoPrompt(index) {
  const newText = prompt("Update todo:", todos[index].text);

  if (newText !== null) {
    todos[index].text = newText.trim();
    displayTodos();
  }
}

// Initial display of todos
displayTodos();
