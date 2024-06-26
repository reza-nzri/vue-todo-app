<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    subject: {
        type: String,
        required: true
    }
});

console.log("in TaskSubject: " + props.subject);
</script>

<template>
    <div>
        <div class="task-subject">
            <!-- <p class="subject-text">Subject of this ToDo</p> -->
            <p class="subject-text">{{ subject }}</p>
        </div>
    </div>
</template>

<style scoped>
.subject-text {
    margin: 15px 0px 0px -5px;
    font-size: 14px
}
</style>