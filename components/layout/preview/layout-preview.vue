<script setup>
import style from './style';

</script>

<template>
     <div class="layout-preview" :class="style.global.class">
        <h1 class="layout-preview__title max-w-[473px] font-extrabold mb-6 text-5xl leading-[52px]">
            <span>Start</span> your learning journey <span>now</span> <br>
        </h1>
        <div class="layout-preview__subtitle text-2xl w-[375px] font-semibold mb-8" v-html="style.subtitle.html">

        </div>
        <UiButton class="max-w-[273px] w-full" title="Get my plan" @click="handleClick"></UiButton>
    </div>
</template>

<style lang="scss">

.smart {
    .layout-preview {
        color: white;
        &__title {
            text-transform: uppercase;
            span {
                color: #4EAAFF;
            }
        }

        &__subtitle {
            span {
                font-weight: 900;

                span {
                    color: #4EAAFF;
                }
            }
        }
    }
}

.layout-preview {
    &__subtitle {
        span {
            font-weight: 900;

            span {
                color: #FF8D24;
            }
        }
    }
}

</style>
