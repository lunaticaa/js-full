const todoList = [
  { name: "thetrhrth", dueDate: "2025-9-12" },
  {
    name: "ergr drgsg",
    dueDate: "2025-9-12",
  },
];
renderTodoList();
function renderTodoList() {
  let todolistHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button class="delete-todo-button" onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    ">Delete</button>
    
    `;
    todolistHTML += html;
  }
  console.log(todolistHTML);
  document.querySelector(".js-todo-list").innerHTML = todolistHTML;
}
function addTodo() {
  const inputElement = document.querySelector(".js-name");
  const dateElement = document.querySelector(".js-due-date-input");
  const dueDate = dateElement.value;
  const name = inputElement.value;
  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });
  inputElement.value = "";
  renderTodoList();
}
