import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

interface Task {
  id: string;
  subject: string;
  description: string;
  dueDateTime: string;
  priority: string;
  completed: boolean;
  openDisplay: boolean;
}

// Dummy Tasks
let dummyTasks: Task[] = [];

async function loadDummyTasks() {
  if (import.meta.env.VITE_APP_ENV === 'development') {
    try {
      const taskModule = await import('@/data/dummyTasks.json');
      dummyTasks = taskModule.default as Task[];
      console.info('Dummy tasks loaded successfully.');
    } catch (error) {
      console.info('Failed to load dummy tasks:', error);
    }
  } else {
    console.warn('Development mode required to load dummy tasks.');
  }
}
await loadDummyTasks();

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: useLocalStorage<Task[]>('tasks', dummyTasks),
  }),
  actions: {
    async addTask() {
      this.setCloseDisplay();
      const newTask: Task = {
        id: this.generateUniqueId(),
        subject: '',
        description: '',
        dueDateTime: new Date().toISOString().slice(0, 16),
        priority: 'medium',
        completed: false,
        openDisplay: true,
      };
      await this.tasks.push(newTask);
    },
    async removeTask(taskId: string) {
      const index = this.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
    async updateTask(updatedTask: Task) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
      }
    },
    async toggleCompleted(task: Task) {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        this.tasks[index].completed = !this.tasks[index].completed;
      }
    },
    generateUniqueId(): string {
      return (this.tasks.length + 1).toString();
    },
    async updateDueDate(taskId: string, newDueDate: string) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        task.dueDateTime = newDueDate;
      }
    },
    async updateSubject(taskId: string, newSubject: string) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        task.subject = newSubject;
      }
    },
    async updateTaskDescription(taskId: string, newDescription: string) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        task.description = newDescription;
      }
      await this.saveTasksToLocalStorage();
    },
    async openTaskDetails(id: string) {
      try {
        this.setCloseDisplay();
        this.setOpenDisplay(id);
        await this.saveTasksToLocalStorage();
      } catch (error) {
        console.error('Failed to open task details:', error);
      }
    },
    async saveTasksToLocalStorage() {
      try {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      } catch (error) {
        console.error('Failed to save tasks to localStorage:', error);
      }
    },
    async setCloseDisplay() {
      try {
        const openTasks = this.tasks.filter((task) => task.openDisplay === true);

        if (openTasks.length > 0) {
          this.tasks.forEach((task) => {
            if (task.openDisplay === true) {
              task.openDisplay = false;
            }
          });
        }
      } catch (error) {
        console.error('Error resetting openDisplay:', error);
      }
    },
    async setOpenDisplay(taskId: string) {
      try {
        this.tasks.forEach((task) => {
          task.openDisplay = task.id === taskId;
        });
      } catch (error) {
        console.error('Error setting task openDisplay:', error);
      }
    },
    async updatePriority(taskId: string, newPriority: string) {
      try {
        const task = this.tasks.find((task) => task.id === taskId);
        if (task) {
          task.priority = newPriority;
          await this.$patch((state) => {
            state.tasks = [...state.tasks];
          });
        } else {
          console.error(`Task with ID ${taskId} not found.`);
        }
      } catch (error) {
        console.error('Error updating priority:', error);
      }
    },
  },
  getters: {
    openTasks: (state) => state.tasks.filter((task) => !task.completed),
    doneTasks: (state) => state.tasks.filter((task) => task.completed),
    openDisplayTask: (state) => state.tasks.filter((task) => task.openDisplay),
  },
});
