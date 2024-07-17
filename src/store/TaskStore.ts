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

const getCurrentDateFormatted = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${year}.${month}.${day} - ${hours}:${minutes}`;
};

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
      this.setCloseDisplay();
      const newTask: Task = {
        id: this.generateUniqueId(),
        subject: '',
        description: '',
        dueDateTime: getCurrentDateFormatted(),
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
      this.saveTasksToLocalStorage();
    },
    openTaskDetails(id: string) {
      try {
        this.setCloseDisplay();
        this.setOpenDisplay(id);
        this.saveTasksToLocalStorage();
      } catch (error) {
        console.error('Failed to open task details:', error);
      }
    },
    saveTasksToLocalStorage() {
      try {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      } catch (error) {
        console.error('Failed to save tasks to localStorage:', error);
      }
    },
    initializeStore() {
      try {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
          this.tasks = JSON.parse(storedTasks);
        }
      } catch (error) {
        console.error('Failed to initialize store from localStorage:', error);
      }
    },
    setCloseDisplay() {
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
    setOpenDisplay(taskId: string) {
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
