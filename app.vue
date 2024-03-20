<template>
  <div class="flex items-center flex-col justify-center m-5">
    <h2 class="mb-3 text-3xl font-bold">Buttons</h2>
    <div class="flex items-center justify-center w-full mb-9">
      <UiButton class="max-w-[273px] w-full" title="Get my plan" bgColor="black" textColor="white"></UiButton>

      <UiButton class="max-w-[304px] mx-2 w-full" bgColor="white" textColor="black" borderColor="gray-200" :hoverEffect="{bgColor: 'black', textColor: 'white', borderColor: 'black'}">
        <div class="flex font-bold items-center text-[16px] justify-center uppercase">
          <IconGooglePay class="mr-2" /> Pay
        </div>
      </UiButton>

      <UiButton class="max-w-[304px] w-full" bgColor="amber-400" textColor="black" :hoverEffect="{bgColor: 'amber-300', borderColor: 'amber-300'}">
        <div class="flex font-bold items-center text-[16px] justify-center uppercase">
          <IconPaypal class="mr-2" />  Buy now
        </div>
      </UiButton>
    </div>
    <h2 class="mb-3 text-3xl font-bold">Input</h2>
    <div class="flex items-center w-full justify-center">
      <UiInput class="max-w-[273px] w-full" v-model="value" label="Test"/>
      <UiInput class="max-w-[273px] mx-2 w-full" v-model="value" label="Test"/>
      <UiInput class="max-w-[273px] w-full" v-model="value" label="Test"/>
    </div>
    <h2 class="mb-3 text-3xl mt-5 font-bold">Dialog</h2>
    <div class="flex items-center w-full justify-center">
      <UiButton class="max-w-[273px] w-full" title="Get my plan" bgColor="black" textColor="white" @click="handleClick"></UiButton>
      <UiDialog v-model:visible="dialogVisible" size="w-[400px]">
        <div class="flex flex-col items-center">
          <div class="text-[21px] font-bold mb-5">
            Payment method
          </div>
          <UiButton class="max-w-[304px] w-full mb-4" bgColor="amber-400" textColor="black" :hoverEffect="{bgColor: 'amber-300', borderColor: 'amber-300'}">
            <div class="flex font-bold items-center text-[16px] justify-center uppercase">
              <IconPaypal class="mr-2" />  Buy now
            </div>
          </UiButton>

          <UiButton class="max-w-[304px] mx-2 w-full" bgColor="white" textColor="black" borderColor="gray-200" :hoverEffect="{bgColor: 'black', textColor: 'white', borderColor: 'black'}">
            <div class="flex font-bold items-center text-[16px] justify-center uppercase">
              <IconGooglePay class="mr-2" /> Pay
            </div>
          </UiButton>
        </div>
      </UiDialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UiButton from './components/UI/button/ui-button.vue';
import UiDialog from './components/UI/dialog/ui-dialog.vue';
import IconGooglePay from './components/UI/icons/icon-google-pay.vue';
import IconPaypal from './components/UI/icons/icon-paypal.vue';
import UiInput from './components/UI/input/ui-input.vue';

const value = defineModel({ default: 0 });
const dialogVisible = ref(false);

const handleClick = () => {
  dialogVisible.value = true;
};

</script>
