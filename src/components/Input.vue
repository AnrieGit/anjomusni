<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :name="name" :type="type" :placeholder="placeholder" class="w-full block py-2 border border-tapa-500 focus:border-tapa-500 text-tapa-900 rounded-md focus:outline-none focus:ring-2 focus:ring-tapa-500"/>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      modelValue: [String, Number],
      name: String,
      type: String,
      placeholder: String,
    },
    emits: ['update:modelValue']
  }
</script>