<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :name="name" :type="type" :placeholder="placeholder" class="w-full block py-2 border border-tapa-900 focus:border-tapa-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-tapa-500 bg-tapa-400"/>
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