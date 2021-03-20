<template>
  <q-dialog>
    <div class="bg-white p-10 relative">
      <q-btn
        icon="clear"
        class="text-black absolute top-0 right-0 m-2 z-10"
        flat
        round
        @click="$emit('close')"
      />
    </div>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ViewCourseDialog',
  emits: ['close'],
  setup() {
    return {}
  }
})
</script>
