<template>
  <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :name="name" :rows="rows" :placeholder="placeholder" class="w-full py-2 border border-tapa-900 focus:border-tapa-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-tapa-500 bg-tapa-400"></textarea>
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