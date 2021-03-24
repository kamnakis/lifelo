<template>
  <q-dialog position="top" full-width>
    <div class="bg-white h-75vh grid grid-cols-5 relative">
      <q-btn icon="clear" class="text-black! md:text-white! absolute top-0 right-0 m-2 z-10" flat round @click="$emit('close')" />
      <div class="p-10 md:px-20 md:py-10 col-span-full md:col-span-3">
        <h1 class="text-ship-gray font-light text-3xl pb-4 border-b">
          Create an account and start learning!
        </h1>
        <div class="w-full grid grid-cols-2 gap-4 mt-10">
          <q-input
            v-model="signup.fname"
            type="text"
            label="First Name"
            color="mulberry"
            outlined
            dense
            class="col-span-2 md:col-span-1"
          />
          <q-input
            v-model="signup.lname"
            type="text"
            label="Last Name"
            color="mulberry"
            outlined
            dense
            class="col-span-2 md:col-span-1"
          />

          <div class="col-span-2 flex space-x-4">
            <q-input
              v-model="signup.email"
              type="email"
              label="Email"
              class="flex-1"
              color="mulberry"
              outlined
              dense
            />
            <q-btn icon="event" round color="mulberry">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date
                  v-model="signup.bday"
                  :title="signup.fname"
                  subtitle="Birthday"
                  color="mulberry"
                />
              </q-popup-proxy>
            </q-btn>
          </div>
          
          <q-input
            v-model="signup.pass"
            type="password"
            label="Password"
            color="mulberry"
            outlined
            dense
            class="col-span-2 md:col-span-1"
          />
          <q-input
            v-model="signup.rpass"
            type="password"
            label="Repeat Password"
            color="mulberry"
            outlined
            dense
            class="col-span-2 md:col-span-1"
          />

          <div class="col-span-full flex justify-center space-y-2 md:space-y-0 md:justify-between items-center mt-1">
            <a class="text-ship-gray font-medium" @click="$emit('login')">Already have an account?</a>
            <q-btn
              class="self-end w-44 bg-mulberry text-white py-2"
              label="Signup"
              unelevated
              @click="login"
            />
          </div>
        </div>
      </div>
      <div class="bg-gray-400 relative col-span-full h-96 md:h-auto md:col-span-2">
        <q-img src="images/bg/bg-learn.jpg" class="absolute inset-0" />
        <div class="bg-ship-gray-900 bg-opacity-50 absolute inset-0 p-10 md:px-20 md:py-10">
          <h1 class="text-white font-light text-3xl">You can use Lifelo with other networks</h1>
          <div class="mt-10 flex flex-col space-y-4">
            <q-btn
              class="max-w-xxs"
              style="background-color: #3b5998"
              text-color="white"
              icon="facebook"
              no-caps
              label="Sign in with Facebook"
              @click="login"
            />
            <q-btn
              class="max-w-xxs"
              text-color="white"
              style="background-color: #4285f4"
              icon="ion-logo-google"
              no-caps
              label="Sign in with Google"
              @click="login"
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
  name: 'SignUpDialog',
  emits: ['login', 'close'],
  setup() {
    const router = useRouter()

    const signup = ref({
      fname: '',
      lname: '',
      email: '',
      bday: '',
      pass: '',
      rpass: ''
    })

    const login = async () => {
      localStorage.setItem('token', 'faketoken')
      await router.replace('/l/')
    }

    return {
      signup,
      login
    }
  }
})
</script>
