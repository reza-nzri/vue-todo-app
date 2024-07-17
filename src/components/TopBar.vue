<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTaskStore } from '@/store/TaskStore';

const taskStore = useTaskStore();

// # Add Task Button
const emits = defineEmits(['add-task']);

function addTask() {
  emits('add-task');
}

// # Sort DropDown
const currentSortField = ref<'dueDateTime' | 'priority' | 'subject'>('dueDateTime');
const currentSortOrder = ref<'asc' | 'desc'>('desc');

// ## Default sorting function for initial load
const defaultSort = () => {
  taskStore.tasks.sort(
    // If negative result: (b.dueDateTime is earlier than a.dueDateTime), b will be placed after a in the array.
    (a, b) => new Date(b.dueDateTime).getTime() - new Date(a.dueDateTime).getTime()
  );
};

// ## Toggle sort order function
const toggleSortOrder = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const sortField = target.value as 'dueDateTime' | 'priority' | 'subject';

  if (currentSortField.value === sortField) {
    // Toggle sort order if the same field is selected
    currentSortOrder.value = currentSortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    // Set to descending order by default when a new field is selected
    currentSortOrder.value = 'desc';
    currentSortField.value = sortField;
  }

  updateSort();
};

// ## Update sort function
const updateSort = () => {
  const sortBy = currentSortField.value;
  const sortOrder = currentSortOrder.value;

  const sortFunc: { [key: string]: (a: any, b: any) => number } = {
    dueDateTime: (a, b) =>
      sortOrder === 'asc'
        ? new Date(a.dueDateTime).getTime() - new Date(b.dueDateTime).getTime()
        : new Date(b.dueDateTime).getTime() - new Date(a.dueDateTime).getTime(),
    priority: (a, b) =>
      sortOrder === 'asc'
        ? priorityOrder(a.priority) - priorityOrder(b.priority)
        : priorityOrder(b.priority) - priorityOrder(a.priority),

    subject: (a, b) =>
      sortOrder === 'asc' ? a.subject.localeCompare(b.subject) : b.subject.localeCompare(a.subject),
  };

  taskStore.tasks.sort(sortFunc[sortBy]);
};

// ## Helper function to determine priority order
const priorityOrder = (priority: 'high' | 'medium' | 'low') => {
  const order = { high: 1, medium: 2, low: 3 };
  return order[priority];
};

// ## Apply default sort on component mount
onMounted(() => {
  defaultSort();
});
</script>

<template>
  <div class="add-task-board">
    <div class="left-section">
      <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
      <h3 class="tasks">Tasks</h3>
    </div>

    <button class="add-button" @click="addTask">
      <font-awesome-icon :icon="['fas', 'plus']" class="plus-icon" />
    </button>

    <div class="right-section">
      <font-awesome-icon icon="fa-solid fa-sort" class="icon change-sort" @click="changeOrderBy" />
      <select class="sort-select" v-model="currentSortField" @change="toggleSortOrder">
        <option value="dueDateTime">📅 Date</option>
        <option value="priority">🎯 Priority</option>
        <option value="subject">🔠 Subject</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.add-task-board {
  margin-top: 25px;
  min-height: 38px;
  max-height: 38px;
  background-color: white !important;
  font-size: 13px;
  color: var(--font-color-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left-section,
.right-section {
  display: flex;
  align-items: center;
}

.right-section:hover {
  animation: textAnim 5s 0 normal ease;
  transition: 0.16s;
  transform: scale(104%);
}

.left-section {
  margin-left: 10px;
}

/* Sort DropDown */
.right-section {
  margin-right: 10px;
}

.icon {
  width: 17px;
  height: 17px;
  margin-right: 10px;
}

.change-sort {
  cursor: pointer;
}

.sort {
  margin-right: 10px;
}

.sort-select {
  outline: none;
  border-radius: var(--box-radius-size);
  cursor: pointer;
  color: var(--font-color-gray);
  padding: 4px;
}

.add-button {
  background-color: var(--congress-blue);
  color: white;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  transform: translateY(18px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.add-button .plus-icon {
  height: 15px;
}

.add-button:hover {
  background-color: var(--dark-congress-blue);
  animation: buttonAnim 1s 0 normal ease;
  transform: scale(105%) translateY(18px);
  transition: 0.2s;
}

@keyframes myAnim {
  0% {
    transform: scale(100%);
  }

  100% {
    transform: scale(108%);
  }
}

.tasks {
  margin: 0;
}
</style>
