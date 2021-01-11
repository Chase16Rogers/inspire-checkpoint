import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

function _drawTodos() {
  let template = ""
  ProxyState.todos.forEach(t => template += t.Template)
  document.getElementById("todo").innerHTML = template
  document.getElementById("left").innerText = ProxyState.todos.length
  let checked = 0
  ProxyState.todos.forEach(t => {
    if (t.completed) { checked++ }
    console.log(ProxyState.todos)
  })
  document.getElementById("complete").innerText = checked
}
export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTodos)
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo() {
    window.event.preventDefault();
    var form = window.event.target
    let todo = {
      description: form['task'].value
    };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
    form.reset()
  }

  toggleTodoStatus(todoId) {
    console.log("it got here")
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  removeTodo(localId, id) {
    todoService.removeTodo(localId);
    try {
      todoService.removeTodoComm(id)
    } catch (error) {
      console.error(error)
    }
  }
}