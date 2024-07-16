<script setup lang="ts">
import { ref, watch, computed, defineEmits } from 'vue';
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

const props = defineProps<{ task: Task }>();
const currentPriority = ref('high');
const dueDateTime = ref(props.task.dueDateTime);

const updatePriority = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  currentPriority.value = target.value;
};

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
const isChecked = ref(props.task.completed);

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
  <div class="task-details-board">
    <div class="white-board">
      <div class="description-container">
        <div class="date-priority">
          <!-- TimestampDisplay -->
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
              color: var(--font-color-gray);
              border: none;
              outline: none;
              margin: 10px 0px 0px 0px;
              height: 16px;
              font-size: 14px;
            "
          />

          <div class="priority-dropdown">
            <div class="inside-box">
              <p class="priority-text">Priority</p>

              <div class="combobox">
                <select v-model="currentPriority" @change="updatePriority" class="priority-select">
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <p class="combo-arrow">></p>
              </div>
            </div>
          </div>
        </div>

        <!-- TaskSubject -->
        <input
          type="text"
          v-if="task"
          id="sebject-txt"
          placeholder="Enter a new subject..."
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
          class="todo-index textarea-index"
          :value="taskDescription"
          @input="handleDescriptionInput"
          placeholder="Enter a new description"
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

.timestamp-display-comp {
  justify-content: flex-start;
}

.subject-text {
  font-size: 22px;
}

/* Priority Dropdown */
.priority-dropdown {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  width: 250px;
}

.inside-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
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
  margin-left: 651px;
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
}

/* Task Description */
.textarea-index {
  min-width: 260px;
  display: block;
  margin: 30px 0px 0px 0px;
  max-width: 1086px;
  min-height: 50px;
  max-height: 50vh;
  line-height: 1.5;
  border-radius: 5px;
  border: 0.3px solid #cccccc2f;
  box-shadow: 1px 1px 3px #ff00002f;
  outline: none;
}
</style>
