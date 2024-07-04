<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import TopBar from "@/components/TopBar.vue";
import TaskDashboard from "@/components/TaskDashboard.vue";
import TaskDetails from "@/components/TaskDetails.vue";

// Define props and access environment variable
const appNameEnv = import.meta.env.VITE_APP_NAME as string;
const appVersion = import.meta.env.VITE_APP_VERSION as string;

// Todos Data
const isChecked = ref(false);

interface Task {
  id: string;
  subject: string;
  description: string;
  dueDateTime: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
  opened: boolean;
}

const tasks: Ref<Task[]> = ref([
  {
    id: "1",
    subject: "Buy groceries",
    description:
      "Today, we need to buy groceries from the supermarket for the week. Items needed include milk, eggs, bread, fruits, and vegetables.",
    dueDateTime: "2023-07-03T12:00:00",
    priority: "high",
    completed: false,
    openDisplay: true,
  },
  {
    id: "2",
    subject: "Prepare presentation",
    description:
      "Prepare a PowerPoint presentation for the team meeting scheduled tomorrow. The presentation should cover project updates, milestones, and future plans.",
    dueDateTime: "2023-07-03T12:00:00",
    priority: "medium",
    completed: false,
    openDisplay: false,
  },
  {
    id: "3",
    subject: "Birthday party planning",
    description:
      "Organize and plan for John's birthday party this weekend. Tasks include inviting guests, ordering cake and decorations, and finalizing the venue.",
    dueDateTime: "2023-07-03T12:00:00",
    priority: "low",
    completed: true,
    openDisplay: false,
  },
]);
</script>

<template>
  <div class="todo-page">
    <div>
      <nav class="router-link">
        <div class="info-box">
          <img
            alt="ToDo List logo"
            class="todo-list-logo"
            src="@/assets/images/logos/logo.ico"
          />
          <h1 class="app-title">My ToDo's</h1>
        </div>

        <div class="app-meta-infos">
          <h1>{{ appNameEnv }} v{{ appVersion }}</h1>
        </div>

        <!-- <hr /> -->
      </nav>

      <main>
        <TopBar class="add-task-board" />

        <div class="tasks-dashboard">
          <div class="tasks-topic">
            <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
            <h3 class="tasks-text">Tasks</h3>
          </div>

          <hr class="hr-topic" />

          <TaskDashboard class="list-board" />
        </div>

        <div class="done-dashboard">
          <div class="done-topic">
            <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
            <h3 class="done-text">Done</h3>
          </div>

          <hr class="hr-topic" />

          <TaskDashboard class="list-board" />
        </div>

        <TaskDetails class="task-details-board" />
      </main>
    </div>
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

.app-title {
  margin: 7px 0px 0px 20px;
  font-size: 2.3em;
  color: white;
  text-shadow: 1px 3px 9px rgba(0, 0, 0, 0.46);
}

hr {
  margin: 0px 40px 5px 40px;
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
  grid-column-gap: 40px;
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
