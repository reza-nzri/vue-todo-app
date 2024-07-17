<script setup lang="ts">
import { ref, watch, computed, defineEmits } from 'vue';
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

const props = defineProps<{ task: Task }>();
const dueDateTime = ref(props.task.dueDateTime);

// Priority DropDown Menue
const currentPriority = ref<string>(props.task.priority);

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

// Task Description
const customEmit = defineEmits(['updateTaskDescription']);
const taskDescription = computed<string>({
  get: () => props.task.description,
  set: (value) => {
    taskStore.updateTaskDescription(props.task.id, value);
    customEmit('updateTaskDescription', value);
    localStorage.setItem(`taskDescription_${props.task.id}`, value);
  },
});

const handleDescriptionInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  taskDescription.value = target.value;
};

watch(
  () => props.task.dueDateTime,
  (newVal) => {
    dueDateTime.value = newVal;
  }
);

// TaskSubject
const updateSubject = (newSubject: string) => {
  localStorage.setItem(`task_${props.task.id}_subject`, newSubject);
  taskStore.updateSubject(props.task.id, newSubject);
};

// TimestampDisplay
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
  <div class="task-details-board">
    <div class="white-board">
      <div class="description-container">
        <div class="date-priority">
          <TimestampDisplay :whichStyle="'for-task-details'" :task="task" />

          <!-- Priority DropDown Menue -->
          <div class="priority-dropdown">
            <p class="priority-text">Priority</p>
            <div class="combobox" :style="backgroundColorPriorityStyle">
              <select
                class="priority-select"
                v-model="currentPriority"
                @change="taskStore.updatePriority(props.task.id, currentPriority)"
                :style="backgroundColorPriorityStyle"
              >
                <option value="high" style="background-color: var(--well-read)">High</option>
                <option value="medium" style="background-color: var(--marigold)">Medium</option>
                <option value="low" style="background-color: var(--congress-blue)">Low</option>
              </select>
              <p class="combo-arrow" :style="backgroundColorPriorityStyle">></p>
            </div>
          </div>
        </div>

        <!-- TaskSubject -->
        <input
          type="text"
          v-if="task"
          id="sebject-txt"
          placeholder="Enter a subject..."
          v-model:="props.task.subject"
          minlength="4"
          maxlength="50"
          required
          @update:subject="updateSubject"
          style="
            border: none;
            outline: none;
            margin: 15px 0px 0px 0px;
            font-size: 22px;
            color: var(--font-color-gray);
            width: 20vw;
            box-sizing: border-box;
            width: calc(100% - 38px);
          "
        />

        <!-- Task Description -->
        <textarea
          class="textarea-index"
          :value="taskDescription"
          @input="handleDescriptionInput"
          placeholder="Enter description"
          style="box-sizing: border-box; width: calc(100% - 38px)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-details-board {
  margin: 0;
}

.white-board {
  background-color: white;
  min-height: 64vh;
  max-height: 64vh;
  border-radius: var(--box-radius-size);
}

.description-container {
  margin: 0px 25px 0px 25px;
  overflow-wrap: break-word;
  hyphens: manual;
}

.date-priority {
  display: flex;
}

.subject-text {
  font-size: 22px;
}

/* Priority Dropdown */
.priority-dropdown {
  display: flex;
  margin-left: 38.78vw;
}

.priority-text {
  min-width: 80px;
  background-color: var(--font-color-gray);
  height: 40px;
  color: white;
  font-size: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
}

.combobox {
  display: flex;
  background-color: var(--well-read);
  height: 40px;
  align-items: center;
  width: 100px;
  justify-content: space-between;
  cursor: pointer;
}

.combo-arrow {
  font-size: 12px;
  font-weight: 700;
  transform: rotate(90deg);
  color: white;
  margin-right: 20px;
}

.priority-select {
  min-width: 80px;
  height: 40px;
  color: white;
  font-size: 15px;
  background-color: var(--well-read);
  border: none;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  outline: none;
}

/* Task Description */
.textarea-index {
  display: block;
  margin: 30px 0px 0px 0px;
  min-width: 100%;
  min-height: 50px;
  max-height: 50vh;
  line-height: 1.5;
  border-radius: 5px;
  border: 0.3px solid #cccccc2f;
  box-shadow: 1px 1px 3px #ff00002f;
  outline: none;
}
</style>
