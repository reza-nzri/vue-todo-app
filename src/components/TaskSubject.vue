<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  subject: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <div class="task-subject">
      <p class="subject-text">{{ props.subject }}</p>
    </div>
  </div>
</template>

<style scoped>
.subject-text {
  margin: 15px 0px 0px 0px;
}
</style>
