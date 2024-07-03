<template>
  <div>
    <div class="task-subject">
      <p class="subject-text">{{ subject }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["subject"]);
</script>

<style scoped>
.subject-text {
  margin: 15px 0px 0px -5px;
  font-size: 14px;
}
</style>
