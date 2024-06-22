<script setup lang="ts">
import AddTaskBoard from '@/components/main-page/add-task-board/AddTaskBoard.vue';
import TodoListsBoard from '@/components/main-page/todo-lists-board/TodoListsBoard.vue';
import TaskDetailsBoard from '@/components/main-page/task-details-board/TaskDetailsBoard.vue';
</script>

<template>
  <main>
    <AddTaskBoard class="add-task-board" />
    <TodoListsBoard class="todo-list-board" />
    <TaskDetailsBoard class="task-details-board" />
  </main>
</template>

<style scoped>
main {
  display: grid;
  margin: 25px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 5fr 2fr;
  grid-column-gap: 25px;
  grid-row-gap: 15px;
  height: 66vh;
  max-height: 66vh;
}

.add-task-board,
.todo-list-board,
.task-details-board {
  border-radius: 6px;
  background-color: rgba(207, 22, 22, 0.315);
}

.add-task-board {
  grid-area: 1 / 1 / 2 / 2;
}

.todo-list-board {
  grid-area: 2 / 1 / 4 / 2;
  margin-bottom: 25px;
}

.task-details-board {
  grid-area: 2 / 2 / 4 / 3;
  margin-bottom: 25px;
}
</style>
