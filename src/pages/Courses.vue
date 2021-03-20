<template>
  <q-page class="flex items-stretch justify-center p-2 md:p-10">
    <div class="bg-white w-full shadow-s3 rounded-xl p-4 md:p-10 flex flex-col">
      <div class="w-full flex items-stretch justify-start space-y-4 sm:space-y-0 sm:space-x-4">
        <q-input
          v-model="search"
          type="text"
          dense
          borderless
          class="bg-gray-100 px-5 rounded-xl border"
          placeholder="e.g. Profitable Business"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn
          unelevated
          class="rounded-xl bg-gray-100 text-ship-gray-300 border"
          icon="today"
          :label="date ? `${date.from} - ${date.to}` : 'Enroll Period'"
          no-caps
        >
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date color="mulberry" v-model="date" range landscape />
          </q-popup-proxy>
        </q-btn>

        <q-select
          v-model="category"
          :options="['Business', 'Engineering', 'Law']"
          label="Category"
          dense
          borderless
          clearable
          class="w-52 px-4 bg-gray-100 text-ship-gray-300 border rounded-xl"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <div
          v-for="(course, index) in filteredCourses"
          :key="index"
          class="bg-white shadow-s2 flex flex-col justify-between rounded-xl px-6 py-4"
        >
          <div class="flex flex-col">
            <h1 class="text-ship-gray font-bold text-lg">
              {{ course.title }}
            </h1>
            <h4 class="text-ship-gray font-medium text-sm">
              Enrollment Period: {{ course.period }}
            </h4>
          </div>
          <div class="w-full grid grid-cols-2 gap-4 mt-10">
            <q-btn
              unelevated
              no-caps
              class="bg-ship-gray-400 bg-opacity-20 text-ship-gray"
              label="View More"
              @click="viewCourseDialog = true"
            />
            <q-btn
              unelevated
              no-caps
              class="bg-mulberry bg-opacity-30 text-mulberry"
              label="Enroll"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>

  <ViewCourseDialog v-model="viewCourseDialog" @close="viewCourseDialog = false" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import ViewCourseDialog from 'src/components/ViewCourseDialog.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    ViewCourseDialog
  },
  setup() {
    const search = ref('')
    const category = ref<string>('')
    const date = ref()

    const viewCourseDialog = ref(false)

    const courses = ref([
      {
        title: 'Profitable Business',
        period: '20/09 - 27/09',
        categories: ['Business']
      },
      {
        title: 'Business Processes',
        period: '23/09 - 28/09',
        categories: ['Business']
      },
      {
        title: 'Supply Chain Management',
        period: '01/10 - 01/11',
        categories: ['Business']
      },
      {
        title: 'Professional Communications',
        period: '15/09 - 15/10',
        categories: ['Business']
      },
      {
        title: 'C Programming',
        period: '12/09 - 15/10',
        categories: ['Engineering']
      },
      {
        title: 'Data Science',
        period: '11/09 - 13/10',
        categories: ['Engineering']
      },
      {
        title: 'Algorithms',
        period: '06/09 - 14/10',
        categories: ['Engineering']
      }
    ])

    const filteredCourses = computed(() => {
      return courses.value.filter((course) => {
        return (category.value ? course.categories.includes(category.value) : true) && course.title.toLowerCase().includes(search.value.toLowerCase())
      })
    })

    return {
      search,
      category,
      date,
      viewCourseDialog,
      filteredCourses
    }
  }
})
</script>
