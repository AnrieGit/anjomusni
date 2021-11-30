<template>
  <button :name="name" :type="type" :disabled="loading" class="inline-flex justify-center item-center bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-md px-4 py-3  focus:outline-none disabled:opacity-75 disabled:cursor-default">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      name: String,
      type: String,
      loading: Boolean,
    }
  }
</script>

<style>
</style>