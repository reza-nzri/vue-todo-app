<script setup lang="ts">
import { computed } from 'vue';
import TopBar from '@/components/TopBar.vue';
import TodoListElement from '@/components/TodoListElement.vue';
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
      <div class="info-box">
        <img alt="ToDo List logo" class="todo-list-logo" src="@/assets/images/logos/logo.ico" />
        <h1 class="app-title">My ToDo's</h1>
      </div>

      <div class="app-meta-infos">
        <h1>{{ appNameEnv }} v{{ appVersion }}</h1>
      </div>
    </nav>

    <main>
      <TopBar class="add-task-board" @add-task="taskStore.addTask()" />

      <div class="list-board">
        <div class="tasks-dashboard">
          <div class="tasks-topic">
            <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
            <h3 class="tasks-text">Tasks</h3>
          </div>

          <hr class="hr-topic" />

          <div class="dashboard">
            <!-- Iterate through open tasks -->
            <TodoListElement
              class="list"
              v-for="task in openTasks"
              :key="task.id"
              :task="task"
              @update-task="taskStore.updateTask"
              @delete-task="taskStore.removeTask"
              @toggle-completed="taskStore.toggleCompleted"
              @click="taskStore.openTaskDetails(task.id)"
            />
          </div>
        </div>

        <div class="done-dashboard">
          <div class="done-topic">
            <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
            <h3 class="done-text">Done</h3>
          </div>

          <hr class="hr-topic" />

          <div class="dashboard">
            <!-- Iterate through close tasks -->
            <TodoListElement
              class="list"
              v-for="task in doneTasks"
              :key="task.id"
              :task="task"
              @update-task="taskStore.updateTask"
              @delete-task="taskStore.removeTask"
              @toggle-completed="taskStore.toggleCompleted"
              @click="taskStore.openTaskDetails(task.id)"
              style="text-decoration: line-through; filter: grayscale(100%)"
            />
          </div>
        </div>
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

.app-title {
  margin: 7px 0px 0px 20px;
  font-size: 2.3em;
  color: white;
  text-shadow: 1px 3px 9px rgba(0, 0, 0, 0.46);
}

.app-meta-infos {
  color: white;
  font-size: 7px;
  margin: 0px 0px 0px 93px;
  filter: drop-shadow(var(--hover-drop-shadow));
}

/* main */
main {
  display: grid;
  margin: 0px 25px 0px 25px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 10fr;
  grid-column-gap: 25px;
  grid-row-gap: 15px;
}

.add-task-board,
.list-board,
.task-details-board {
  border-radius: var(--box-radius-size);
  background-color: rgba(207, 22, 22, 0.315);
}

.add-task-board {
  grid-area: 1 / 1 / 2 / 2;
}

.list-board {
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

/* Todos Dashboard */
.tasks-dashboard {
  margin-bottom: 5px;
  display: block !important;
}

.dashboard {
  margin: 0;
  display: block !important;
}

.list {
  margin-bottom: 15px;
}

.tasks-topic {
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-top: 8px;
  color: white;
}

.tasks-text {
  margin: 0;
  filter: drop-shadow(var(--simple-drop-shadow));
}

/* Done List */

.done-topic {
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: white;
}

.icon {
  width: 17px;
  height: 17px;
  margin-right: 10px;
  -webkit-filter: drop-shadow(var(--simple-drop-shadow));
  filter: drop-shadow(var(--simple-drop-shadow));
}

.done-text {
  margin: 0;
  filter: drop-shadow(var(--simple-drop-shadow));
}

.hr-topic {
  width: inherit;
  margin: 5px 0px 15px 0px;
  border-color: white;
}
</style>
