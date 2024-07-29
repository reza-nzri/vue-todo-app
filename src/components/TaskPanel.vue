<script setup lang="ts">
import { ref } from 'vue';
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
  highlightTask: Task;
}>();

const taskStore = useTaskStore();

// Track visibility of the panels
const TasksVisible = ref(true);

const togglePanel = (panel: string) => {
  if (panel === 'doneTasks') {
    TasksVisible.value = !TasksVisible.value;
  }
};

const isHighlighted = (task: Task) => task === props.highlightTask;
</script>

<template>
  <div :class="`task-panel__${baseClass}--tasks`">
    <div :class="`task-panel__${baseClass}-tasks--topic`" @click="togglePanel('doneTasks')">
      <font-awesome-icon :icon="['fas', 'tasks']" class="task-panel__icon" />
      <h3 class="tasks__drop-shadow--title">{{ props.title }}</h3>
      <p class="task-count">{{ props.tasks.length }}</p>
    </div>

    <hr class="task-panel__tasks-divider" />

    <TodoListElement
      class="todolist-element"
      v-for="task in props.tasks"
      :key="task.id"
      :task="task"
      :class="{ 'highlight-task': isHighlighted(task) }"
      @update-task="taskStore.updateTask"
      @delete-task="taskStore.removeTask"
      @toggle-completed="taskStore.toggleCompleted"
      @click="taskStore.openTaskDetails(task.id)"
      v-show="TasksVisible"
    />
  </div>
</template>

<style scoped>
.todolist-element {
  margin-bottom: 8px;
}

.tasks__drop-shadow--title {
  -webkit-filter: drop-shadow(var(--simple-drop-shadow));
  filter: drop-shadow(var(--simple-drop-shadow));
}

.task-count {
  width: 35px;
  line-height: 22px;
  border-radius: 25px;
  font-size: 12px;
  margin: 0 8px 0 auto;
  text-align: center;
  background-color: var(--well-read);
  color: white;
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
  margin-left: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: white;
  cursor: pointer;
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

/* Only for openDisplay Tasks */
.highlight-task {
  filter: drop-shadow(-2px 3px 4px #ff0000cf);
  display: flex !important;
}
</style>
