import './assets/styles/css/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import FontAwesomeIcon from './plugins/font-awesome';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
