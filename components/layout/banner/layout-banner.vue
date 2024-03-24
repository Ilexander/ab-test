<script setup>
import IconAsteroid from '../../UI/icons/icon-asteroid.vue';
import IconLockClosed from '../../UI/icons/icon-lock-closed.vue';
import IconStar from '../../UI/icons/icon-star.vue';
import LayoutTimer from '../timer/layout-timer.vue';

</script>

<template>
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
</template>

<style lang="scss" scoped>

</style>
