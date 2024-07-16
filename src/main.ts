import './assets/css/main.css';
import devtools from '@vue/devtools';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import FontAwesomeIcon from './plugins/font-awesome';

const pinia = createPinia();
const app = createApp(App);

if (process.env.NODE_ENV === 'development') {
  devtools.connect('http://localhost:5173');
}

app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
