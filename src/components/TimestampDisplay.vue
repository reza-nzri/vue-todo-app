<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  dueDateTime: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <div class="timestamp-display">
      <p>{{ props.dueDateTime }}</p>

      <font-awesome-icon
        icon="fa-solid fa-calendar-days"
        class="calender icon"
      />
    </div>
  </div>
</template>

<style scoped>
.timestamp-display {
  display: flex;
  margin: 0;
}

.icon {
  height: 10px;
  width: 10px;
  margin-left: 8px;
}
</style>
