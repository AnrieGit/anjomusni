<template>
  <div v-show="show" class="relative flex justify-end">
    <div :class="[status == 'error' ? 'bg-red-500' : 'bg-green-500']" class="fixed text-white shadow-md rounded-md m-5 z-50">
      <div class="flex">
        <div :class="[status == 'error' ? 'border-red-500 text-red-500' : 'border-green-500 text-green-500']" class="flex justify-center items-center bg-white w-14 border rounded-l-md">
          <ExclamationIcon v-if="[status && 'error']" class="h-6 w-6" />
          <CheckCirclenIcon v-else class="h-6 w-6" />
        </div>

        <div class="mx-3 py-4">
        {{ message }}
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckCircleIcon, ExclamationIcon } from '@heroicons/vue/outline'

export default {
  name: 'Alert',
  props: {
    show: Boolean,
    message: String,
    status: String,
  },
  components: {
    CheckCircleIcon,
    ExclamationIcon,
  }
}
</script>