import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

interface Task {
  id: string;
  subject: string;
  description: string;
  dueDateTime: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  openDisplay: boolean;
}

let dummyTasks: Task[] = [];
if (import.meta.env.VITE_APP_ENV === 'development') {
  const taskModule = await import('/public/dummyTasks.json');
  dummyTasks = taskModule.default as Task[];
}

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: useLocalStorage<Task[]>('tasks', dummyTasks),
  }),
  actions: {
    addTask() {
      const newTask: Task = {
        id: this.generateUniqueId(),
        subject: '',
        description: '',
        dueDateTime: '',
        priority: 'medium',
        completed: false,
        openDisplay: true,
      };
      this.tasks.push(newTask);
    },
    removeTask(taskId: string) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
    updateTask(updatedTask: Task) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
      }
    },
    toggleCompleted(task: Task) {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        this.tasks[index].completed = !this.tasks[index].completed;
      }
    },
    openTaskDetails(task: Task) {
      this.tasks.forEach((t) => {
        if (t.id === task.id) {
          t.openDisplay = true;
        } else {
          t.openDisplay = false;
        }
      });
    },
    generateUniqueId(): string {
      return (this.tasks.length + 1).toString();
    },
    calculateDueDateTime(): string {
      const now = new Date();
      now.setMinutes(now.getMinutes() + 5);
      return now
        .toLocaleString('en-GB', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
        .replace(',', ' -');
    },
    updateDueDate(taskId: string, newDueDate: string) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        task.dueDateTime = newDueDate;
      }
    },
    updateSubject(taskId: string, newSubject: string) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        task.subject = newSubject;
      }
    },
    updateTaskDescription(taskId: string, newDescription: string) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        task.description = newDescription;
      }
    },
  },
  getters: {
    openTasks: (state) => state.tasks.filter((task) => !task.completed),
    doneTasks: (state) => state.tasks.filter((task) => task.completed),
    openDisplayTask: (state) => state.tasks.filter((task) => task.openDisplay),
  },
});
