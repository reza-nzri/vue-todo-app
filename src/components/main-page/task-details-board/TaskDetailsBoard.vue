<script setup lang="ts">
import TimestampDisplay from '@/components/main-page/TimestampDisplay.vue';
import PriorityDropdown from '@/components/main-page/task-details-board/PriorityDropdown.vue';
import TaskSubject from '@/components/main-page/TaskSubject.vue';
import TaskDescription from '@/components/main-page/task-details-board/TaskDescription.vue';
</script>

<template>
    <div class="task-details-board">
        <div class="white-board">
            <div class="description-container">
                <div class="date-priority">
                    <TimestampDisplay class="timestamp-display-comp" />
                    <PriorityDropdown class="priority-dropdown-comp" />
                </div>

                <TaskSubject class="task-subject-comp" />
                <TaskDescription class="task-description-comp" />
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

.priority-dropdown-comp {
    justify-content: flex-end;
}
</style>

<style>
.task-subject-comp .subject-text {
    font-size: 22px;
}
</style>