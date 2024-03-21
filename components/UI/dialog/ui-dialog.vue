<template>
    <teleport to="body">
        <Transition name="fade">
        <div v-if="visible" class=" vsTailwind ui-dialog__wrapper z-30">
        <div class="ui-dialog w-full h-full fixed top-0 start-0 z-[80] bg-black bg-opacity-50">
            <transition name="content" appear>
            <div class="ui-dialog__modal opacity-1 transition-all flex flex-col bg-white border shadow-sm rounded-xl w-11/12 lg:w-[400px]" :class="formatedSize">
                <div class="ui-dialog__content p-4">
                    <slot />
                </div>
            </div>
            </transition>
        </div>
        </div>
        </Transition>
    </teleport>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  visible: { type: Boolean, default: () => false },
  title: { type: String, default: () => '' },
  size: { type: String, default: () => 'w-7/12' }, // Size like width in tailwind
});

const formatedSize = computed(() => `!lg:${props.size}`);

</script>

<style lang="scss" scoped>

  .ui-dialog {
    &__wrapper {
      position: relative;
    }

      &__modal {
        margin: 10px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-height: 0;
        height: fit-content;
        max-height: 80vh;
        overflow: hidden;
      }

      &__content {
          min-height: 0;
          height: 100%;
          overflow: auto;

        &::-webkit-scrollbar {
          width: 6px;
          height: 6px;
          background-color: #f5f5f5;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: #d9d9d9bf;
        }
        &::-webkit-scrollbar-track {
          background-color: #f5f5f5;
        }
      }
  }

  @media (max-width: 650px) {

    .ui-dialog {
      &__modal {
        top: 50%;
      }
    }

  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .content-enter-active,
  .content-leave-active {
    transition: transform 0.4s;
  }

  .content-enter-from,
  .content-leave-to {
      transform: translate(-50%, -50%) scale(0.95);
  }

  </style>
