<script setup></script>

<template>
  <div class="add-task-board">
    <div class="left-section">
      <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
      <h3 class="tasks">Tasks</h3>
    </div>

    <button class="add-button">
      <font-awesome-icon :icon="['fas', 'plus']" class="plus-icon" />
    </button>

    <div class="right-section">
      <font-awesome-icon icon="fa-solid fa-sort" class="icon" />
      <h3 class="sort">Sort</h3>
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
  cursor: pointer;
}

.left-section:hover,
.right-section:hover {
  animation: textAnim 5s 0 normal ease;
  transition: 0.16s;
  transform: scale(104%);
}

.left-section {
  margin-left: 10px;
}

.right-section {
  margin-right: 10px;
}

.icon {
  width: 17px;
  height: 17px;
  margin-right: 10px;
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

.sort {
  margin: 0;
}
</style>
