<template>
  <button
    class="px-3 md:px-6 py-2 bg-white border transition rounded-lg flex items-center space-x-3 focus:outline-none"
    :class="{
      'text-ship-gray shadow-s2 hover:shadow-none border-transparent hover:border-ship-gray': !liked,
      'border-mulberry text-mulberry shadow-0': liked
    }"
    @click="liked = !liked"
  >
    <q-icon :name="icon" class="text-lg md:text-2xl"  />
    <span class="text-sm md:text-base font-semibold">{{ label }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  setup() {
    const liked = ref(false)

    return {
      liked
    }
  }
})
</script>
