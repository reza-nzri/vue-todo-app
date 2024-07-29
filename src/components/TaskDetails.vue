<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue';
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

// Delete Task Button
const isHolding = ref(false);
const holdTimeout = ref<number | null>(null);

const startHold = () => {
  isHolding.value = true;
  holdTimeout.value = window.setTimeout(() => {
    taskStore.removeTask(props.task.id);
  }, 4500);
};

const cancelHold = () => {
  isHolding.value = false;
  if (holdTimeout.value !== null) {
    clearTimeout(holdTimeout.value);
    holdTimeout.value = null;
  }
};

// Design only for Safari (Detect Safari browser)
const isSafari = ref(false);

const detectSafari = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  isSafari.value = /safari/.test(userAgent) && !/chrome/.test(userAgent);
};

onMounted(() => {
  detectSafari();
});
</script>

<template>
  <div class="task-details">
    <div class="task-details__description">
      <div class="description__date-priority">
        <TimestampDisplay :whichStyle="'for-task-details'" :task="task" class="timestamp-display" />

        <!-- Delete Task -->
        <div class="description__delete-button">
          <div id="delete-button__animation-wrapper">
            <svg
              id="delete-button__animation-container"
              viewBox="0 0 100 100"
              :class="{ visible: isHolding }"
            >
              <defs>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#fc6767" />
                </filter>
              </defs>
              <circle
                id="spinner"
                :class="{ spinning: isHolding }"
                style="
                  fill: transparent;
                  stroke: #dd2476;
                  stroke-width: 7px;
                  stroke-linecap: round;
                  filter: url(#shadow);
                "
                cx="50"
                cy="50"
                r="45"
              />
            </svg>
            <font-awesome-icon
              icon="fa-solid fa-trash"
              class="delete-button__delete-icon"
              @mousedown="startHold"
              @mouseup="cancelHold"
              @mouseleave="cancelHold"
              @touchstart="startHold"
              @touchend="cancelHold"
            />
          </div>
        </div>

        <!-- Close Window -->
        <font-awesome-icon
          :icon="['fas', 'window-close']"
          class="date-priority__close-window"
          @click="taskStore.setCloseDisplay"
        />

        <!-- Priority DropDown Menu -->
        <div class="date-priority__priority-dropdown">
          <p class="priority-dropdown__text">Priority</p>
          <select
            class="combobox__priority-select"
            v-model="currentPriority"
            @change="taskStore.updatePriority(props.task.id, currentPriority)"
            :style="backgroundColorPriorityStyle"
            :class="{ 'safari-select': isSafari }"
          >
            <option value="high" style="background-color: var(--well-read)">High</option>
            <option value="medium" style="background-color: var(--marigold)">Medium</option>
            <option value="low" style="background-color: var(--congress-blue)">Low</option>
          </select>
        </div>
      </div>

      <!-- TaskSubject -->
      <input
        class="description__task-subject"
        type="text"
        v-if="task"
        id="sebject-txt"
        placeholder="Enter a subject..."
        v-model:="props.task.subject"
        minlength="4"
        maxlength="50"
        required
        @update:subject="updateSubject"
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
  -webkit-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.description__date-priority {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.timestamp-display {
  width: 100%;
  float: inline-start;
}

/* Delete icon */
#delete-button__animation-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.description__delete-button {
  margin: 10px 10px 0px auto;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.delete-button__delete-icon {
  color: var(--well-read);
  height: 18px;
  cursor: pointer;
  position: absolute;
  z-index: 1000;
}
#delete-button__animation-container {
  transform: scale(120%);
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  z-index: 999;
}
#delete-button__animation-container.visible {
  visibility: visible;
}
@keyframes animation {
  0% {
    stroke-dasharray: 1 98;
    stroke-dashoffset: -105;
  }
  50% {
    stroke-dasharray: 80 10;
    stroke-dashoffset: -160;
  }
  100% {
    stroke-dasharray: 1 98;
    stroke-dashoffset: -300;
  }
}
.spinning {
  animation: animation 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.is-holding {
  transform: scale(103%);
  transition: transform 0.13s;
}

/* close window */
.date-priority__close-window {
  color: var(--well-read);
  margin: 10px 20px 0px 0;
  height: 20px;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.date-priority__close-window:hover {
  -webkit-animation: textAnim 5s 0 normal ease;
  animation: textAnim 5s 0 normal ease;
  -webkit-transition: 0.13s;
  -o-transition: 0.13s;
  transition: 0.13s;
  -webkit-transform: scale(112%);
  -ms-transform: scale(112%);
  transform: scale(112%);
}

.subject-text {
  font-size: 22px;
}

/* Priority Dropdown */
.date-priority__priority-dropdown {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.priority-dropdown__text {
  min-width: 80px;
  height: 40px;
  font-size: 15px;
  background-color: var(--font-color-gray);
  color: white;
  text-align: center;
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
.combobox__priority-select {
  width: 95px;
  height: 40px;
  font-size: 15px;
  color: white;
  border: none;
  text-align: center;
  cursor: pointer;
  outline: none;

  height: 40px;
  width: 95px;
  display: -webkit-box; /* Legacy Safari support */
  display: -ms-flexbox; /* IE 10 support */
  display: flex; /* Modern browser support */

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  cursor: pointer;
}
.combobox__priority-select option:checked {
  background-color: rgba(255, 34, 218, 0);
  color: #fff;
}
.safari-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

/* TaskSubject */
.description__task-subject {
  width: fit-content !important;
  margin: 15px 0px 0px 0px;
  font-size: 22px;
  width: 20vw;
  border: none;
  outline: none;
  color: var(--font-color-gray);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/* Task Description */
.textarea-index {
  display: block;
  margin: 30px 0px 0px 0px;
  min-width: 100%;
  min-height: 8rem;
  max-height: 50vh;
  line-height: 1.5;
  border-radius: 5px;
  border: 0.3px solid #cccccc2f;
  -webkit-box-shadow: 1px 1px 3px #ff00002f;
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

  .combobox__priority-select {
    width: 80px;
  }

  .combobox__arrow {
    font-size: 12px;
    font-weight: 700;
    margin-right: 40px;
  }

  .combobox__priority-select {
    width: 65px;
    font-size: 11px;
  }
}

@media (max-width: 880px) {
  .priority-dropdown__text {
    min-width: 30px;
    min-width: 60px;
    font-size: 11px;
  }

  .combobox__priority-select {
    width: 80px;
  }

  .combobox__arrow {
    font-size: 11px;
    font-weight: 700;
    margin-right: 50px;
  }

  .combobox__priority-select {
    width: 70px;
    font-size: 11px;
  }

  /* Delete icon */
  #delete-button__animation-wrapper {
    margin: 0px -10px 0px auto;
  }
  .delete-button__delete-icon {
    height: 14px;
  }
  #delete-button__animation-container {
    transform: scale(85%);
  }

  /* close window */
  .date-priority__close-window {
    margin: 10px 8px 0px 0;
    height: 16px;
  }
  .date-priority__close-window:hover {
    -webkit-transform: scale(112%);
    -ms-transform: scale(112%);
    transform: scale(112%);
  }
}
</style>
