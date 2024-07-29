<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import { useTaskStore } from '@/store/TaskStore';

const taskStore = useTaskStore();

// # Add Task Button
function addTask() {
  try {
    taskStore.addTask();
    sortTasks();
  } catch (error) {
    console.error('Error adding task:', error);
  }
}

// # Sort DropDown
const currentSortField = ref<'dueDateTime' | 'priority' | 'subject'>('dueDateTime');
const currentSortOrder = ref<'asc' | 'desc'>('desc');

// ## Default sorting function for initial load
const defaultSort = () => {
  try {
    sortTasks(); // Initial sort
  } catch (error) {
    console.error('Error during default sort:', error);
  }
};

// ## Toggle sort order function
const toggleSortOrder = () => {
  try {
    currentSortOrder.value = currentSortOrder.value === 'asc' ? 'desc' : 'asc';
    sortTasks();
  } catch (error) {
    console.error('Error toggling sort order:', error);
  }
};

// ## Update sort function
const sortTasks = () => {
  try {
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
        sortOrder === 'asc'
          ? a.subject.localeCompare(b.subject)
          : b.subject.localeCompare(a.subject),
    };

    taskStore.tasks.sort(sortFunc[sortBy]);
  } catch (error) {
    console.error('Error sorting tasks:', error);
  }
};

// ## Helper function to determine priority order
const priorityOrder = (priority: 'high' | 'medium' | 'low') => {
  const order = { high: 1, medium: 2, low: 3 };
  return order[priority];
};

// ## Function to change order by asc/desc on icon click
const changeOrderBy = () => {
  try {
    toggleSortOrder();
  } catch (error) {
    console.error('Error changing sort order:', error);
  }
};

// Watch for changes in taskStore.tasks and sort
watchEffect(() => {
  try {
    sortTasks();
  } catch (error) {
    console.error('Error watching taskStore.tasks:', error);
  }
});

// ## Apply default sort on component mount
onMounted(() => {
  try {
    defaultSort();
  } catch (error) {
    console.error('Error during component mount:', error);
  }
});
</script>

<template>
  <div class="add-task-bar">
    <div class="add-task-bar__left-section">
      <font-awesome-icon :icon="['fas', 'tasks']" class="add-task-bar__task-icon" />
      <h3 class="tasks">Tasks</h3>
    </div>

    <button class="add-task-bar__add-button" @click="addTask">
      <font-awesome-icon :icon="['fas', 'plus']" class="add-task-bar__plus-icon" />
    </button>

    <div class="add-task-bar__right-section">
      <font-awesome-icon
        icon="fa-solid fa-sort "
        class="right-section__change-sort scale-animation"
        @click="changeOrderBy"
      />
      <select
        class="right-section__sort-select move-animation"
        v-model="currentSortField"
        @change="toggleSortOrder"
      >
        <option class="option1" value="dueDateTime">Date</option>
        <option class="option2" value="priority">Priority</option>
        <option class="option3" value="subject">Subject</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.add-task-bar {
  margin-top: 25px;
  min-height: 38px;
  max-height: 38px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 13px;
  color: var(--font-color-gray);
  background-color: white !important;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.add-task-bar__left-section,
.add-task-bar__right-section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.move-animation:hover {
  -webkit-animation: textAnim 5s 0 normal ease;
  animation: textAnim 5s 0 normal ease;
  -webkit-transition: 0.16s;
  -o-transition: 0.16s;
  transition: 0.16s;
  -webkit-transform: scale(102%);
  -ms-transform: scale(102%);
  transform: scale(102%);
}

.scale-animation:hover {
  -webkit-animation: textAnim 5s 0 normal ease;
  animation: textAnim 5s 0 normal ease;
  -webkit-transition: 0.16s;
  -o-transition: 0.16s;
  transition: 0.16s;
  -webkit-transform: scale(117%);
  -ms-transform: scale(117%);
  transform: scale(117%);
}

.add-task-bar__left-section {
  margin-left: 10px;
}

/* Sort DropDown */
.add-task-bar__right-section {
  margin-right: 10px;
}

.add-task-bar__task-icon {
  width: 17px;
  height: 17px;
  margin-right: 10px;
}

.right-section__change-sort {
  cursor: pointer;
  margin-right: 10px;
}

.right-section__sort-select {
  outline: none;
  border-radius: var(--box-radius-size);
  cursor: pointer;
  color: var(--font-color-gray);
  padding: 4px;
  width: 80px;
  position: relative;
}

/* Order Dropdown menu */
.right-section__sort-select:focus {
  border-color: #ad128c;
  box-shadow: 0 0 5px #08e1ed;
  background-color: rgba(255, 0, 0, 0.08) !important;
  width: 80px !important;
}
.right-section__sort-select:hover {
  border-color: #da08c271;
}
.right-section__sort-select option {
  background-color: #fff;
  font-size: 14px;
  width: 80px;
}
.right-section__sort-select option:checked {
  background-color: rgba(255, 6, 6, 0.476);
  color: #fff;
}

.add-task-bar__add-button {
  background-color: var(--congress-blue);
  color: white;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  -webkit-transform: translateY(18px);
  -ms-transform: translateY(18px);
  transform: translateY(18px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
}

.add-task-bar__add-button .add-task-bar__plus-icon {
  height: 15px;
}

.add-task-bar__add-button:hover {
  background-color: var(--dark-congress-blue);
  -webkit-animation: buttonAnim 1s 0 normal ease;
  animation: buttonAnim 1s 0 normal ease;
  -webkit-transform: scale(105%) translateY(18px);
  -ms-transform: scale(105%) translateY(18px);
  transform: scale(105%) translateY(18px);
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}

@-webkit-keyframes myAnim {
  0% {
    -webkit-transform: scale(100%);
    transform: scale(100%);
  }

  100% {
    -webkit-transform: scale(108%);
    transform: scale(108%);
  }
}

@keyframes myAnim {
  0% {
    -webkit-transform: scale(100%);
    transform: scale(100%);
  }

  100% {
    -webkit-transform: scale(108%);
    transform: scale(108%);
  }
}
</style>
