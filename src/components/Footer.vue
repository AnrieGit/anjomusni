<template>
    <div class="w-full bg-tapa-900 p-5">
        <div class="flex justify-center items-center text-sm text-white z-10">
            Made with <HeartIcon class="h-5 w-5 text-red-500 mx-1"/> by <span class="text-orange-400 font-bold ml-1">Anjo</span>.
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