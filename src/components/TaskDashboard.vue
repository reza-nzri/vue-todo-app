<script setup lang="ts">
import TodoListElement from "@/components/TodoListElement.vue";
</script>

<template>
  <div class="dashboard">
    <TodoListElement
      class="list"
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      v-model="isChecked"
    />
  </div>
</template>

<style scoped>
.dashboard {
  margin: 0;
  display: block !important;
}

.list {
  margin-bottom: 15px;
}
</style>
