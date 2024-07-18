<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import CheckBoxComp from '@/components/CheckBox.vue';
import TimestampDisplay from '@/components/TimestampDisplay.vue';
import { useTaskStore } from '@/store/TaskStore';

const taskStore = useTaskStore();

// Define the Task interface
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
}>();

// TaskSubject
const updateSubject = (newSubject: string) => {
  localStorage.setItem(`task_${props.task.id}_subject`, newSubject);
  taskStore.updateSubject(props.task.id, newSubject);
};

const dueDateTime = ref(props.task.dueDateTime);
const isChecked = ref(props.task.completed);

const emit = defineEmits<{
  (e: 'update-task', value: Task): void;
}>();

watch(isChecked, (newVal) => {
  const updatedTask = { ...props.task, completed: newVal };
  emit('update-task', updatedTask);
});

watch(
  () => props.task.dueDateTime,
  (newVal) => {
    dueDateTime.value = newVal;
  }
);

// Computed property for dynamic style
const backgroundColorPriorityStyle = computed(() => {
  let backgroundColor = '';
  if (props.task.priority === 'high') {
    backgroundColor = 'var(--well-read)';
  } else if (props.task.priority === 'medium') {
    backgroundColor = 'var(--marigold)';
  } else if (props.task.priority === 'low') {
    backgroundColor = 'var(--congress-blue)';
  }
  return { backgroundColor };
});

const borderColorPriorityStyle = computed(() => {
  let border = '';
  if (props.task.priority === 'high') {
    border = '3px solid var(--well-read)';
  } else if (props.task.priority === 'medium') {
    border = '3px solid var(--marigold)';
  } else if (props.task.priority === 'low') {
    border = '3px solid var(--congress-blue)';
  }
  return { border };
});
</script>

<template>
  <div class="todolist-element drop-shadow" :style="borderColorPriorityStyle">
    <CheckBoxComp v-model="isChecked" class="checkbox-comp" />

    <!-- TaskSubject -->
    <input
      type="text"
      v-if="task"
      id="sebject-txt"
      placeholder="Enter subject..."
      v-model:="props.task.subject"
      minlength="4"
      maxlength="50"
      required
      @update:subject="updateSubject"
      style="
        border: none;
        outline: none;
        font-size: 14px;
        margin: 9px 0px 0px 38px;
        flex-grow: 2;
        height: 20px;
        color: var(--font-color-gray);
        font-family: var(--global-font);
      "
    />

    <TimestampDisplay :whichStyle="'for-todo-list-element'" :task="task" />

    <p class="current-priority" :style="backgroundColorPriorityStyle">
      {{ props.task.priority }}
    </p>
  </div>
</template>

<style scoped>
.todolist-element {
  display: flex;
  background-color: white;
  border: 3px solid var(--well-read);
  /* none */
  border-radius: var(--box-radius-size);
  margin: 5px 0px 0px 0px;
  height: 40px;
}

.checkbox-comp {
  margin: 10px 0px 0px 10px;
}

.checkbox-checker-text {
  margin: -5px 0px 0px 37px;
}

.drop-shadow {
  -webkit-filter: drop-shadow(-2px 5px 7px #000000b3);
  filter: drop-shadow(-2px 5px 7px #0000003d);
}

.drop-shadow:hover {
  -webkit-filter: drop-shadow(-2px -5pxpx 7px #000000b3);
  filter: drop-shadow(-2px 5px 10px #00000074);
  cursor: pointer;
  transform: scale(100.3%);
  transition: 0.04s ease;
}

.current-priority {
  min-width: 80px;
  background-color: var(--well-read);
  height: 40px;
  color: white;
  font-size: 15px;
  text-align: center;
  align-content: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
