<template>
  <div class="global">
    <LayoutHeader/>
    <div class="global__container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import LayoutHeader from './components/layout/header/layout-header.vue';

</script>

<style lang="scss" scoped>

.global {
  height: 100vh;
  background-image: url('./components/UI/icons/planets-bg.svg');

  &__container {
    margin: 80px auto 0;
    max-width: 950px;
    padding: 0 15px
  }
}

</style>
