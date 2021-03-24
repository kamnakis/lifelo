<template>
  <div class="flex justify-center items-start relative">
    <div class="w-full h-64 md:h-80 bg-gray-200">
      <img src="https://picsum.photos/1440/768" class="w-full h-full object-cover object-center">
    </div>
    <div class="z-20 absolute top-64 md:top-80 left-1/2 border-2 border-white transform -translate-x-1/2 -translate-y-1/2 shadow-s3 h-44 w-44 rounded-full overflow-hidden">
      <img :src="`${profile && profile.profileImage}`" alt="" class="w-full h-full object-cover object-center">
    </div>
    <div class="absolute top-64 md:top-80 w-full">
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

    <div class="w-full h-64 mt-32">
      <div class="container mx-auto grid lg:grid-cols-2 gap-10 px-2 lg:px-20">
        <div class="flex flex-col">
          <h1 class="text-xl font-bold text-ship-gray-800">{{ profile && profile.fullName}}</h1>
          <h1 class="text-base font-normal text-ship-gray-400">Laurea University of Applied Sciences</h1>
          <h1 class="text-base font-normal text-ship-gray-400 mt-6 lg:w-80">
            I am passionate about digital marketing and graphic design. I love applying my creativity in everything I do.
          </h1>
          <q-list class="mt-10">
            <q-item class="p-0">
              <q-item-section avatar>
                <q-icon color="gray-800" name="event" />
              </q-item-section>
              <q-item-section class="font-bold text-gray-800 -ml-3">24/12/1995</q-item-section>
            </q-item>
            <q-item class="p-0">
              <q-item-section avatar>
                <q-icon color="gray-800" name="stay_current_portrait" />
              </q-item-section>
              <q-item-section class="font-bold text-gray-800 -ml-3">+11 1111 111 111</q-item-section>
            </q-item>
            <q-item class="p-0">
              <q-item-section avatar>
                <q-icon color="gray-800" name="mail" />
              </q-item-section>
              <q-item-section class="font-bold text-gray-800 -ml-3">jane.doe@li.fi</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="flex flex-col items-center">
          <h1 class="text-xl font-bold text-ship-gray-800 text-center uppercase">Certified Skills and Competencies</h1>
          <div class="flex space-x-2 mt-10">
            <q-chip clickable class="m-2" icon="verified" color="mulberry" text-color="white">Basics of Digital Image Editing</q-chip>
            <q-chip clickable class="m-2" icon="verified" color="mulberry" text-color="white">Leadership</q-chip>
            <q-chip clickable class="m-2" icon="verified" color="mulberry" text-color="white">UI/UX Desgin</q-chip>
            <q-chip clickable class="m-2" icon="verified" color="mulberry" text-color="white">Project Management and Planning</q-chip>
            <q-chip clickable class="m-2" icon="verified" color="mulberry" text-color="white">Data Analysis</q-chip>
            <q-chip clickable class="m-2" icon="verified" color="mulberry" text-color="white">Sales and Customer Service</q-chip>
            <q-chip clickable class="m-2" icon="verified" color="mulberry" text-color="white">SEO</q-chip>
            <q-chip clickable class="m-2" icon="verified" color="mulberry" text-color="white">General Administrative Skills</q-chip>
            <q-chip clickable class="m-2" icon="verified" color="mulberry" text-color="white">Teamwork</q-chip>
            <q-chip clickable class="m-2" icon="verified" color="mulberry" text-color="white">Presentation Techinques</q-chip>
          </div>
        </div>
      </div>
    </div>
    
  </div>
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
