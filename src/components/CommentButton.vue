<template>
  <button
    class="px-3 md:px-6 py-2 bg-white border transition text-ship-gray shadow-s2 hover:shadow-none border-transparent hover:border-ship-gray rounded-lg flex items-center space-x-3 focus:outline-none active:text-mulberry active:border-mulberry"
  >
    <q-icon :name="icon" class="text-lg md:text-2xl"  />
    <span class="text-sm md:text-base font-semibold">{{ label }}</span>
    <q-popup-proxy ref="popup" :offset="[0, 10]">
      <q-card class="w-96 p-2">
        <q-input v-model="comment" type="textarea" color="mulberry" autogrow outlined autofocus label="Comment">
          <template v-slot:append>
            <q-btn color="mulberry" round flat icon="send" @click="comment = ''; $refs.popup.hide()" />
          </template>
        </q-input>
      </q-card>
    </q-popup-proxy>
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
  setup () {
    const comment = ref('')

    return {
      comment
    }
  }
})
</script>
