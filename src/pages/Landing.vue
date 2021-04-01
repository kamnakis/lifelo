<template>
  <q-layout
    view="hHh lpR lFf"
    class="waves bg-cover md:bg-contain bg-bottom bg-fixed"
  >
    <q-header reveal :reveal-offset="10" class="bg-white text-white px-2 py-1">
      <q-toolbar>
        <q-toolbar-title class="flex items-center space-x-4">
          <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9098 1.00406c2.0085-.652583 4.1719-.652583 6.1804 0l5.5753 1.81154c2.0085.65258 3.7588 1.92424 5 3.63272l3.4458 4.74268c1.2413 1.7085 1.9098 3.7661 1.9098 5.8779v5.8622c0 2.1118-.6685 4.1694-1.9098 5.8779l-3.4458 4.7427c-1.2412 1.7085-2.9915 2.9801-5 3.6327l-5.5753 1.8115c-2.0085.6526-4.1719.6526-6.1804 0l-5.5753-1.8115c-2.00847-.6526-3.75875-1.9242-5.00003-3.6327L2.8887 28.809C1.64742 27.1005.97887 25.0429.97887 22.9311v-5.8622c0-2.1118.66855-4.1694 1.90983-5.8779l3.44577-4.74269C7.57575 4.73984 9.32603 3.46818 11.3345 2.8156l5.5753-1.81154z" fill="#D1489B"/><path d="M28.6351 13.598l-8.2399-3.5183c-.2547-.10626-.5354-.10626-.79 0l-8.2403 3.5183c-.1072.0447-.1995.1247-.2647.2293-.0653.1045-.1002.2287-.1002.3559v1.4418c0 .3453.2517.625.5625.625h16.875c.3108 0 .5625-.2797.5625-.625v-1.4418c0-.2605-.1455-.4937-.3649-.5852zM13.25 17.5v6.25h-.5625c-.3108 0-.5625.2797-.5625.625v1.875h15.75v-1.875c0-.3453-.2517-.625-.5625-.625H26.75V17.5H24.5v6.25h-3.375V17.5h-2.25v6.25H15.5V17.5h-2.25zm15.1875 10h-16.875c-.3108 0-.5625.2797-.5625.625v1.25c0 .3453.2517.625.5625.625h16.875c.3108 0 .5625-.2797.5625-.625v-1.25c0-.3453-.2517-.625-.5625-.625z" fill="#fff"/></svg>
          <span class="text-2xl text-mulberry font-mono font-bold">LIFELO</span>
        </q-toolbar-title>
        <q-btn
          flat
          :ripple="false"
          class="text-mulberry md:mr-4"
          label="LOGIN"
          @click="loginDialog = !loginDialog"
        />
        <q-btn
          unelevated
          dense
          class="desktop-only bg-mulberry text-white rounded-xl shadow-s2 px-7 py-2"
          label="EXPLORE LIFELO"
          @click="signUpDialog = !signUpDialog"
        />
      </q-toolbar>
    </q-header>

    <q-page-container class="flex flex-col items-center px-4 sm:text-center">
      <h1 class="text-3xl text-ship-gray font-extrabold mt-20">
        A GREAT PLACE TO BE 📚
      </h1>

      <q-btn
        unelevated
        dense
        class="max-w-xxs w-full mt-8 mobile-only bg-mulberry text-white rounded-xl shadow-s2 px-7 py-2"
        label="EXPLORE LIFELO"
        @click="signUpDialog = !signUpDialog"
      />

      <!-- Info -->
      <section class="container mt-20 flex justify-evenly space-y-4 md:space-y-0">
        <article
          v-for="(item, index) in info"
          :key="index"
          class="flex flex-col items-center max-w-xxs h-80 p-6 bg-white shadow-s3 rounded-xl"
        >
          <div class="w-full h-1/2 flex justify-center">
            <q-icon :name="item.icon" size="5rem" class="text-mulberry" />
            <h2 class="w-full text-center text-lg font-bold text-ship-gray mt-4">
              {{ item.title }}
            </h2>
          </div>
          <p class="text-base leading-7 font-normal text-ship-gray mt-8">
            {{ item.body }}
          </p>
        </article>
      </section>

      <!-- Feedback -->
      <section
        class="container mt-20 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-evenly"
      >
        <article
          v-for="(item, index) in feedback"
          :key="index"
          class="flex max-w-xxs"
        >
          <q-avatar size="4rem" class="bg-gray-50 flex-none mr-3 shadow-s2">
            <img
              :src="item.image"
              class="h-full w-full object-center object-cover"
            />
          </q-avatar>
          <div class="flex-1 flex flex-col items-start">
            <p class="text-sm text-ship-gray font-medium text-left mb-1">
              {{ item.message }}
            </p>
            <h5 class="text-sm text-mulberry font-bold">
              {{ item.name }}
            </h5>
          </div>
        </article>
      </section>

      <div class="mt-20 w-full py-4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10">
        <a class="text-ship-gray font-medium">©lifelo 2021. All rights reserved.</a>
        <a class="text-ship-gray font-medium">Privacy</a>
        <a class="text-ship-gray font-medium">Terms</a>
        <a class="text-ship-gray font-medium">About</a>
        <a class="text-ship-gray font-medium">Contact</a>
      </div>
    </q-page-container>

    <SignUpDialog
      v-model="signUpDialog"
      @login="
        signUpDialog = false;
        loginDialog = true
      "
      @close="signUpDialog = false"
    />
    <LoginDialog
      v-model="loginDialog"
      @signup="
        loginDialog = false;
        signUpDialog = true
      "
      @close="loginDialog = false"
    />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import LoginDialog from 'src/components/LoginDialog.vue'
import SignUpDialog from 'src/components/SignUpDialog.vue'

export default defineComponent({
  components: {
    LoginDialog,
    SignUpDialog
  },
  setup() {
    const router = useRouter()

    const feedback = reactive([
      {
        image: './images/girl1.jfif',
        message: 'Wow! Lifelo services are so helpful. Check it out!',
        name: 'Jane'
      },
      {
        image: './images/man1.jfif',
        message:
          'Lifelo is such a nice platform to check out the skills of our future employees.',
        name: 'John'
      },
      {
        image: './images/girl2.jfif',
        message: 'Lifelo has helped me to keep my goals to the foreground!',
        name: 'Jasmine'
      }
    ])

    const info = reactive([
      {
        icon: 'school',
        title: 'Student/Alumni Certification',
        body:
          'Review your completed courses and certified skills and competencies.'
      },
      {
        icon: 'mark_chat_unread',
        title: 'Consulations',
        body: 'Find the right course for your career goals.'
      },
      {
        icon: 'search',
        title: 'Browse Courses',
        body:
          'Browse available courses to gain certified skills and cempetencies.'
      }
    ])

    const signUpDialog = ref(false)
    const loginDialog = ref(false)

    onBeforeMount(async () => {
      if (localStorage.getItem('token') === 'faketoken') {
        await router.replace('/l/')
      }
    })

    return {
      feedback,
      info,
      signUpDialog,
      loginDialog
    }
  }
})
</script>

<style>
.waves {
  background-image: url('/images/waves.svg');
  background-repeat: no-repeat;
}

.waves-white-bg {
  background-color: white;
  background-image: url('/images/waves.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
