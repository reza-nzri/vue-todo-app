<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
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

// Task Details display as popup menu for smartphones
onMounted(() => {
  document.addEventListener('keyup', handleKeyUp);
});
onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyUp);
});

const handleKeyUp = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    taskStore.setCloseDisplay();
  }
};

const closeTaskWindow = ref(null);
onClickOutside(closeTaskWindow, taskStore.setCloseDisplay);
</script>

<template>
  <div class="outside-element" v-if="openDisplayTask.length > 0"></div>
  <div class="fullscreen-container" ref="closeTaskWindow">
    <div class="design-limit">
      <div class="todo-page">
        <nav class="navbar">
          <div class="navbar__info-box">
            <img alt="ToDo List logo" class="navbar__logo" src="@/assets/images/logos/logo.svg" />
            <h1 class="navbar__title">My ToDo's</h1>
          </div>

          <h1 class="navbar__meta-infos">{{ appNameEnv }} v{{ appVersion }}</h1>
        </nav>

        <main>
          <TopBar class="add-task-bar" @add-task="taskStore.addTask()" />

          <div class="task-panel">
            <TaskPanel
              :tasks="openTasks"
              title="Tasks"
              baseClass="open"
              :highlightTask="openDisplayTask[0]"
            />
            <TaskPanel
              :tasks="doneTasks"
              title="Done"
              baseClass="close"
              :highlightTask="openDisplayTask[0]"
            />
          </div>

          <TaskDetails
            class="smartphone-view"
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
.outside-element {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #6c6c6c77;
  z-index: 1;
}

.fullscreen-container {
  height: 100vh;
  width: 100vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

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
  width: 100%;
  height: 100%;
  border-radius: var(--general-radius-size);
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
  margin: 8px 0px 0px 23px;
  height: 53px;
  width: 53px;
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
/* Popup styles */
.smartphone-view {
  position: fixed;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 80%;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: var(--box-radius-size);
  z-index: 1000;
  overflow-y: auto;
  transition: transform 0.3s ease;
}

/* Laptop L */
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
    margin: -15px 0px 0px 75px;
  }
}

/* Laptop */
@media (max-width: 888px) {
  .todo-page {
    width: 100%;
    height: 97vh;
    overflow-y: scroll;
    scrollbar-width: none;
  }

  .navbar__title {
    font-size: 1.8em;
  }

  .navbar__meta-infos {
    margin: -25px 0 0 74px !important;
    font-size: 8px;
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
  }

  .task-panel {
    margin-top: 20px;
    margin-bottom: 0;
    min-height: auto !important;
    height: auto !important;
    max-height: none !important;
    overflow-y: visible;
  }

  .task-details {
    margin-bottom: 20px;
    margin: 2px 0;
    min-height: 40vh;
    max-height: none;
  }

  .navbar__meta-infos {
    margin: -15px 0px 0px 80px;
  }
}

/* Tablet */
@media (max-width: 576px) {
  .design-limit {
    margin: 20px 10px;
    height: auto;
    width: 100%;
    overflow: hidden;
  }

  .todo-page {
    width: 100%;
    height: 97vh;
    overflow-y: scroll;
    scrollbar-width: none;
  }

  .navbar__title {
    font-size: 1.1em;
    margin: 3px 0px 0px 10px;
  }

  .navbar__meta-infos {
    margin: -13px 0px 0px 57px !important;
  }

  main {
    margin: 0 10px;
    grid-column-gap: 10px;
  }

  .navbar__logo {
    margin: 0px 0px 0px 6px;
    height: 40px;
    width: 40px;
  }

  .task-panel,
  .task-details {
    grid-area: auto;
  }

  .task-panel {
    margin-top: 20px;
    margin-bottom: 0;
    min-height: auto !important;
    height: auto !important;
    max-height: none !important;
    overflow-y: visible;
  }

  .task-details {
    margin-bottom: 20px;
    margin: 2px 0;
    min-height: 30vh;
    max-height: none;
  }
  /* Adjustments for mobile view */
  .smartphone-view {
    top: 5%;
    left: 2.5%;
    width: 95%;
    height: 90%;
    display: block;
  }
}
</style>
