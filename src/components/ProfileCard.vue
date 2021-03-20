<template>
  <div
    class="h-56 xl:h-64 bg-white shadow-s3 flex flex-col items-center justify-between px-7 py-4 rounded-xl"
  >
    <div class="flex flex-col items-center">
      <img
        :src="profile.profileImage"
        class="h-16 lg:h-20 w-16 lg:w-20 rounded-full cursor-pointer"
        @click="$router.push(`/l/profile/${profile.id}`)"

      />
      <h3
        class="font-medium text-base text-ship-gray mt-2 text-center cursor-pointer"
        @click="$router.push(`/l/profile/${profile.id}`)"
      >
        {{ profile.fullName }}
      </h3>
      <h5 class="font-normal text-xs text-ship-gray-400 mt-2 text-center">
        {{ profile.description }}
      </h5>
    </div>
    <q-btn
      rounded
      dense
      unelevated
      color="mulberry"
      :label="label"
      @click="label = 'REQUEST SENT'"
      class="py-0 w-full shadow-s2"
      :disable="label !== 'CONNECT'"
    />
  </div>
</template>

<script lang="ts">
import { Profile } from 'src/models/models'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    profile: {
      type: Object as () => Profile,
      required: true
    }
  },
  setup() {
    const label = ref('CONNECT')
    return {
      label
    }
  }
})
</script>
