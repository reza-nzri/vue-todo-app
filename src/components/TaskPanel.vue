<script setup lang="ts">
import { useTaskStore } from '@/store/TaskStore';
import TodoListElement from '@/components/TodoListElement.vue';

interface Task {
  id: string;
  subject: string;
  description: string;
  dueDateTime: string;
  priority: string;
  completed: boolean;
  openDisplay: boolean;
}

const props = defineProps<{
  tasks: Array<Task>;
  baseClass: string;
  title: string;
}>();

const taskStore = useTaskStore();
</script>

<template>
  <div :class="`task-panel__${baseClass}--tasks`">
    <div :class="`task-panel__${baseClass}-tasks--topic`">
      <font-awesome-icon :icon="['fas', 'tasks']" class="task-panel__icon" />
      <h3 class="tasks__drop-shadow--title">{{ props.title }}</h3>
    </div>

    <hr class="task-panel__tasks-divider" />

    <TodoListElement
      class="todolist-element"
      v-for="task in props.tasks"
      :key="task.id"
      :task="task"
      @update-task="taskStore.updateTask"
      @delete-task="taskStore.removeTask"
      @toggle-completed="taskStore.toggleCompleted"
      @click="taskStore.openTaskDetails(task.id)"
    />
  </div>
</template>

<style scoped>
.todolist-element {
  margin-bottom: 8px;
}

.tasks__drop-shadow--title {
  filter: drop-shadow(var(--simple-drop-shadow));
}

.task-panel__tasks-divider {
  width: inherit;
  margin: 5px 0px 15px 0px;
  border-color: white;
}

.task-panel__icon {
  width: 17px;
  height: 17px;
  margin-right: 10px;
  -webkit-filter: drop-shadow(var(--simple-drop-shadow));
  filter: drop-shadow(var(--simple-drop-shadow));
}

.task-panel__open-tasks--topic,
.task-panel__close-tasks--topic {
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: white;
}

/* Task Panel Open Tasks */
.task-panel__open-tasks {
  margin-bottom: 5px;
  display: block !important;
}

.task-panel__open-tasks--topic {
  margin-top: 8px;
}

/* Task Panel Close Tasks */
.task-panel__close--tasks {
  margin-top: 10px;
}
</style>
