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

      <h1 class="text-lg font-semibold text-ship-gray">Course Description</h1>
      <p class="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        aperiam voluptates eaque accusantium modi praesentium sed adipisci quae
        distinctio natus quasi maxime velit ipsam inventore vitae blanditiis.
        Facilis non consequuntur repellat culpa nisi reprehenderit aliquam
        accusantium dolore tempora et necessitatibus amet vel ullam quos optio
        voluptate adipisci placeat ipsam repudiandae, unde, ex nesciunt mollitia
        officia. Repellat beatae quidem perspiciatis ea aliquid, cumque in
        delectus eius tenetur reprehenderit est, minus, voluptate aperiam
        distinctio quae blanditiis maiores porro eum aspernatur error non?
        Quidem quia eligendi molestiae eius voluptate, pariatur dolorum cum,
        magni voluptatem ea accusantium quasi sit cumque veniam non obcaecati
        culpa.
      </p>

      <h1 class="text-lg font-semibold text-ship-gray mt-6">
        Certified Skills
      </h1>
      <div class="flex mt-4">
        <q-chip
          clickable
          class="m-2"
          icon="verified"
          color="mulberry"
          text-color="white"
          >Basics of Digital Image Editing</q-chip
        >
        <q-chip
          clickable
          class="m-2"
          icon="verified"
          color="mulberry"
          text-color="white"
          >Leadership</q-chip
        >
        <q-chip
          clickable
          class="m-2"
          icon="verified"
          color="mulberry"
          text-color="white"
          >UI/UX Desgin</q-chip
        >
      </div>
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
