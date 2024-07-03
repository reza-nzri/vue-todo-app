<template>
  <div>
    <div class="todo-list">
      <div class="done-list-view drop-shadow">
        <CheckBoxComp v-model="isChecked" class="check-box-comp" />
        <TaskSubject
          class="task-subject"
          v-if="props.task"
          :subject="props.task.subject"
        />
        <TimestampDisplay class="timestamp-display" />
        <PriorityIndicator class="priority-indicator" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from "vue";
import type { Ref } from "vue";
import CheckBoxComp from "@/components/CheckboxComp.vue";
import TaskSubject from "@/components/TaskSubject.vue";
import TimestampDisplay from "@/components/TimestampDisplay.vue";
import PriorityIndicator from "@/components/PriorityIndicator.vue";

interface Task {
  id: string;
  subject: string;
  description: string;
  dueDateTime: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
  opened: boolean;
}

// Define the type for props
const props = defineProps({
  task: {
    type: Object as () => Task,
    required: true,
  },
});

// Define isChecked as a reactive boolean reference
const isChecked: Ref<boolean> = ref(false);

// Watch for changes in isChecked
watch(isChecked, (newVal) => {
  console.log(`Checkbox is ${newVal ? "checked" : "unchecked"}`);
});
</script>

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

.task-subject {
  margin: 0;
  margin: -3px 0px 0px 38px;
  flex-grow: 2;
}

.timestamp-display {
  margin: 13px 10px 0px 0px;
}

.priority-indicator {
  margin: 0;
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
</style>
