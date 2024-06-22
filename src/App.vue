<script setup lang="ts">
import { RouterView } from 'vue-router'

// Define props and access environment variable
// const appName = 'Vue Todo App';
// const appNameEnv = import.meta.env.VUE_APP_NAME as string;
// const appVersion = import.meta.env.VUE_APP_VERSION as string;
// console.log(`App version: ${appVersion}`);
// console.log(`App Version: ${appVersion}`);
</script>

<template>
  <div class="todo-page">
    <nav>
      <RouterLink to="/" class="router-link">
        <div class="info-box">
          <img alt="ToDo List logo" class="todo-list-logo" src="@/assets/images/logos/logo.ico" />
          <h1 class="app-title">My ToDo's</h1>
        </div>

        <!-- <div class="app-meta-infos">
          <h1>{{ appNameEnv }} v{{ appVersion }}</h1>
        </div> -->

        <!-- <hr /> -->
      </RouterLink>

      <RouterView />
    </nav>
  </div>
</template>

<style scoped>
.todo-page {
  -webkit-border-radius: var(--general-radius-size);
  -moz-border-radius: var(--general-radius-size);
  border-radius: var(--general-radius-size);
}

.router-link {
  text-decoration: none;
}

.info-box {
  display: flex;
  padding: 5px 0px;
}

.todo-list-logo {
  height: 52px;
  width: 52px;
  -webkit-filter: drop-shadow(var(--simple-drop-shadow));
  filter: drop-shadow(var(--simple-drop-shadow));
  margin: 0px 0px 0px 18px;
}

.todo-list-logo:hover {
  scale: 102%;
  filter: drop-shadow(var(--hover-drop-shadow));
}

.app-title:hover {
  scale: 101.4%;
  filter: drop-shadow(var(--hover-drop-shadow));
}

.app-title {
  margin: 7px 0px 0px 20px;
  font-size: 2.3em;
  color: white;
  text-shadow: 1px 3px 9px rgba(0, 0, 0, 0.46);
}

hr {
  margin: 0px 40px 5px 40px;
}

/* .app-meta-infos {
  color: red;
  font-size: 16px;
  background-color: rgb(240, 255, 25);
  padding: 2px;
} */
</style>