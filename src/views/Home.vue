<template>
    <div class="px-10 xl:px-40 pt-20 pb-40">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 justify-items-center items-center">
            <img class="mt-10" src="../assets/images/svg/thinking.svg" alt="thinking.svg">

            <div class="max-w-lg">
                <div class="relative flex flex-col justify-center items-center text-center">
                    <div class="text-white font-bold mt-10">
                        <span class="typed-string">
                            <span>Hi! I am <span class="text-orange-400">Anjo</span> Musni</span>
                        </span>
                        <span class="typed text-4xl leading-10"></span>
                        <div class="mt-1 text-lg">
                            Web Developer
                        </div>
                    </div>

                    <ButtonLink link="./pdf/CV(Anjo)v7.pdf" target="__blank" class="mt-10">
                        Download Resume
                    </ButtonLink>
                </div>
            </div>
        </div>

        <!-- <div class="flex justify-center mt-28">
            <a href="#skills">
                <ArrowDownIcon class="h-10 w-10 animate-bounce text-orange-400 cursor-pointer hidden xl:block" />
            </a>
        </div> -->
    </div>
</template>

<script>
    import Typed from 'typed.js';
    import ButtonLink from '../components/ButtonLink'
    import { ArrowDownIcon } from '@heroicons/vue/outline'

    export default {
        name: 'Home',
        components: {
            ButtonLink,
            ArrowDownIcon,
        },
        mounted() {
            var options = {
                stringsElement: '.typed-string',
                typeSpeed: 100,
                autoInsertCss: true,
            };

            new Typed('.typed', options);
        }
    }
</script>