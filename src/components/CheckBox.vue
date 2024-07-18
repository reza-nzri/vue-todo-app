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
  <label class="checkbox-comp">
    <input type="checkbox" :checked="props.modelValue" @change="toggleCheckbox" />
    <span class="checkmark-icon"></span>
  </label>
</template>

<style scoped>
.checkbox-comp {
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-comp input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

.checkmark-icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: #00000000;
  border: 3px solid var(--font-color-gray);
  -webkit-transition: 0.16s ease;
  transition: 0.16s ease;
  border-radius: 5px;
}

.checkbox-comp input:checked ~ .checkmark-icon {
  background-color: var(--teal-checkbox);
  border: 0px;
  height: 19px;
  width: 19px;
}

.checkmark-icon:after {
  content: '';
  position: absolute;
  display: none;
  margin: -2px 0px 0px -3px;
}

.checkbox-comp input:checked ~ .checkmark-icon:after {
  display: block;
}

.checkbox-comp .checkmark-icon:after {
  left: 9px;
  top: 5px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
