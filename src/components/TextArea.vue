<template>
  <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :name="name" :rows="rows" :placeholder="placeholder" class="w-full py-2 border border-tapa-500 focus:border-tapa-500 text-tapa-900 rounded-md focus:outline-none focus:ring-2 focus:ring-tapa-500"></textarea>
</template>

<script>
  export default {
    name: 'TextArea',
    props: {
      modelValue: String,
      name: String,
      rows: String,
      placeholder: String,
    },
    emits: ['update:modelValue']
  }
</script>