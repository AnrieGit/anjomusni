<template>
    <div class="w-full bg-tapa-900 p-5">
        <div class="flex justify-center items-center font-bold text-sm text-white z-10">
            Made with&nbsp;<HeartIcon class="h-5 w-5 text-red-500"/>&nbsp;by Anjo
        </div>
        <!-- <Wave class="absolute cover bottom-0 -mb-48 w-full"/> -->
    </div>
</template>

<script>
    import { HeartIcon } from '@heroicons/vue/solid'
    import Wave from './svg/Wave'

    export default {
        name: 'Footer',
        components: {
            HeartIcon,
            Wave,
        }
    }
</script>