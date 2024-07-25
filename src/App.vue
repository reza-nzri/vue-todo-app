<script setup lang="ts">
import { computed } from 'vue';
import TopBar from '@/components/AddTaskBar.vue';
import TaskPanel from '@/components/TaskPanel.vue';
import TaskDetails from '@/components/TaskDetails.vue';
import { useTaskStore } from '@/store/TaskStore';

const taskStore = useTaskStore();
const appNameEnv = import.meta.env.VITE_APP_NAME as string;
const appVersion = import.meta.env.VITE_APP_VERSION as string;
const openTasks = computed(() => taskStore.openTasks);
const doneTasks = computed(() => taskStore.doneTasks);
const openDisplayTask = computed(() => taskStore.openDisplayTask);
</script>

<template>
  <div class="fullscreen-container">
    <div class="design-limit">
      <div class="todo-page">
        <nav class="navbar">
          <div class="navbar__info-box">
            <img alt="ToDo List logo" class="navbar__logo" src="@/assets/images/logos/logo.webp" />
            <h1 class="navbar__title">My ToDo's</h1>
          </div>

          <h1 class="navbar__meta-infos">{{ appNameEnv }} v{{ appVersion }}</h1>
        </nav>

        <main>
          <TopBar class="add-task-bar" @add-task="taskStore.addTask()" />

          <div class="task-panel">
            <TaskPanel :tasks="openTasks" title="Tasks" baseClass="open" />
            <TaskPanel :tasks="doneTasks" title="Done" baseClass="close" />
          </div>

          <TaskDetails
            class="task-details"
            v-if="openDisplayTask.length > 0"
            :key="openDisplayTask[0].id"
            :task="openDisplayTask[0]"
            @update-task="taskStore.updateTask"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fullscreen-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  animation: fadeIn 5s ease-in-out;
  -webkit-animation: fadeIn 1s ease-in-out;
}

.design-limit {
  margin: 70px;
  width: 135rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  background-color: #ffffff73;
  border-radius: var(--general-radius-size);
}

.todo-page {
  border-radius: var(--general-radius-size);
  width: 100%;
  height: 100%;
}

.navbar {
  text-decoration: none;
}

.navbar__info-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 5px 0px;
}

.navbar__logo {
  margin: 8px 0px 0px 18px;
  height: 58px;
  width: 58px;
  -webkit-filter: drop-shadow(var(--simple-drop-shadow));
  filter: drop-shadow(var(--simple-drop-shadow));
}

.navbar__title {
  margin: 7px 0px 0px 20px;
  font-size: 2.3em;
  color: white;
  text-shadow: 1px 3px 9px rgba(0, 0, 0, 0.46);
}

.navbar__meta-infos {
  margin: -15px 0px 0px 100px;
  font-size: 10px;
  color: white;
  -webkit-filter: drop-shadow(var(--hover-drop-shadow));
  filter: drop-shadow(var(--hover-drop-shadow));
}

/* # main */
main {
  display: -ms-grid;
  display: grid;
  margin: 0px 25px;
  -ms-grid-columns: 1fr 25px 2fr;
  grid-template-columns: 1fr 2fr;
  -ms-grid-rows: 1fr 15px 10fr;
  grid-template-rows: 1fr 10fr;
  grid-column-gap: 25px;
  grid-row-gap: 15px;
}
main > *:nth-child(1) {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
}
main > *:nth-child(2) {
  -ms-grid-row: 1;
  -ms-grid-column: 3;
}
main > *:nth-child(3) {
  -ms-grid-row: 3;
  -ms-grid-column: 1;
}
main > *:nth-child(4) {
  -ms-grid-row: 3;
  -ms-grid-column: 3;
}

.add-task-bar,
.task-panel,
.task-details {
  border-radius: var(--box-radius-size);
}

.add-task-bar {
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  grid-area: 1 / 1 / 2 / 2;
}

.task-panel,
.task-details {
  margin: 15px 0;
}

.task-panel {
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  grid-area: 2 / 1 / 3 / 2;
  background-color: rgba(207, 22, 22, 0.315);
  height: 64vh;
  overflow-y: scroll;
  scrollbar-width: none;
}

.task-details {
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  -ms-grid-column: 2;
  -ms-grid-column-span: 1;
  grid-area: 2 / 2 / 3 / 3;
}

@media (max-width: 1500px) {
  .design-limit {
    margin: 10px;
    width: 120rem;
  }

  main {
    margin: 0px 12px;
    -ms-grid-columns: 1fr 12px 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    grid-column-gap: 12px;
  }

  main > *:nth-child(1) {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
  }

  main > *:nth-child(2) {
    -ms-grid-row: 1;
    -ms-grid-column: 3;
  }
  .navbar__logo {
    margin: 8px 0px 0px 6px;
  }

  .navbar__title {
    margin: 7px 0px 0px 12px;
  }

  .navbar__meta-infos {
    margin: -15px 0px 0px 79px;
  }
}

@media (max-width: 888px) {
  .navbar__title {
    font-size: 1.8em;
  }

  .navbar__meta-infos {
    font-size: 8px;
    margin-left: 20px;
  }

  main {
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    grid-row-gap: 10px;
  }

  main > *:nth-child(1) {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
  }

  .task-panel,
  .task-details {
    grid-area: auto;
    min-height: 40vh;
    max-height: none;
    margin-bottom: 20px;
  }

  .task-panel {
    margin-top: 20px;
    margin-bottom: 0;
    min-height: 150px !important;
    max-height: 150px !important;
  }

  .task-details {
    margin: 2px 0;
    min-height: 30vh;
    max-height: none;
  }

  .navbar__meta-infos {
    margin: -15px 0px 0px 80px;
  }
}

@media (max-width: 576px) {
  .navbar__title {
    font-size: 1.1em;
    margin: 3px 0px 0px 10px;
  }

  .navbar__meta-infos {
    margin: -13px 0px 0px 57px;
  }

  main {
    margin: 0 10px;
    grid-column-gap: 10px;
  }

  .task-panel,
  .task-details {
    min-height: 30vh;
  }

  .navbar__logo {
    margin: 0px 0px 0px 6px;
    height: 40px;
    width: 40px;
  }
}
</style>
