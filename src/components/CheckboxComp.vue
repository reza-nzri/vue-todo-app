<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const toggleCheckbox = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};
</script>

<template>
  <div>
    <label class="checkbox-container">
      <input type="checkbox" :checked="props.modelValue" @change="toggleCheckbox" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<style scoped>
.checkbox-container {
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: #00000000;
  border: 3px solid var(--font-color-gray);
  transition: 0.16s ease;
  border-radius: 5px;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: var(--teal-checkbox);
  border: 0px;
  height: 19px;
  width: 19px;
  margin: 0;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
  margin: -2px 0px 0px -3px;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>
