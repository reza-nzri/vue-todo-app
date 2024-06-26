<script setup lang="ts">
import { ref } from 'vue';
import TodoListElement from '@/components/TodoListElement.vue';
import TaskDescription from './TaskDescription.vue';

const isChecked = ref(false);

interface Task {
    id: number;
    subject: string;
    description: string;
    dueDateTime: string;
    priority: 'low' | 'medium' | 'high';
    completed: boolean;
}

const tasks = ref<Task[]>([
    {
        id: 1,
        subject: 'Task 1',
        description: 'Description 1',
        dueDateTime: '2022-12-31T23:59',
        priority: 'high',
        completed: false
    },
    {
        id: 2,
        subject: 'Task 2',
        description: 'Description 2',
        dueDateTime: '2022-12-31T23:59',
        priority: 'medium',
        completed: false
    }
]);

function addTask(task: Task) {
    tasks.value.push(task);
}

function updateTask(id: number, updatedTask: Partial<Task>) {
    const task = tasks.value.find(task => task.id === id);
    if (task) {
        Object.assign(task, updatedTask);
    }
}

function deleteTask(id: number) {
    tasks.value = tasks.value.filter(task => task.id !== id);
}
</script>

<template>
    <div class="done-list-comp">
        <div class="done-topic">
            <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
            <h3 class="done-text">Done</h3>
        </div>

        <hr class="hr-topic">

        <TodoListElement v-for="task in tasks" :key="task.id" :task="task" v-model="isChecked" class="list" />
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