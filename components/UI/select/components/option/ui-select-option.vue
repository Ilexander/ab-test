<template>
    <div @click="handleClick">
        <slot>{{ optionTitle }}</slot>
    </div>
</template>

<script setup>
import {
  getCurrentInstance, computed, onMounted,
} from 'vue';

const props = defineProps({
  label: { type: String, default: () => '' },
  value: { type: String, default: () => '' },
});

const optionTitle = computed(() => props?.label || props.value);
const optionValue = computed(() => props?.value || props.label);

const instance = getCurrentInstance().parent;

onMounted(() => {
//   console.log(instance);
});

const handleClick = () => {
  const { updateValue } = instance.devtoolsRawSetupState;

  updateValue(optionValue);
};

</script>

<style lang="scss" scoped>

</style>
