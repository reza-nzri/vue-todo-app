<script setup lang="ts">
import { ref } from 'vue';
import TodoList from '@/components/main-page/TodoList.vue'

const isChecked = ref(false);
</script>

<template>
    <div class="todo-comp">
        <TodoList v-model="isChecked" class="list" />
        <TodoList v-model="isChecked" class="list" />
        <TodoList v-model="isChecked" class="list" />
        <TodoList v-model="isChecked" class="list" />
    </div>
</template>

<style scoped>
.todo-comp {
    margin-bottom: 5px;
    display: block !important;
}

.list {
    margin-bottom: 15px;
}
</style>