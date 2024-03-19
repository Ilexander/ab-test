<template>
    <div class="relative">
        <label class="absolute bg-white px-2 rounded-xl top-[-13px] left-1.5">{{ label }}</label>
        <input class="py-[13px] w-full rounded-md focus:border-gray-300 !focus:shadow-none !shadow-none !ring-0 bg-white border border-gray-300" type="text" :value="props.modelValue" @input="handleChange">
    </div>
</template>

<script setup>

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: { type: String, default: () => '' },
  label: { type: String, default: () => '' },
});

const handleChange = ($event) => {
  emit('update:modelValue', $event.target.value);
};

</script>

<style lang="scss" scoped>

</style>
