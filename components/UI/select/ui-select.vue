<template>
    <div class="ui-select w-full max-w-[340px]">
        <div ref="selectButton" class="w-full relative border py-2 px-3 pr-9 bg-white hover:bg-gray-50 cursor-pointer transition-all" @click="handleClick" :class="buttonStateStyles">
          <div class="text-gray-400" v-if="!currentValue">{{ placeholder }}</div>
          <div class="text-black" v-else>{{ buttonLabel }}</div>
          <IconChevron class="absolute" :class="chevronStateStyle" />
        </div>
        <teleport to='body'>
            <div v-show="showDropdown" class="ui-select__list fixed bg-white border rounded-b-lg" ref="selectList">
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
});

const currentValue = ref(null);
const buttonLabel = computed(() => currentValue.value?.id || currentValue.value?.label);
const instance = getCurrentInstance();
const emits = defineEmits(['update:modelValue']);
const showDropdown = ref(false);
const selectList = ref(null);
const selectButton = ref(null);
const buttonStateStyles = computed(() => (showDropdown.value ? 'rounded-t-lg' : 'rounded-lg'));
const chevronStateStyle = computed(() => (showDropdown.value ? 'top-4 right-4 rotate-180' : 'top-4 right-4'));

const listElement = () => selectList.value;
const buttonElement = () => selectButton.value;

const getOptions = (options) => options.reduce((prev, el) => {
  const children = el?.children;

  if (Array.isArray(children) && !el.dynamicProps && !el.key) {
    return prev.concat(getOptions(children)); // If children aren't find, will return []
  }

  return prev.concat(el);
}, []);

const getSlotsList = () => {
  const slotData = instance.slots.default();
  const slotsArray = typeof slotData === 'string' ? [] : slotData;

  const options = getOptions(slotsArray);

  return options;
};

const setCurrentValue = () => {
  const value = props.modelValue;

  const options = getSlotsList();

  const currentOptionValue = options.find(option => {
    const valueEqualToValue = option?.props?.value === value;
    const valueEqualToLabel = option?.props?.label === value;

    return valueEqualToLabel || valueEqualToValue;
  });

  currentValue.value = currentOptionValue?.props;
};

const listBind = () => {
  const button = buttonElement();

  const list = listElement();
  const listBounds = button.getBoundingClientRect();
  const buttonHeight = button.clientHeight;
  const buttonWidth = button.clientWidth + 2;

  list.style.top = `${listBounds.top + buttonHeight}px`;
  list.style.left = `${listBounds.left}px`;
  list.style.width = `${buttonWidth}px`;
};

const handleClick = () => {
  showDropdown.value = !showDropdown.value;

  listBind();
};

// eslint-disable-next-line no-unused-vars
const updateValue = ({ value }) => {
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

<style lang="scss" scoped>
</style>
