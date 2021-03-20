<template>
  <button
    class="px-3 md:px-6 py-2 bg-white border transition text-ship-gray shadow-s2 hover:shadow-none border-transparent hover:border-ship-gray rounded-lg flex items-center space-x-3 focus:outline-none active:text-mulberry active:border-mulberry"
  >
    <q-icon :name="icon" class="text-lg md:text-2xl"  />
    <span class="text-sm md:text-base font-semibold">{{ label }}</span>
    <q-popup-proxy ref="popup" :offset="[0, 10]">
      <q-card class="w-96 p-2 flex items-center justify-evenly">
        <q-btn class="text-ship-gray hover:text-red-600 transition-colors" round v-close-popup="2" flat icon="ion-mail" size="1.25rem" />
        <q-btn class="text-ship-gray hover:text-blue-500 transition-colors" round v-close-popup="2" flat icon="ion-logo-facebook" size="1.25rem" />
        <q-btn class="text-ship-gray hover:text-blue-300 transition-colors" round v-close-popup="2" flat icon="ion-logo-twitter" size="1.25rem" />
        <q-btn class="text-ship-gray hover:text-blue-800 transition-colors" round v-close-popup="2" flat icon="ion-logo-linkedin" size="1.25rem" />
      </q-card>
    </q-popup-proxy>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
  }
})
</script>
