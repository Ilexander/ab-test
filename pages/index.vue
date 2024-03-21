<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex">
        <div>
            <h1 class="max-w-[473px] font-extrabold mb-6 text-5xl leading-[52px]">
                Start your learning journey now <br>
            </h1>
            <div class="text-2xl w-[375px] font-semibold mb-8">
                Get a <span class="font-extrabold"><span class="text-orange-500">Planet</span>Learn</span> plan to rock self-learning
            </div>
            <UiButton class="max-w-[273px] w-full" title="Get my plan" bgColor="black" textColor="white" @click="handleClick"></UiButton>
        </div>
        <div class="relative max-w-[473px] w-full bg-white border rounded-3xl p-6">
            <IconAsteroid class="absolute top-[-55px] right-1" />
            <div class="mb-6 flex items-center justify-between">
                <div>
                    <h5 class="text-2xl font-extrabold">3-day trial for <span class="text-orange-500">$0.99</span></h5>
                    <div class="text-xl font-semibold">
                        Then $9.99
                    </div>
                    <div class="line-through text-gray-400 font-semibold">
                        $39.99/week
                    </div>
                </div>
                <LayoutTimer />
            </div>

            <ul class="mb-6">
                <li class="flex items-center mb-4">
                    <IconStar class="mr-2" />
                    <p>Exclusive access to <strong class="text-orange-500">350+</strong> learning programs</p>
                </li>
                <li class="flex items-center mb-4">
                    <IconStar class="mr-2" />
                    <p>Personalized course plan</p>
                </li>
                <li class="flex items-center mb-4">
                    <IconStar class="mr-2" />
                    <p>Comfy learning schedule made by you</p>
                </li>
                <li class="flex items-center mb-4">
                    <IconStar class="mr-2" />
                    <p><strong class="text-orange-500">24/7</strong> tutor support in a secure chat</p>
                </li>
                <li class="flex items-center">
                    <IconStar class="mr-2" />
                    <p>Lifetime access to materials</p>
                </li>
            </ul>
            <div class="text-futura-500 w-full mb-6 bg-white border py-3 flex items-center justify-center rounded-2xl">
               <IconLockClosed class="mr-2"/>  Safe & secure payment
            </div>
            <p class="text-xs text-gray-400 text-center font-normal">
                $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms .
            </p>
        </div>
        <UiDialog v-model:visible="dialogVisible" size="w-[400px]">
          <div class="flex flex-col items-center">
            <div class="text-[21px] font-bold mb-5">
              Payment method
            </div>
            <UiButton class="w-full mb-4" bgColor="amber-400" textColor="black" :hoverEffect="{bgColor: 'amber-300', borderColor: 'amber-300'}">
              <div class="flex font-bold items-center text-[16px] justify-center uppercase">
                <IconPaypal class="mr-2" />  Buy now
              </div>
            </UiButton>

            <UiButton class="mx-2 w-full mb-3" bgColor="white" textColor="black" borderColor="gray-200" :hoverEffect="{bgColor: 'black', textColor: 'white', borderColor: 'black'}">
              <div class="flex font-bold items-center text-[16px] justify-center uppercase">
                <IconGooglePay class="mr-2" /> Pay
              </div>
            </UiButton>

            <div class="relative w-full mb-4">
              <div class="h-[1px] absolute z-1 top-2 bg-gray-300 w-full"></div>
              <div class="text-center z-2 relative text-gray-400 font-semibold w-fit mx-auto px-2 text-[12px] bg-white">OR</div>
            </div>
            <UiInput class="w-full mb-9" v-model="cardNumber" :validation="validateCard" label="Card number" placeholder="••••  ••••  ••••  ••••" mask="0000 0000 0000 0000"/>
            <div class="flex items-center mb-5">
                <UiSelect v-model="selectedMonth" class="mr-2" label="Month" placeholder="December">
                    <template #default>
                        <UiSelectOption v-for="(option, index) in months" :label="option.label" :key="index" />
                    </template>
                </UiSelect>
                <UiSelect v-model="selectedYear" class="mr-2" label="Year" placeholder="2010">
                    <template #default>
                        <UiSelectOption v-for="(option, index) in years" :label="option.label" :key="index" />
                    </template>
                </UiSelect>
                <UiInput v-model="cvcCode" :validation="validateCvc" label="cvc" placeholder="•••" mask="000"/>
            </div>
            <UiButton @click="handleClick" class="max-w-[273px] w-full font-bold" title="Submit" bgColor="gray-400" textColor="white" :disabled="formDataNotValue"></UiButton>
            <UiButton @click="handleClick" class="max-w-[273px] w-full font-bold" title="Close" bgColor="white" textColor="gray-400"
            :hoverEffect="{bgColor: 'white', borderColor: 'white', textColor: 'gray-500'}"
            :activeEffect="{bgColor: 'white', borderColor: 'white', textColor: 'gray-300'}"></UiButton>
          </div>
        </UiDialog>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import IconAsteroid from '../components/UI/icons/icon-asteroid.vue';
import IconLockClosed from '../components/UI/icons/icon-lock-closed.vue';
import IconStar from '../components/UI/icons/icon-star.vue';
import LayoutTimer from '../components/layout/timer/layout-timer.vue';
import UiSelect from '../components/UI/select/ui-select.vue';
import UiInput from '../components/UI/input/ui-input.vue';
import UiSelectOption from '../components/UI/select/components/option/ui-select-option.vue';

// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!
// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!
// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!
// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!
// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!
// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!
// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!
// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!
// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!
// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!
// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!
// Надо добавить валидацию на текст!!!!!!!!!!!!!!!!

const months = [
  {
    label: 'January',
  },
  {
    label: 'February',
  },
  {
    label: 'March',
  },
  {
    label: 'April',
  },
  {
    label: 'May',
  },
  {
    label: 'June',
  },
  {
    label: 'July',
  },
  {
    label: 'August',
  },
  {
    label: 'September',
  },
  {
    label: 'November',
  },
  {
    label: 'October',
  },
];

const years = [
  {
    label: '2010',
  },
  {
    label: '2011',
  },
  {
    label: '2012',
  },
  {
    label: '2013',
  },
  {
    label: '2014',
  },
  {
    label: '2015',
  },
];

const cvcCode = ref('');
const cardNumber = ref('');
const selectedMonth = ref('');
const selectedYear = ref('');

const dialogVisible = ref(false);

const handleClick = () => {
  dialogVisible.value = !dialogVisible.value;
};

const validateCvc = () => {
  const { value } = cvcCode;

  if (value.length !== 3) return false;
  return true;
};

const validateCard = () => {
  const { value } = cardNumber;

  if (value.length !== 20) return false;
  return true;
};

const formDataNotValue = computed(() => !validateCvc() || !validateCard());

</script>

<style lang="scss" scoped>

</style>
