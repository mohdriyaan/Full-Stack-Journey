const todoList = JSON.parse(localStorage.getItem("todoList")) || []

function renderToDo() {
  let toDoListHTML = ""
  todoList.forEach((todoObject,index)=>{
    const { name, dueDate } = todoObject
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div> 
      <button class="remove-btn">Delete</button>`
    toDoListHTML += html
  });
  document.querySelector(".todos-result").innerHTML = `${toDoListHTML}`

  document.querySelectorAll(".remove-btn").forEach((deleteBtn,index)=>{
    deleteBtn.addEventListener("click",()=>{
      removeToDo(index)
    })
  })
  
}

function removeToDo(index){
  todoList.splice(index,1);
  localStorage.setItem ('todoList', JSON.stringify(todoList))
  renderToDo();
}

document.querySelector(".add-btn").addEventListener("click",()=>{
  addTodo()
})


function addTodo() {
  const todoName = document.querySelector(".js-name-input").value
  const todoDueDate = document.querySelector(".js-date-input").value
  todoList.push({ name: todoName, dueDate: todoDueDate })
  localStorage.setItem("todoList", JSON.stringify(todoList))
  // console.log(todoList)
  document.querySelector(".js-name-input").value = ""
  document.querySelector(".js-date-input").value = ""
  renderToDo()
}

