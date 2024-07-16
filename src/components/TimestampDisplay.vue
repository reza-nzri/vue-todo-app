<script setup lang="ts">
import { defineProps, computed, onMounted, watch } from 'vue';
import { useTaskStore } from '@/store/TaskStore';

interface Props {
  dueDateTime: string;
  id: string;
}

const props = defineProps<Props>();
const taskStore = useTaskStore();

const minDate = computed(() => {
  const now = new Date();
  return now.toISOString().slice(0, 16);
});

const formatForInput = (dateString: string): string => {
  try {
    if (!dateString) return '';

    const [date, time] = dateString.split(' - ');
    const [year, month, day] = date.split('.'); // Correct the order to year, month, day
    const formattedDate = `${year}-${month}-${day}T${time}`;
    console.log('Formatted for input:', formattedDate);
    return formattedDate;
  } catch (error) {
    console.error('Error formatting date for input:', error);
    return '';
  }
};

const updateDueDate = (event: Event) => {
  try {
    const target = event.target as HTMLInputElement;
    const newDueDate = target?.value;

    if (!newDueDate) return;

    // Format date for display
    const date = new Date(newDueDate);
    const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} - ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    console.log('Formatted date for store:', formattedDate);

    // Update the task in the store
    taskStore.updateDueDate(props.id, formattedDate);
  } catch (error) {
    console.error('Error updating due date:', error);
  }
};

onMounted(() => {
  console.log('Component mounted with dueDateTime:', props.dueDateTime);
});

watch(
  () => props.dueDateTime,
  (newVal, oldVal) => {
    console.log(`Due date changed from ${oldVal} to ${newVal}`);
  }
);
</script>

<template>
  <div>
    <div class="timestamp-display">
      <p>{{ props.dueDateTime }}</p>

      <input
        type="datetime-local"
        id="input-calender"
        name="input-calender"
        :min="minDate"
        :value="formatForInput(props.dueDateTime)"
        @input="updateDueDate"
        style="
          font-family: var(--global-font);
          color: var(--font-color-gray);
          border: none;
          outline: none;
        "
      />
    </div>
  </div>
</template>

<style scoped>
.timestamp-display {
  display: flex;
  margin: 0;
}

#input-calender {
  margin: -5px 0px 0px 0px;
  height: 20px;
  font-size: 13px;
}
</style>
