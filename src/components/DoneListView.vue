<template>
  <div class="done-list-comp">
    <div class="done-topic">
      <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
      <h3 class="done-text">Done</h3>
    </div>

    <hr class="hr-topic" />

    <TodoListElement
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      class="list"
      v-model="isChecked"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoListElement from "@/components/TodoListElement.vue";

const isChecked = ref(false);

const tasks = ref([
  {
    id: "1",
    subject: "Buy groceries",
    description:
      "Today, we need to buy groceries from the supermarket for the week. Items needed include milk, eggs, bread, fruits, and vegetables.",
    dueDateTime: "2023-07-03T12:00:00",
    priority: "high",
    completed: false,
    opened: true,
  },
  {
    id: "2",
    subject: "Prepare presentation",
    description:
      "Prepare a PowerPoint presentation for the team meeting scheduled tomorrow. The presentation should cover project updates, milestones, and future plans.",
    dueDateTime: "2023-07-03T12:00:00",
    priority: "medium",
    completed: false,
    opened: false,
  },
  {
    id: "3",
    subject: "Birthday party planning",
    description:
      "Organize and plan for John's birthday party this weekend. Tasks include inviting guests, ordering cake and decorations, and finalizing the venue.",
    dueDateTime: "2023-07-03T12:00:00",
    priority: "low",
    completed: true,
    opened: false,
  },
]);
</script>

<style scoped>
.done-list-comp {
  margin: 0;
  display: block !important;
}

.list {
  margin-bottom: 15px;
}

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
