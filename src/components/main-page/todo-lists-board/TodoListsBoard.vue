<script setup lang="ts">
import DoneListView from '@/components/main-page/todo-lists-board/done-list-view/DoneListView.vue'
import ToDosView from '@/components/main-page/todo-lists-board/to-dos-view/ToDosView.vue'
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