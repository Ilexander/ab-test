<script setup>
import IconLockClosed from '../../UI/icons/icon-lock-closed.vue';
import IconStar from '../../UI/icons/icon-star.vue';
import LayoutTimer from '../timer/layout-timer.vue';
</script>

<template>
     <div class="layout-banner relative max-w-[473px] w-full  border rounded-3xl p-6">
        <div class="layout-banner bg rounded-3xl"></div>
        <div class="z-1 relative">
            <div class="layout-banner__icon">
                <!-- <IconAsteroid class="absolute top-[-55px] right-1" /> -->
            </div>
            <div class="mb-6 flex items-center justify-between">
                <div>
                    <h5 class="layout-banner__title text-2xl font-extrabold">3-day trial for <span class="text-orange-500">$0.99</span></h5>
                    <div class="layout-banner__sale text-xl font-semibold">
                        Then $9.99
                    </div>
                    <div class="ayout-banner__prise line-through text-gray-400 font-semibold">
                        $39.99/week
                    </div>
                </div>
                <LayoutTimer />
            </div>

            <ul class="layout-banner__list mb-6">
                <li class="layout-banner__item flex items-center mb-4">
                    <IconStar class="mr-2" />
                    <p>Exclusive access to <strong class="text-orange-500">350+</strong> learning programs</p>
                </li>
                <li class="layout-banner__item flex items-center mb-4">
                    <IconStar class="mr-2" />
                    <p>Personalized course plan</p>
                </li>
                <li class="layout-banner__item flex items-center mb-4">
                    <IconStar class="mr-2" />
                    <p>Comfy learning schedule made by you</p>
                </li>
                <li class="layout-banner__item flex items-center mb-4">
                    <IconStar class="mr-2" />
                    <p><strong class="text-orange-500">24/7</strong> tutor support in a secure chat</p>
                </li>
                <li class="layout-banner__item flex items-center">
                    <IconStar class="mr-2" />
                    <p>Lifetime access to materials</p>
                </li>
            </ul>
            <div class="layout-banner__secure text-futura-500 w-full mb-6 bg-white border py-3 flex items-center justify-center rounded-2xl">
                <IconLockClosed class="mr-2"/>  Safe & secure payment
            </div>
            <p class="layout-banner__description text-xs text-gray-400 text-center font-normal">
                $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms .
            </p>
        </div>
    </div>
</template>

<style lang="scss">

// &__icon {
//     width: 252px;
//     height: 202px;
//     position: absolute;
//     top: -142px;
//     left: 210px;
//     background-image: url('../../UI/icons/icon-asteroid.svg');
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: contain;
// }

.layout-banner {
    background-color: white;
}

.smart {
    .layout-banner {
        position: relative;
        background-color: transparent;

        .bg {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.2); // Установка прозрачного фона
            backdrop-filter: blur(10px); // Применение размытия к заднему фону
        }

        &__title {
            color: #66EDFF;
            span {
                color: #66EDFF;
            }
        }

        &__icon {
            width: 282px;
            height: 322px;
            position: absolute;
            top: 45px;
            left: 320px;
            background-image: url('../../UI/icons/icon-rocket.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }

        &__sale {
            color: white;
        }

        &__item {
            color: #66EDFF;

            strong {
                color: #66EDFF;

            }

            svg path {
                fill: #66EDFF;
            }
        }

        &__secure {
            color: #66EDFF;
            border-color: transparent;
            background-color: #00000042;

            svg path {
                fill: #66EDFF;
            }
        }

        &__description {
            color: white;
        }
    }
}

</style>
