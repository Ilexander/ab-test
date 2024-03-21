<template>
    <button class="py-[13px] max-h-[52px] px-8 border rounded-xl transition-all active:opacity-80" :class="buttonStyles">
      <slot>{{ title }}</slot>
    </button>
</template>

<script setup>
const props = defineProps({
  title: String,
  bgColor: { type: String, default: () => 'black' },
  borderColor: { type: String, default: (val) => (val?.bgColor || 'black') },
  textColor: { type: String, default: () => 'white' },
  hoverEffect: {
    type: Object,
    default: (val) => ({
      bgColor: 'futura-500',
      borderColor: val?.hoverEffect?.bgColor || 'futura-500',
      textColor: 'white',
    }),
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

</script>

<style lang="scss" scoped>

</style>
