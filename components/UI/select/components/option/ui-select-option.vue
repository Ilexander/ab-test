<template>
    <div class="ui-select__item flex items-center justify-between transition-all hover:bg-gray-50 cursor-pointer py-2 px-3" :class="activeStateStyles" @click="handleClick">
        <slot>{{ optionTitle }}</slot> <IconCheck v-if="isOptionActive" />
    </div>
</template>

<script setup>
import {
  getCurrentInstance, computed,
} from 'vue';
import IconCheck from '~/components/UI/icons/icon-check.vue';

const props = defineProps({
  label: { type: String, default: () => '' },
  value: { type: String, default: () => '' },
});

const selectInstance = getCurrentInstance().parent;
const optionTitle = computed(() => props?.label || props.value);
const optionValue = computed(() => props?.value || props.label);
const selectValue = computed(() => selectInstance.props.modelValue);
const isOptionActive = computed(() => optionValue.value === selectValue.value);
const activeStateStyles = computed(() => (isOptionActive.value ? 'bg-futura-500 text-white pointer-events-none' : ''));

const handleClick = () => {
  const { updateValue } = selectInstance.devtoolsRawSetupState;

  updateValue(optionValue.value);
};

</script>

<style lang="scss">
.ui-select__list {

  .ui-select__item {

    &:not(:first-child) {
      border-top: 1px solid #eee
    }

    &:last-child {
      border-radius: 0px 0px 6px 6px;
    }
  }
}

</style>
