<template>
    <div class="layout-header">
        <a href="/">
            <div class="layout-header__logo" aria-label="Logo"></div>
        </a>
    </div>
</template>

<style lang="scss" scoped>

.layout-header {
    margin: 0 auto;
    padding: 15px;
    max-width: 1190px;
    padding: 10px 0;
    &__logo {
        margin-right: auto;
        height: 40px;
        width: 179px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('../../UI/icons/icon-logo-1.svg');
    }
}

.smart {
    .layout-header {
        &__logo {
            background-image: url('../../UI/icons/icon-logo-2.svg');
        }
    }
}

</style>
