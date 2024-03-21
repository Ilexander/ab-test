<template>
    <div class="ui-select w-full max-w-[340px]">
        <div ref="selectButton" class="w-full relative border py-3 px-3 pr-9 bg-white hover:bg-gray-50 cursor-pointer transition-all" @click="handleClick" :class="buttonStateStyles">
          <div class="absolute top-[-13px] bg-white px-1 left-2" v-if="label">{{ label }}</div>
          <div class="text-gray-400" v-if="!currentValue">{{ placeholder }}</div>
          <div class="text-black" v-else>{{ buttonLabel }}</div>
          <IconChevron class="absolute" :class="chevronStateStyle" />
        </div>
        <teleport to='body'>
            <div v-show="showDropdown" class="ui-select__list z-50 fixed bg-white border rounded-b-lg" ref="selectList">
                <slot />
            </div>
        </teleport>
    </div>
</template>

<script setup>
import {
  ref, onMounted, onBeforeUnmount, getCurrentInstance, watch, computed,
} from 'vue';
import IconChevron from '../icons/icon-chevron.vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: { type: String, default: () => '' },
  placeholder: { type: String, default: () => 'Select' },
  label: { type: String, default: () => '' },
});

const emits = defineEmits(['update:modelValue']);
const currentValue = ref(null);
const buttonLabel = computed(() => currentValue.value?.id || currentValue.value?.label);
const instance = getCurrentInstance();
const showDropdown = ref(false);
const selectList = ref(null);
const selectButton = ref(null);
// Styles for the button that change when the value of showDropdown is changed
const buttonStateStyles = computed(() => (showDropdown.value ? 'rounded-t-lg' : 'rounded-lg'));
const chevronStateStyle = computed(() => (showDropdown.value ? 'top-5 right-4 rotate-180' : 'top-5 right-4'));
//

// The method get all slots with the expected props
const getSlotsList = () => {
  const slotData = instance.slots.default();
  const slotsArray = typeof slotData === 'string' ? [] : slotData;

  const getOptions = (options) => options.reduce((prev, el) => {
    const children = el?.children;

    if (Array.isArray(children) && !el.dynamicProps && !el.key) {
      return prev.concat(getOptions(children)); // If children aren't find, will return []
    }

    return prev.concat(el);
  }, []);

  const options = getOptions(slotsArray);

  return options;
};
//

// The method sets "currentValue" by option which has the same value as our "modelValue"
const setCurrentValue = () => {
  const value = props.modelValue;

  const options = getSlotsList();

  // Looking for the right option by value or label in the array of options
  const currentOptionValue = options.find(option => {
    const valueEqualToValue = option?.props?.value === value;
    const valueEqualToLabel = option?.props?.label === value;

    return valueEqualToLabel || valueEqualToValue;
  });

  currentValue.value = currentOptionValue?.props;
};

// List element binding by button position at window
const listElement = () => selectList.value;
const buttonElement = () => selectButton.value;

const listBind = () => {
  const button = buttonElement();

  const list = listElement();
  const listBounds = button.getBoundingClientRect();
  const buttonHeight = button.clientHeight;
  const buttonBorderWidth = 2;
  const buttonWidth = button.clientWidth + buttonBorderWidth;

  list.style.top = `${listBounds.top + buttonHeight}px`;
  list.style.left = `${listBounds.left}px`;
  list.style.width = `${buttonWidth}px`;
};
//

// Click on the select button
const handleClick = () => {
  showDropdown.value = !showDropdown.value;

  listBind();
};
//

// The incapsulated update value signature for the control select value, if you want to change its name you need to change it in the option component
// !!! ui-select-option.vue has dependecy of this method in its structure
// eslint-disable-next-line no-unused-vars
const updateValue = (value) => { // Actually we can use it in the future if we want to add a clear button
  emits('update:modelValue', value);
  showDropdown.value = !showDropdown.value;
};

watch(
  () => props.modelValue,
  () => {
    setCurrentValue();
  },
  { immediate: true },
);

onMounted(() => {
  window.addEventListener('resize', listBind);
  window.addEventListener('scroll', listBind);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', listBind);
  window.removeEventListener('scroll', listBind);
});

</script>

<style lang="scss">

.ui-select__list {
  max-height: 300px;
  overflow: auto;
  &::-webkit-scrollbar {
      width: 3px;
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 50%;
      background-color: #dedede;
    }
    &::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }
}

</style>
