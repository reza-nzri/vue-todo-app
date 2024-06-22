export default class TaskClass {
  id: number
  name: string
  description: string
  dueDateTime: string
  priority: 'low' | 'medium' | 'high'
  completed: boolean

  constructor(
    id: number,
    name: string,
    description: string,
    dueDateTime: string,
    priority: 'low' | 'medium' | 'high',
    completed: boolean
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.dueDateTime = dueDateTime
    this.priority = priority
    this.completed = completed
  }

  complete() {
    this.completed = true
  }

  changePriority(newPriority: 'low' | 'medium' | 'high') {
    this.priority = newPriority
  }
}
