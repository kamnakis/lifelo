<template>
  <q-dialog position="top" full-width>
    <div class="bg-white h-75vh grid grid-cols-5 relative">
      <q-btn
        icon="clear"
        class="text-black! md:text-white! absolute top-0 right-0 m-2 z-10"
        flat
        round
        @click="$emit('close')"
      />
      <div class="p-10 md:px-20 md:py-10 col-span-full md:col-span-3">
        <h1 class="text-ship-gray font-light text-4xl pb-4 border-b">
          Welcome to Lifelo
        </h1>
        <form
          @submit.prevent="loginSubmit"
          class="w-full flex flex-col items-center space-y-4 mt-10"
        >
          <q-input
            v-model="email"
            type="email"
            label="Email"
            class="w-full"
            color="mulberry"
            outlined
          />
          <q-input
            v-model="password"
            type="password"
            label="Password"
            class="w-full"
            color="mulberry"
            outlined
          />
          <div
            class="w-full flex justify-center space-y-2 md:space-y-0 md:justify-between items-center mt-1"
          >
            <a class="text-ship-gray font-medium">Forgot your password?</a>
            <q-btn
              class="self-end w-44 bg-mulberry text-white py-2"
              icon="login"
              label="LOGIN"
              unelevated
              type="submit"
            />
          </div>
        </form>
      </div>
      <div
        class="bg-gray-400 relative col-span-full h-96 md:h-auto md:col-span-2"
      >
        <q-img src="images/bg/bg-learn.jpg" class="absolute inset-0" />
        <div
          class="bg-ship-gray-900 bg-opacity-50 absolute inset-0 p-10 md:px-20 md:py-10"
        >
          <h1 class="text-white font-light text-4xl">Don't have an account?</h1>
          <q-btn
            class="max-w-xxs w-full mt-10 md:mt-10"
            color="white"
            text-color="black"
            icon="mail_outline"
            no-caps
            label="Sign up with Email"
            @click="$emit('signup')"
          />
          <h1
            class="max-w-xxs w-full text-xl font-normal text-white text-center mt-3"
          >
            — or —
          </h1>
          <div class="mt-3 flex flex-col space-y-4">
            <q-btn
              class="max-w-xxs"
              style="background-color: #3b5998"
              text-color="white"
              icon="facebook"
              no-caps
              label="Sign in with Facebook"
            />
            <q-btn
              class="max-w-xxs"
              text-color="white"
              style="background-color: #4285f4"
              icon="ion-logo-google"
              no-caps
              label="Sign in with Google"
            />
          </div>
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LoginDialog',
  emits: ['signup', 'close'],
  setup() {
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    const loginSubmit = async () => {
      await login(email.value, password.value)
    }

    const login = async (em: string, pass: string) => {
      if (em === 'john.doe@gmail.com' && pass === '12345678') {
        localStorage.setItem('token', 'faketoken')
        await router.replace('/l/')
      }
    }

    return {
      email,
      password,
      loginSubmit
    }
  }
})
</script>
