<template>
    <div class="layout-header">
        <a href="/">
            <component :is="logoType"></component>
        </a>
    </div>
</template>

<script setup>
import iconLogo1 from '~/components/UI/icons/icon-logo-1.vue';
import iconLogo2 from '~/components/UI/icons/icon-logo-2.vue';

const designType = '1';

const logos = {
  1: iconLogo1,
  2: iconLogo2,
};

const logoType = logos[designType];

</script>

<style lang="scss" scoped>

.layout-header {
    margin: 0 auto;
    padding: 15px;
    max-width: 1190px;
}

</style>
