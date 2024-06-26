tasks-topic
<script setup lang="ts">
import { ref } from 'vue';
import TodoList from '@/components/TodoListElement.vue'

const isChecked = ref(false);
</script>

<template>
    <div class="todo-comp">
        <div class="tasks-topic">
            <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
            <h3 class="tasks-text">Tasks</h3>
        </div>

        <hr class="hr-topic">

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

.tasks-topic {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-top: 8px;
    color: white;
}

.icon {
    width: 17px;
    height: 17px;
    margin-right: 10px;
    -webkit-filter: drop-shadow(var(--simple-drop-shadow));
    filter: drop-shadow(var(--simple-drop-shadow));
}

.tasks-text {
    margin: 0;
    filter: drop-shadow(var(--simple-drop-shadow));
}

.hr-topic {
    width: inherit;
    margin: 5px 0px 15px 0px;
    border-color: white
}
</style>