done-list-comp
<script setup lang="ts">
import { ref } from 'vue';
import TodoList from '@/components/main-page/TodoList.vue'

const isChecked = ref(false);
</script>

<template>
    <div class="done-list-comp">
        <div class="done-topic">
            <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
            <h3 class="done-text">Done</h3>
        </div>

        <hr class="hr-topic">
        <TodoList v-model="isChecked" class="list" />
        <TodoList v-model="isChecked" class="list" />
        <TodoList v-model="isChecked" class="list" />
        <TodoList v-model="isChecked" class="list" />
    </div>
</template>

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
    border-color: white
}
</style>