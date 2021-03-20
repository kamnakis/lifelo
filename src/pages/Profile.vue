<template>
  <q-page class="flex justify-center items-start relative bg-gray-50">
    <div class="w-full h-64 md:h-80 bg-gray-200">
      <img src="https://picsum.photos/1440/768" class="w-full h-full object-cover object-center">
    </div>
    <div class="z-20 absolute top-64 md:top-80 left-1/2 border-2 border-white transform -translate-x-1/2 -translate-y-1/2 shadow-s3 h-44 w-44 rounded-full overflow-hidden">
      <img :src="`${profile && profile.profileImage}`" alt="">
    </div>
    <div class="absolute top-64 md:top-80 w-full">
      <h1 class="absolute inset-x-0 text-lg font-bold text-center mt-24">{{ profile && profile.fullName}}</h1>
      <div class="max-w-md w-full mx-auto flex justify-between py-10 px-2">
        <div class="flex flex-col">
          <span class="font-medium text-sm text-center text-ship-gray">Network</span>
          <span class="font-medium text-sm text-center text-mulberry cursor-pointer">356</span>
        </div>
        <div class="flex flex-col">
          <span class="font-medium text-sm text-center text-ship-gray">Courses</span>
          <span class="font-medium text-sm text-center text-mulberry cursor-pointer">48</span>
        </div>
      </div>
    </div>
    
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { profiles as pr } from 'src/assets/profiles'
import { Profile } from 'src/models/models'

export default defineComponent({
  name: 'Profile',
  setup() {
    const route = useRoute()
    const profiles = ref<Profile[]>(pr)
    const profile = computed(() => {
      return profiles.value.find(pr => pr.id.toString() === route.params.id)
    })
    return {
      profile
    }
  }
})
</script>
