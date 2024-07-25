<script setup lang="ts">
import { ref, watch, computed } from 'vue';
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
</script>

<template>
  <div class="task-details">
    <div class="task-details__description">
      <div class="description__date-priority">
        <TimestampDisplay :whichStyle="'for-task-details'" :task="task" class="timestamp-display" />

        <!-- Delete Task -->
        <font-awesome-icon
          icon="fa-solid fa-trash"
          class="date-priority__delete-icon"
          @click="taskStore.removeTask(props.task.id)"
        />

        <!-- Priority DropDown Menu -->
        <div class="date-priority__priority-dropdown">
          <p class="priority-dropdown__text">Priority</p>
          <div class="priority-dropdown__combobox" :style="backgroundColorPriorityStyle">
            <select
              class="combobox__priority-select"
              v-model="currentPriority"
              @change="taskStore.updatePriority(props.task.id, currentPriority)"
              :style="backgroundColorPriorityStyle"
            >
              <option value="high" style="background-color: var(--well-read)">High</option>
              <option value="medium" style="background-color: var(--marigold)">Medium</option>
              <option value="low" style="background-color: var(--congress-blue)">Low</option>
            </select>
            <p class="combobox__arrow" :style="backgroundColorPriorityStyle">></p>
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
          -webkit-box-sizing: border-box;
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
        style="-webkit-box-sizing: border-box; box-sizing: border-box; width: calc(100% - 38px)"
      ></textarea>
    </div>
  </div>
</template>

<style scoped>
.task-details {
  background-color: white;
  min-height: 64vh;
  max-height: 64vh;
  border-radius: var(--box-radius-size);
}

.task-details__description {
  margin: 0px 25px 0px 25px;
  overflow-wrap: break-word;
  hyphens: manual;
  box-sizing: border-box;
}

.description__date-priority {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.timestamp-display {
  width: 100%;
  float: inline-start;
}

.date-priority__delete-icon {
  color: var(--well-read);
  margin: 10px 20px 0px auto;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.date-priority__delete-icon:hover {
  animation: textAnim 5s 0 normal ease;
  transition: 0.13s;
  transform: scale(112%);
}

.subject-text {
  font-size: 22px;
}

/* Priority Dropdown */
.date-priority__priority-dropdown {
  display: flex;
  align-items: center;
}

.priority-dropdown__text {
  min-width: 80px;
  background-color: var(--font-color-gray);
  height: 40px;
  color: white;
  font-size: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.priority-dropdown__combobox {
  display: flex;
  height: 40px;
  align-items: center;
  width: 100px;
  justify-content: space-between;
  cursor: pointer;
}

.combobox__arrow {
  font-size: 12px;
  font-weight: 700;
  transform: rotate(90deg);
  color: white;
  margin-right: 20px;
}

.combobox__priority-select {
  min-width: 80px;
  height: 40px;
  color: white;
  font-size: 15px;
  border: none;
  text-align: center;
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
  resize: vertical;
}

@media (max-width: 1500px) {
  .task-details__description {
    margin: 0px 12px;
  }

  .date-priority__delete-icon {
    margin: 9px 15px 0px auto;
    height: 14px;
  }

  .priority-dropdown__text {
    min-width: 60px;
    font-size: 12px;
  }

  .priority-dropdown__combobox {
    width: 80px;
  }

  .combobox__arrow {
    font-size: 12px;
    font-weight: 700;
    margin-right: 40px;
  }

  .combobox__priority-select {
    min-width: 60px;
    font-size: 12px;
  }
}
</style>
