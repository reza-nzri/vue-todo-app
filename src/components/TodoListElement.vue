<script setup lang="ts">
import { ref, defineProps, watch, computed, defineEmits } from 'vue';
import CheckBoxComp from '@/components/CheckboxComp.vue';
import { useTaskStore } from '@/store/TaskStore';

const taskStore = useTaskStore();

// Define the Task interface
interface Task {
  id: string;
  subject: string;
  description: string;
  dueDateTime: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  openDisplay: boolean;
}

// TaskSubject
const updateSubject = (newSubject: string) => {
  localStorage.setItem(`task_${props.task.id}_subject`, newSubject);
  taskStore.updateSubject(props.task.id, newSubject);
};

const props = defineProps<{
  task: Task;
}>();

const dueDateTime = ref(props.task.dueDateTime);
const isChecked = ref(props.task.completed);

const emit = defineEmits<{
  (e: 'update-task', value: Task): void;
}>();

watch(isChecked, (newVal) => {
  console.log(`Checkbox is ${newVal ? 'checked' : 'unchecked'}`);
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

// TimestampDisplay
const minDate = computed(() => {
  const now = new Date();
  return now.toISOString().slice(0, 16);
});

const formatForInput = (dateString: string): string => {
  try {
    if (!dateString) return '';

    const [date, time] = dateString.split(' - ');
    const [year, month, day] = date.split('.'); // Correct the order to year, month, day
    const formattedDate = `${year}-${month}-${day}T${time}`;
    return formattedDate;
  } catch (error) {
    console.error('Error formatting date for input:', error);
    return '';
  }
};

const updateDueDate = (event: Event) => {
  try {
    const target = event.target as HTMLInputElement;
    const newDueDate = target?.value;

    if (!newDueDate) return;

    // Format date for display
    const date = new Date(newDueDate);
    const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} - ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    // Update the task in the store
    taskStore.updateDueDate(props.task.id, formattedDate);
  } catch (error) {
    console.error('Error updating due date:', error);
  }
};
</script>

<template>
  <div class="done-list-view drop-shadow" :style="borderColorPriorityStyle">
    <CheckBoxComp v-model="isChecked" class="check-box-comp" />

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

    <!-- Timestamp display -->
    <input
      type="datetime-local"
      class="timestamp-display"
      id="input-calender"
      name="input-calender"
      :min="minDate"
      :value="formatForInput(props.task.dueDateTime)"
      @input="updateDueDate"
      style="
        font-family: var(--global-font);
        color: var(--font-faded-color);
        border: none;
        outline: none;
        margin: 11px 5px 0px 0px;
        height: 16px;
        font-size: 11px;
      "
    />

    <div class="priority-indicator">
      <div class="inside-box">
        <p class="current-priority" :style="backgroundColorPriorityStyle">
          {{ props.task.priority }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  margin: 0;
}

.done-list-view {
  display: flex;
  background-color: white;
  border: 3px solid var(--well-read);
  /* none */
  border-radius: var(--box-radius-size);
  margin: 5px 0px 0px 0px;
  height: 40px;
}

.check-box-comp {
  margin: -5px 0px 0px 10px;
}

.timestamp-display {
  margin: 13px 10px 0px 0px;
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

/* Priority Indicator */
.priority-indicator {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
}

.inside-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
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
