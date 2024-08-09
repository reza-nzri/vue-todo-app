import './assets/styles/css/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import FontAwesomeIcon from './plugins/font-awesome';
import { useTaskStore } from './store/TaskStore';

async function initializeApp() {
  const pinia = createPinia();
  const app = createApp(App);

  // Erstelle eine Instanz des TaskStore
  const taskStore = useTaskStore(pinia);

  // Lade die Dummy-Daten
  await taskStore.loadDummyTasks();

  // Verwende Pinia
  app.use(pinia);

  // Registriere die FontAwesomeIcon-Komponente
  app.component('font-awesome-icon', FontAwesomeIcon);

  // Mount die App
  app.mount('#app');
}

// Starte die Initialisierung
initializeApp();
