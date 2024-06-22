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
  margin: 0px 25px 0px 25px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 10fr;
  grid-column-gap: 40px;
  grid-row-gap: 15px;
}

.add-task-board,
.todo-list-board,
.task-details-board {
  border-radius: var(--box-radius-size);
  background-color: rgba(207, 22, 22, 0.315);
}

.add-task-board {
  grid-area: 1 / 1 / 2 / 2;
}

.todo-list-board {
  grid-area: 2 / 1 / 3 / 2;
  margin-bottom: 45px;
  margin-top: 15px;
}

.task-details-board {
  grid-area: 2 / 2 / 3 / 3;
  margin-bottom: 45px;
  margin-top: 15px;
}
</style>
