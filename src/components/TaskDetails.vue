<script setup lang="ts">
import { ref } from "vue";
import TimestampDisplay from "@/components/TimestampDisplay.vue";
import TaskSubject from "@/components/TaskSubject.vue";
// import RichTextEditorPlugin from '@/plugins/RichTextEditorPlugin.vue';

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
          <TimestampDisplay class="timestamp-display-comp" />

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

        <div class="task-description">
          <div class="index">
            <div class="todo-index">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              eligendi nam et, aspernatur officia nemo, nulla rem porro tempore
              autem ut placeat enim incidunt dicta non at? Provident, laudantium
              ipsam.
            </div>

            <div class="todo-index">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              eligendi nam et, aspernatur officia nemo, nulla rem porro tempore
              autem ut placeat enim incidunt dicta non at? Provident, laudantium
              ipsam.
            </div>

            <div class="todo-index">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              eligendi nam et, aspernatur officia nemo, nulla rem porro tempore
              autem ut placeat enim incidunt dicta non at? Provident, laudantium
              ipsam.
            </div>
          </div>
        </div>

        <TaskSubject />
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
  margin-top: 8px;
}
</style>
