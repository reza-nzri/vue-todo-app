import TaskClass from '@/classes/TaskClass'
import { todos } from '@/data/TodoData'

export default class TaskModel {
  private tasks: TaskClass[]

  constructor() {
    // Initialisiere die Aufgabenliste mit Beispieldaten
    this.tasks = todos.map(
      (todo) =>
        new TaskClass(
          todo.id,
          todo.name,
          todo.description,
          todo.dueDateTime,
          todo.priority,
          todo.completed
        )
    )
  }

  // CRUD-Operationen

  // Create
  addTask(task: TaskClass) {
    this.tasks.push(task)
  }

  // Read
  getTasks() {
    return this.tasks
  }

  getTaskById(id: number) {
    return this.tasks.find((task) => task.id === id)
  }

  // Update
  updateTask(id: number, updatedTask: Partial<TaskClass>) {
    const task = this.getTaskById(id)
    if (task) {
      Object.assign(task, updatedTask)
    }
  }

  // Delete
  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
}
