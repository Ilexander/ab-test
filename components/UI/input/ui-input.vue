<template>
    <div class="relative">
        <label class="absolute bg-white px-2 rounded-xl top-[-13px] left-1.5">{{ label }}</label>
        <input ref="inputElem" :placeholder="placeholder" @blur="checkValidation" class="py-[13px] w-full rounded-md focus:border-gray-300 !focus:shadow-none outline-none !shadow-none !ring-0 bg-white border border-gray-300" :class="[validateStyles]" type="text" :value="props.modelValue" @input="handleChange">
    </div>
</template>

<script setup>
import IMask from 'imask';
import { onMounted, ref } from 'vue';

const emit = defineEmits(['update:modelValue']);
const inputElem = ref(null);

const props = defineProps({
  modelValue: { type: String, default: () => '' },
  label: { type: String, default: () => '' },
  placeholder: { type: String, default: () => '' },
  mask: { type: String, default: () => '' },
  validation: { type: Function },
});

const handleChange = ($event) => {
  emit('update:modelValue', $event.target.value);
};

// eslint-disable-next-line no-unused-expressions
const validateStyles = ref('');

const checkValidation = () => {
  if (!props?.validation) {
    validateStyles.value = '';
  }
  else {
    validateStyles.value = props.validation(props.modelValue) ? '' : '!border-red-500';
  }
};

onMounted(() => {
  if (props.mask) {
    const element = inputElem.value;
    const maskOptions = {
      mask: props.mask,
    };

    IMask(element, maskOptions);
  }
});
</script>

<style lang="scss" scoped>

</style>
