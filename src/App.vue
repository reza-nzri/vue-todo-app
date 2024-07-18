<script setup lang="ts">
import { computed } from 'vue';
import TopBar from '@/components/TopBar.vue';
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
  <div class="todo-page">
    <nav class="navbar">
      <div class="navbar__info-box">
        <img alt="ToDo List logo" class="navbar__logo" src="@/assets/images/logos/logo.ico" />
        <h1 class="navbar__title">My ToDo's</h1>
      </div>

      <h1 class="navbar__meta-infos">{{ appNameEnv }} v{{ appVersion }}</h1>
    </nav>

    <main>
      <TopBar class="top-bar" @add-task="taskStore.addTask()" />

      <div class="task-panel">
        <TaskPanel :tasks="openTasks" title="Tasks" baseClass="open" />
        <TaskPanel :tasks="doneTasks" title="Done" baseClass="close" />
      </div>

      <TaskDetails
        class="task-details-board"
        v-if="openDisplayTask.length > 0"
        :key="openDisplayTask[0].id"
        :task="openDisplayTask[0]"
        @update-task="taskStore.updateTask"
      />
    </main>
  </div>
</template>

<style scoped>
.todo-page {
  -webkit-border-radius: var(--general-radius-size);
  -moz-border-radius: var(--general-radius-size);
  border-radius: var(--general-radius-size);
}

.navbar {
  text-decoration: none;
}

.navbar__info-box {
  display: flex;
  padding: 5px 0px;
}

.navbar__logo {
  height: 52px;
  width: 52px;
  -webkit-filter: drop-shadow(var(--simple-drop-shadow));
  filter: drop-shadow(var(--simple-drop-shadow));
  margin: 0px 0px 0px 18px;
}

.navbar__title {
  margin: 7px 0px 0px 20px;
  font-size: 2.3em;
  color: white;
  text-shadow: 1px 3px 9px rgba(0, 0, 0, 0.46);
}

.navbar__meta-infos {
  color: white;
  font-size: 10px;
  margin: 0px 0px 0px 93px;
  filter: drop-shadow(var(--hover-drop-shadow));
}

/* # main */
main {
  display: grid;
  margin: 0px 25px 0px 25px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 10fr;
  grid-column-gap: 25px;
  grid-row-gap: 15px;
}

.top-bar,
.task-panel,
.task-details-board {
  border-radius: var(--box-radius-size);
}

.top-bar,
.task-panel {
  background-color: rgba(207, 22, 22, 0.315);
}

.top-bar {
  grid-area: 1 / 1 / 2 / 2;
}

.task-panel {
  grid-area: 2 / 1 / 3 / 2;
  margin-bottom: 45px;
  margin-top: 15px;
  min-height: 50vh;
  max-height: 64vh;
  overflow-y: scroll;
  scrollbar-width: none;
}

.task-details-board {
  grid-area: 2 / 2 / 3 / 3;
  margin-bottom: 45px;
  margin-top: 15px;
}
</style>
