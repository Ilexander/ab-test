<script setup>
import { ref, computed } from 'vue';
import { preview } from '~/utils/style-directives';
import UiSelect from '../components/UI/select/ui-select.vue';
import UiInput from '../components/UI/input/ui-input.vue';
import UiSelectOption from '../components/UI/select/components/option/ui-select-option.vue';

const dialogVisible = ref(false);

const cvcCode = ref('');
const cardNumber = ref('');

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

const handleClick = () => {
  dialogVisible.value = !dialogVisible.value;
};
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

</script>

<template>
     <div class="layout-preview">
        <h1 class="layout-preview__title max-w-[473px] font-extrabold mb-6 text-5xl leading-[52px]">
            <span>Start</span> your learning journey <span>now</span> <br>
        </h1>
        <div class="layout-preview__subtitle text-2xl w-[375px] font-semibold mb-8" v-html="preview.subtitle.html">

        </div>
        <UiButton class="max-w-[273px] w-full" title="Get my plan" @click="handleClick"></UiButton>
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
