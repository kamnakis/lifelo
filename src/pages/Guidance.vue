<template>
  <q-page padding>
    <q-stepper
      v-model="step"
      ref="stepper"
      active-color="mulberry"
      done-color="mulberry"
      animated
      bordered
      flat
    >
      <q-step :name="1" title="Pick a Date" icon="event" :done="step > 1">
        <div class="flex justify-center">
          <q-date
            v-model="date"
            flat
            bordered
            square
            years-in-month-view
            color="mulberry"
          />
        </div>
      </q-step>

      <q-step :name="2" title="Pick the helper" icon="person" :done="step > 2">
        <div
          class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <div class="h-20 border p-4 flex items-center">
            <q-avatar
              font-size="52px"
              class="flex-none"
              color="grey-5"
              text-color="white"
            >
              <img src="images/main2.jpg" alt="" />
            </q-avatar>
            <div class="flex-grow flex flex-col ml-4">
              <span class="font-bold text-ship-gray">John Doe</span>
              <span class="font-medium text-sm text-ship-gray"
                >Business Professor</span
              >
            </div>
            <q-radio v-model="radio" val="1" color="mulberry" />
            <q-btn
              color="mulberry"
              icon="visibility"
              class="flex-none"
              round
              flat
              dense
            />
          </div>
          <div class="h-20 border p-4 flex items-center">
            <q-avatar
              font-size="52px"
              class="flex-none"
              color="grey-5"
              text-color="white"
            >
              <img src="images/main3.jpg" alt="" />
            </q-avatar>
            <div class="flex-grow flex flex-col ml-4">
              <span class="font-bold text-ship-gray">George Smith</span>
              <span class="font-medium text-sm text-ship-gray"
                >Business Professor</span
              >
            </div>
            <q-radio v-model="radio" val="2" color="mulberry" />
            <q-btn
              color="mulberry"
              icon="visibility"
              class="flex-none"
              round
              flat
              dense
            />
          </div>
        </div>
      </q-step>

      <q-step :name="3" title="Verify" icon="book_online">
        <div class="flex items-center justify-center">
          <div
            class="border rounded-md p-10 flex items-center justify-center md:justify-between space-x-10 md:space-x-20"
          >
            <div class="flex flex-col space-y-3">
              <div class="text-ship-gray-300 font-semibold text-lg">
                Thomas Ryan &lt;&gt; Mr. Nikolson James
              </div>
              <div class="text-ship-gray-600 font-semibold text-lg">
                05/11/2021 - 12:00 - 13:00
              </div>
              <div class="text-ship-gray-600 font-semibold text-lg">
                Online @Zoom
              </div>
            </div>
            <svg
              width="124"
              height="97"
              viewBox="0 0 124 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M94.5542 36.374H65.1043V46.9842C65.1043 54.5062 58.8462 60.626 51.1543 60.626C43.4625 60.626 37.2044 54.5062 37.2044 46.9842V23.9448L24.63 31.3341C20.8906 33.513 18.6044 37.4729 18.6044 41.717V50.6789L3.10441 59.4324C0.140044 61.0997 -0.886829 64.8133 0.837542 67.7122L16.3375 93.9726C18.0425 96.8715 21.84 97.8567 24.8044 96.1894L44.8381 84.8781H71.3043C78.1437 84.8781 83.7043 79.4403 83.7043 72.752H86.8043C90.2336 72.752 93.0042 70.0426 93.0042 66.689V54.563H94.5542C97.1311 54.563 99.2042 52.5357 99.2042 50.0158V40.9212C99.2042 38.4013 97.1311 36.374 94.5542 36.374ZM123.171 29.2878L107.671 3.02741C105.966 0.12853 102.169 -0.85671 99.2042 0.810619L79.1705 12.1219H59.3693C57.0443 12.1219 54.7774 12.7661 52.8012 13.9598L46.3106 17.9197C44.4893 19.0186 43.4043 20.9701 43.4043 23.0543V46.9842C43.4043 51.1715 46.8725 54.563 51.1543 54.563C55.4362 54.563 58.9043 51.1715 58.9043 46.9842V30.311H94.5542C100.541 30.311 105.404 35.0666 105.404 40.9212V46.3211L120.904 37.5676C123.869 35.8814 124.876 32.1867 123.171 29.2878Z"
                fill="#D1489B"
              />
            </svg>
          </div>
        </div>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="step === 3 ? handleFinish() : $refs.stepper.next()"
            color="mulberry"
            :label="step === 3 ? 'Finish' : 'Continue'"
            unelevated
          />
          <q-btn
            v-if="step > 1"
            flat
            color="mulberry"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { QSpinnerGears, useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const quasar = useQuasar()
    const router = useRouter()
    const step = ref(1)
    const date = ref()

    const radio = ref('')

    const handleFinish = () => {
      const dialog = quasar.dialog({
        title: 'This will take a moment',
        message: '0%',
        progress: {
          spinner: QSpinnerGears,
          color: 'mulberry'
        },
        class: 'flex flex-col items-center justify-center',
        persistent: true, // we want the user to not be able to close it
        ok: false // we want the user to not be able to close it
      })

      // we simulate some progress here...
      let percentage = 0
      const interval = setInterval(() => {
        percentage = Math.min(100, percentage + Math.floor(Math.random() * 22))

        // we update the dialog
        dialog.update({
          message: `${percentage}%`
        })

        // if we are done...
        if (percentage === 100) {
          clearInterval(interval)

          dialog.update({
            title: 'Done!',
            message: 'Meeting arranged successfully!',
            progress: false,
            ok: true
          }).onOk(async () => {
            await router.push('/l/')
          })
        }
      }, 500)
    }

    return {
      step,
      date,
      radio,
      handleFinish
    }
  }
})
</script>
