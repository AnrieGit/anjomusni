<template>
    <a :href="link" class="inline-flex justify-center item-center bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-md px-4 py-3  focus:outline-none disabled:opacity-75 disabled:cursor-default">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'ButtonLink',
    props: {
        link: String,
    },
}
</script>