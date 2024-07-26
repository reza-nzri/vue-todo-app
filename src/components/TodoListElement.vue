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
      class="todolist-element__task-subject"
      type="text"
      v-if="task"
      id="sebject-txt"
      placeholder="Enter subject..."
      v-model:="props.task.subject"
      minlength="4"
      maxlength="50"
      required
      @update:subject="updateSubject"
    />

    <TimestampDisplay :whichStyle="'for-todo-list-element'" :task="task" />

    <p class="current-priority" :style="backgroundColorPriorityStyle">
      {{ props.task.priority }}
    </p>
  </div>
</template>

<style scoped>
.todolist-element {
  border: 3px solid var(--well-read);
  margin: 5px 3px 0px 3px;
  height: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: white;
  /* none */
  border-radius: var(--box-radius-size);
}

.checkbox-comp {
  margin: 10px 0px 0px 10px;
}

.checkbox-checker-text {
  margin: -5px 0px 0px 37px;
}

.drop-shadow {
  -webkit-filter: drop-shadow(-2px 5px 7px #0000003d);
  filter: drop-shadow(-2px 5px 7px #0000003d);
}

.todolist-element__task-subject {
  height: 20px;
  font-size: 14px;
  margin: 9px 0px 0px 38px;
  -webkit-box-flex: 2;
  -ms-flex-positive: 2;
  flex-grow: 2;
  border: none;
  outline: none;
  color: var(--font-color-gray);
  font-family: var(--global-font);
}

.drop-shadow:hover {
  -webkit-filter: drop-shadow(-2px 5px 10px #00000074);
  filter: drop-shadow(-2px 5px 10px #00000074);
  cursor: pointer;
  -webkit-transform: scale(100.3%);
  -ms-transform: scale(100.3%);
  transform: scale(100.3%);
  -webkit-transition: 0.04s ease;
  -o-transition: 0.04s ease;
  transition: 0.04s ease;
}

.current-priority {
  min-width: 80px;
  font-size: 15px;
  height: 100%;
  background-color: var(--well-read);
  color: white;
  text-align: center;
  -ms-flex-line-pack: center;
  align-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (max-width: 888px) {
  .todolist-element {
    margin: 2px 3px 0px 3px;
    height: 30px;
  }

  .checkbox-comp {
    margin: 5px 0px 0px 10px;
  }

  .checkbox-checker-text {
    margin: -5px 0px 0px 37px;
  }

  .todolist-element__task-subject {
    height: 16px;
    font-size: 12px;
    margin: 7px 0px 0px 38px;
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
  }

  .current-priority {
    font-size: 12px;
    height: 100%;
    min-width: 60px;
  }
}
</style>
