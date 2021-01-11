import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";

class TodoService {
  async getTodos() {
    let res = await api.get("chase/todos");
    ProxyState.todos = res.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    ProxyState.todos = [...ProxyState.todos, new Todo(todo)]
    let res = await api.post("chase/todos", todo);
  }

  async toggleTodoStatus(todoId) {

    let todoIndex = await ProxyState.todos.findIndex(todo => todo.id == todoId);
    let toggle = true
    if (ProxyState.todos[todoIndex].completed) {
      toggle = false
    }
    ProxyState.todos[todoIndex].completed = toggle
    let todo = ProxyState.todos[todoIndex]
    ProxyState.todos = [...ProxyState.todos,]
    let res = await api.put("chase/todos/" + todoId, todo);
  }

  removeTodo(todoId) {
    ProxyState.todos = ProxyState.todos.filter(t => t.localId != todoId)
  }
  async removeTodoComm(id) {
    await api.delete("chase/todos/" + id)
  }

}

const todoService = new TodoService();
export default todoService;