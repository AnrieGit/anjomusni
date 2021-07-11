<template>
    <div>
        <div class="px-10 mt-0 xl:mt-20 xl:px-40">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 justify-items-center items-center">
                <img class="mt-10" src="../assets/images/svg/thinking.svg" alt="thinking.svg">

                <div class="max-w-lg">
                    <div class="relative flex flex-col justify-center items-center text-center">
                        <div class="text-white font-bold mt-10">
                            <span class="text-4xl leading-10">
                                Hi! I am <span class="text-orange-400">Anjo</span> Musni
                            </span>
                            <div class="mt-1 text-lg">
                                Web Developer
                            </div>
                        </div>

                        <Button class="mt-10">
                            Download Resume
                        </Button>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-28">
                <a href="#skills">
                    <ArrowDownIcon class="h-10 w-10 animate-bounce text-tapa-800 cursor-pointer hidden xl:block" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from '../components/Button'
    import { ArrowDownIcon } from '@heroicons/vue/outline'

    export default {
        name: 'Header',
        components: {
            Button,
            ArrowDownIcon,
        }
    }
</script>