<template>
    <div class="bg-black relative text-center w-40 transition-all rounded-2xl py-3.5" :class="timerAlertStyle">

        <div class="bg-futura-500 absolute border-futura-500 z-1 rounded-2xl top-0 left-0 h-full transition-all" :style="{width: timerWidthPercent, opacity: millisecondsToCount <= 4000 ? '0': '1'}"></div>
        <div class="text-white text-2xl z-2 relative">{{ displayTimerValue }}</div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const minutes = 3;
const milliseconds = (minutes * 60 * 1000);
const millisecondsToCount = ref(milliseconds);
const displayTimerValue = ref(`${minutes}:00`);
const is10SecondsLeft = computed(() => millisecondsToCount.value <= 10000);
const timerAlertStyle = computed(() => (is10SecondsLeft.value && millisecondsToCount.value !== 0 ? 'border border-red-500 shadow-md shadow-red-500' : ''));
const getTimerPercent = () => Math.round((millisecondsToCount.value / milliseconds) * 100);
const timerWidthPercent = computed(() => `${getTimerPercent()}%`);

const formatTime = () => {
  const timeInMillis = millisecondsToCount.value;

  // Calculate minutes and seconds
  const min = Math.floor(timeInMillis / (60 * 1000));
  const sec = Math.floor((timeInMillis % (60 * 1000)) / 1000);

  // Format output
  const formattedTime = `${min}:${sec < 10 ? `0${sec}` : sec}`;

  displayTimerValue.value = formattedTime;
};
// Initiates the timer via interval
const initTimer = () => {
  const timerInterval = setInterval(() => {
    millisecondsToCount.value -= 1000;
    formatTime();

    // If time is expired, clears interval
    if (millisecondsToCount.value <= 0) clearInterval(timerInterval);
  }, 1000);
};

onMounted(() => {
  initTimer();
});

</script>

<style lang="scss" scoped>

</style>
