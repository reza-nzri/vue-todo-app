<script setup lang="ts">
import { ref } from "vue";
import TimestampDisplay from "@/components/TimestampDisplay.vue";
import TaskSubject from "@/components/TaskSubject.vue";
import { faWeight } from "@fortawesome/free-solid-svg-icons";
// import RichTextEditorPlugin from '@/plugins/RichTextEditorPlugin.vue';

// Define the Task interface
interface Task {
  id: string;
  subject: string;
  description: string;
  dueDateTime: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
  openDisplay: boolean;
}

// Define the type for props
const props = defineProps<{ task: Task }>();

const currentPriority = ref("high");

const updatePriority = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  currentPriority.value = target.value;
};
</script>

<template>
  <div class="task-details-board">
    <div class="white-board">
      <div class="description-container">
        <div class="date-priority">
          <TimestampDisplay
            class="timestamp-display-comp"
            v-if="props.task"
            :dueDateTime="props.task.dueDateTime"
            :style="{ fontSize: '15px', margin: '13px 0px 0px 0px' }"
          />

          <div class="priority-dropdown">
            <div class="inside-box">
              <p class="priority-text">Priority</p>

              <div class="combobox">
                <select
                  v-model="currentPriority"
                  @change="updatePriority"
                  class="priority-select"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <p class="combo-arrow">></p>
              </div>
            </div>
          </div>
        </div>

        <TaskSubject
          class="task-subject"
          v-if="props.task"
          :subject="props.task.subject"
          :style="{ fontSize: '28px', fontWeight: '700' }"
        />

        <div class="task-description">
          <div class="index">
            <p class="todo-index">{{ props.task.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- <RichTextEditorPlugin /> -->
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
.index {
  display: block;
}

.todo-index {
  display: block;
  margin: 30px 0px 0px 0px;
}
</style>
