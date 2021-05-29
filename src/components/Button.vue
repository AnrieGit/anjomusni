<template>
  <button :name="name" :type="type" :disabled="loading" class="inline-flex justify-center item-center bg-tapa-700 hover:bg-tapa-500 text-white font-medium rounded-md px-4 py-3  focus:outline-none focus:ring-2 focus:ring-tapa-900 disabled:opacity-75 disabled:cursor-default">
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