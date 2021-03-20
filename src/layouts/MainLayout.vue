<template>
  <q-layout view="hHh lpR lFf">
    <q-header
      reveal
      :reveal-offset="10"
      bordered
      class="bg-white text-white px-2"
    >
      <q-toolbar class="flex items-center justify-between">
        <q-btn
          dense
          flat
          round
          icon="menu"
          class="text-mulberry-500 md:hidden"
          @click="toggleLeftDrawer"
        />
        <div class="flex items-center space-x-4">
          <svg
            width="40"
            height="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9098 1.00406c2.0085-.652583 4.1719-.652583 6.1804 0l5.5753 1.81154c2.0085.65258 3.7588 1.92424 5 3.63272l3.4458 4.74268c1.2413 1.7085 1.9098 3.7661 1.9098 5.8779v5.8622c0 2.1118-.6685 4.1694-1.9098 5.8779l-3.4458 4.7427c-1.2412 1.7085-2.9915 2.9801-5 3.6327l-5.5753 1.8115c-2.0085.6526-4.1719.6526-6.1804 0l-5.5753-1.8115c-2.00847-.6526-3.75875-1.9242-5.00003-3.6327L2.8887 28.809C1.64742 27.1005.97887 25.0429.97887 22.9311v-5.8622c0-2.1118.66855-4.1694 1.90983-5.8779l3.44577-4.74269C7.57575 4.73984 9.32603 3.46818 11.3345 2.8156l5.5753-1.81154z"
              fill="#D1489B"
            />
            <path
              d="M28.6351 13.598l-8.2399-3.5183c-.2547-.10626-.5354-.10626-.79 0l-8.2403 3.5183c-.1072.0447-.1995.1247-.2647.2293-.0653.1045-.1002.2287-.1002.3559v1.4418c0 .3453.2517.625.5625.625h16.875c.3108 0 .5625-.2797.5625-.625v-1.4418c0-.2605-.1455-.4937-.3649-.5852zM13.25 17.5v6.25h-.5625c-.3108 0-.5625.2797-.5625.625v1.875h15.75v-1.875c0-.3453-.2517-.625-.5625-.625H26.75V17.5H24.5v6.25h-3.375V17.5h-2.25v6.25H15.5V17.5h-2.25zm15.1875 10h-16.875c-.3108 0-.5625.2797-.5625.625v1.25c0 .3453.2517.625.5625.625h16.875c.3108 0 .5625-.2797.5625-.625v-1.25c0-.3453-.2517-.625-.5625-.625z"
              fill="#fff"
            />
          </svg>
          <span class="text-2xl text-mulberry font-mono font-bold">LIFELO</span>
        </div>

        <div class="md:flex-1 flex items-center justify-end md:space-x-11">
          <q-tabs
            dense
            align="justify"
            class="w-1/3 text-ship-gray desktop-only"
            active-color="mulberry"
          >
            <q-route-tab
              to="/l/courses"
              exact
              :ripple="false"
              icon="menu_book"
              label="Courses"
            />
            <q-route-tab
              to="/l/guidance"
              exact
              :ripple="false"
              icon="volunteer_activism"
              label="Guidance"
            />
            <q-route-tab
              to="/l"
              exact
              :ripple="false"
              icon="feed"
              label="News"
            />
          </q-tabs>

          <q-input
            v-model="search"
            type="text"
            borderless
            dense
            placeholder="Search..."
            class="mb-1 border border-ship-gray-300 rounded-full px-4 desktop-only"
          >
            <template v-slot:prepend>
              <q-icon name="search" class="text-ship-gray-300" />
            </template>
          </q-input>

          <q-avatar class="cursor-pointer" size="3rem">
            <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
              :offset="[0, 10]"
              anchor="bottom right"
              self="top right"
              class="shadow-1"
            >
              <q-list style="min-width: 150px" class="pb-2">
                <q-item clickable @click="$router.push('/l/profile/me')" class="text-xl font-bold text-ship-gray">
                  Thomas R.
                </q-item>
                <q-item clickable dense>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable dense @click="logout">
                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      bordered
    >
      <q-input
        v-model="search"
        type="text"
        borderless
        dense
        placeholder="Search..."
        class="my-1 mx-2 border border-ship-gray-300 rounded-full px-4"
      >
        <template v-slot:prepend>
          <q-icon name="search" class="text-ship-gray-300" />
        </template>
      </q-input>

      <q-tabs
        vertical
        inline-label
        class="text-ship-gray h-auto"
        active-color="mulberry"
      >
        <q-route-tab
          to="/l"
          exact
          :ripple="false"
          icon="feed"
          label="News"
          content-class="w-full flex items-center justify-start"
        />
        <q-route-tab
          to="/l/guidance"
          exact
          :ripple="false"
          icon="volunteer_activism"
          label="Guidance"
          content-class="w-full flex items-center justify-start"
        />
        <q-route-tab
          to="/l/courses"
          exact
          :ripple="false"
          icon="menu_book"
          label="Courses"
          content-class="w-full flex items-center justify-start"
        />
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const search = ref('')

    const leftDrawerOpen = ref(false)
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const logout = async () => {
      localStorage.removeItem('token')
      await router.replace('/')
    }

    onBeforeMount(async () => {
      if (localStorage.getItem('token') !== 'faketoken') {
        await router.replace('/')
      }
    })

    return {
      search,
      leftDrawerOpen,
      toggleLeftDrawer,
      logout
    }
  }
})
</script>
