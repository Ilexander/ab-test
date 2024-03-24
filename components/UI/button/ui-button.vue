<template>
    <button class="py-[13px] max-h-[52px] px-8 border rounded-xl transition-all active:opacity-80" :class="[buttonStyles, disabledStyle]">
      <slot>{{ title }}</slot>
    </button>
</template>

<script setup>
import { computed } from 'vue';
import style from './style';

const props = defineProps({
  title: String,
  disabled: { type: Boolean, default: () => false },
  bgColor: { type: String, default: () => style.bgColor },
  borderColor: { type: String, default: (val) => (val?.bgColor || style.borderColor) },
  textColor: { type: String, default: () => style.textColor },
  hoverEffect: {
    type: Object,
    default: (val) => style.hoverEffect(val),
  },
  activeEffect: {
    type: Object,
    default: (val) => ({
      bgColor: 'gray-400',
      borderColor: val?.activeEffect?.bgColor || 'gray-400',
      textColor: 'white',
    }),
  },
});

// Default styles
const defaultStyle = `bg-${props.bgColor} border-${props.borderColor} text-${props.textColor}`;

// Hover effect styles
const hoverEffectStyles = `hover:bg-${props.hoverEffect.bgColor} hover:border-${props.hoverEffect.borderColor} hover:text-${props.hoverEffect.textColor}`;

// Active effect styles
const activeEffectStyles = `active:bg-${props.activeEffect.bgColor} active:border-${props.activeEffect.borderColor} active:text-${props.activeEffect.textColor}`;

// All styles
const buttonStyles = [defaultStyle, hoverEffectStyles, activeEffectStyles];

const disabledStyle = computed(() => (props.disabled ? 'pointer-events-none opacity-50' : ''));

</script>

<style lang="scss" scoped>

</style>
