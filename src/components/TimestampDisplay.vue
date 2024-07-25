<script setup lang="ts">
import { computed } from 'vue';
import { useTaskStore } from '@/store/TaskStore';

const taskStore = useTaskStore();

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
  task: Task;
  whichStyle: string;
}>();

const minDate = computed(() => {
  return new Date().toISOString().slice(0, 16);
});

const updateDueDate = (event: Event) => {
  try {
    const target = event.target as HTMLInputElement;
    const newDueDate = target?.value;

    if (!newDueDate) return;

    taskStore.updateDueDate(props.task.id, newDueDate);
  } catch (error) {
    console.error('Error updating due date:', error);
  }
};
</script>

<template>
  <input
    type="datetime-local"
    class="timestamp-display"
    id="input-calender"
    name="input-calender"
    :min="minDate"
    :value="props.task.dueDateTime || minDate"
    @input="updateDueDate"
    :class="props.whichStyle"
  />
</template>

<style scoped>
.timestamp-display {
  font-family: var(--global-font);
  border: none;
  outline: none;
  margin: 10px 5px 0px 0px;
  height: 16px;
  font-size: 11px;
}

.for-todo-list-element {
  margin: 13px 10px 0px 0px;
  color: var(--font-faded-color);
  margin: 11px 5px 0px 0px;
  min-width: 120px;
  width: 120px;
  font-size: 11px;
}

.for-task-details {
  margin: 10px 0px 0px 0px;
  max-width: 150px;
  color: var(--font-color-gray);
  font-size: 14px;
}

@media (max-width: 888px) {
  .for-todo-list-element {
    margin: 8px 0px 0px 0px;
    max-width: 150px;
  }
}
</style>
