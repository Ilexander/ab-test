<script setup>
import LayoutHeader from './components/layout/header/layout-header.vue';

const styleType = 'var1';

const style = {
  var1: {
    class: 'smart',
  },
  var2: {
    class: 'learn',
  },
};

</script>

<template>
  <div class="global" :class="style[styleType].class">
    <LayoutHeader/>
    <div class="global__container">
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.global.smart {
    background-image: url('./components/UI/icons/planets-bg-second.svg');
  }
.global.learn {
  background-image: url('./components/UI/icons/planets-bg.svg');

}

.global {
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &__container {
    margin: 80px auto 0;
    max-width: 950px;
    padding: 0 15px
  }
}

</style>
