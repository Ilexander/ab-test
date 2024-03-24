<script setup>
import style from './style';

</script>

<template>
    <div class="layout-header">
        <a href="/">
            <component :is="style.header.logo"></component>
        </a>
    </div>
</template>

<style lang="scss" scoped>

.layout-header {
    margin: 0 auto;
    padding: 15px;
    max-width: 1190px;
}

</style>
