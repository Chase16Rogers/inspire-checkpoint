import { generateId } from "../Utils/GenerateId.js"

export default class Todo {
  constructor({ _id, description, completed }) {
    this.id = _id
    this.description = description
    this.completed = completed || false
    this.localId = generateId()

  }


  get Template() {
    return /*html*/`
    <div class=" d-flex justify-content-between align-items-center">
    <p class="mb-1">${this.CheckBox} ${this.description} </p>
    <i onclick="app.todoController.removeTodo('${this.localId}', '${this.id}')" class="fa fa-trash cursor-pointer text-danger" aria-hidden="true"></i>
    </div>
    `
  }


  get CheckBox() {
    if (this.completed) {
      return `<i onclick="app.todoController.toggleTodoStatus('${this.id}')" class="fa fa-check-square-o cursor-pointer" aria-hidden="true"></i>`
    } else {
      return `<i onclick="app.todoController.toggleTodoStatus('${this.id}')" class="fa fa-square-o cursor-pointer" aria-hidden="true"></i>`
    }
  }

}