<script setup lang="ts">
import { ref } from 'vue';

const currentPriority = ref('high');

const updatePriority = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    currentPriority.value = target.value;
};
</script>

<template>
    <div>
        <div class="priority-dropdown">
            <div class="inside-box">
                <p class="priority-text">Priority</p>

                <div class="combobox">
                    <select v-model="currentPriority" @change="updatePriority" class="priority-select">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <p class="combo-arrow">></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.priority-dropdown {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>