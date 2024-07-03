<script setup lang="ts">
import DoneListView from '@/components/DoneListView.vue'
import ToDosView from '@/components/ToDosView.vue'
</script>

<template>
  <div class="todo-list-board">
    <div class="list-board">
      <ToDosView />
      <DoneListView class="done-list-view" />
    </div>
  </div>
</template>

<style scoped>
.list-board {
  margin: 0;
}
</style>
