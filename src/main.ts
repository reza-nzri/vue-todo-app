import './assets/styles/css/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import FontAwesomeIcon from './plugins/font-awesome';
import { useTaskStore } from './store/TaskStore';
import { createRouter, createWebHistory } from 'vue-router';

async function initializeApp() {
  const pinia = createPinia();
  const app = createApp(App);
  const taskStore = useTaskStore(pinia);
  const basePath = '/vue-todo-app/';

  const router = createRouter({
    history: createWebHistory(basePath),
    routes: [],
  });

  await taskStore.loadDummyTasks();

  app.use(pinia);
  app.use(router);
  app.component('font-awesome-icon', FontAwesomeIcon);
  app.mount('#app');
}

initializeApp();
