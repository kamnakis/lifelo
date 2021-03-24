<template>
  <q-page>
    <div class="container mx-auto px-0 lg:px-10 mt-10 grid grid-cols-5 gap-2 lg:gap-5 xl:gap-10">
      <div class="col-span-full flex flex-row items-center justify-between px-4 lg:px-0 z-10">
        <h1 class="text-xl md:text-4xl font-bold text-ship-gray">Connect with other students</h1>
        <q-btn flat round class="text-ship-gray" icon="more_vert">
          <q-menu anchor="bottom right" self="top right" :offset="[0, 5]">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup dense>
                <q-item-section>View more</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup dense @click="showSuggestions = !showSuggestions">
                <q-item-section>{{ showSuggestions ? 'Hide' : 'Show'}}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>

      <transition-group
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
        <template v-if="showSuggestions">
          <!-- Suggerstions Desktop -->
          <ProfileCard
            v-for="(profile, index) in profiles.slice(0, 5)"
            :key="index"
            :profile="profile"
            class="desktop-only"
          />
          <!-- Suggerstions Mobile -->
          <q-carousel
            ref="carousel"
            key="carousel"
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            swipeable
            infinite
            arrows
            control-color="black"
            class="col-span-full h-auto mobile-only relative"
          >
            <q-carousel-slide
              v-for="(profile, index) in profiles"
              :key="index"
              :name="index"
            >
              <ProfileCard :profile="profile" />
            </q-carousel-slide>
          </q-carousel>
        </template>
      </transition-group>
    </div>

    <div class="container mx-auto px-4 lg:px-10 mt-10 grid grid-cols-1 lg:grid-cols-7 gap-10 pb-10">
      <q-infinite-scroll @load="loadMore" :offset="250" class="lg:col-span-5 flex flex-col space-y-5">
        <PostCard v-for="(post, index) in posts" :key="index" :post="post" />
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-facebook color="mulberry" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>

      <div class="desktop-only col-span-2 flex flex-col space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-ship-gray">Your courses</h3>
          <a class="text-xs font-normal text-ship-gray">View all</a>
        </div>

        <div class="w-full p-5 bg-white shadow-s2 rounded-xl flex items-center justify-between">
          <div class="flex-1 flex flex-col">
            <h1 class="text-xl font-semibold text-ship-gray">Profitable Business</h1>
            <h4 class="text-base font-medium text-ship-gray-400">Next class: 23/04</h4>
          </div>
          <q-btn round flat color="mulberry" icon="visibility" dense size="1rem" />
        </div>
        <div class="w-full p-5 bg-white shadow-s2 rounded-xl flex items-center justify-between">
          <div class="flex-1 flex flex-col">
            <h1 class="text-xl font-semibold text-ship-gray">Professional Communications</h1>
            <h4 class="text-base font-medium text-ship-gray-400">Next class: 24/04</h4>
          </div>
          <q-btn round flat color="mulberry" icon="visibility" dense size="1rem" />
        </div>
        <div class="w-full p-5 bg-white shadow-s2 rounded-xl flex items-center justify-between">
          <div class="flex-1 flex flex-col">
            <h1 class="text-xl font-semibold text-ship-gray">Basics of Digital Image Editing</h1>
            <h4 class="text-base font-medium text-ship-gray-400">Next class: 01/05</h4>
          </div>
          <q-btn round flat color="mulberry" icon="visibility" dense size="1rem" />
        </div>

        <div class="flex items-center justify-between mt-6">
          <h3 class="text-lg font-bold text-ship-gray">Your meetings</h3>
          <a class="text-xs font-normal text-ship-gray">View all</a>
        </div>

        <div class="w-full p-5 bg-white shadow-s2 rounded-xl flex items-center justify-between">
          <div class="flex-1 flex flex-col">
            <h1 class="text-base font-semibold text-ship-gray">You &lt;&gt; Mr. Nikolson James</h1>
            <h4 class="text-sm font-medium text-ship-gray-400">05/11/2021 - 12:00 - 13:00</h4>
          </div>
          <q-btn round flat color="mulberry" icon="meeting_room" dense size="1rem" />
        </div>

        <div class="flex flex-col space-y-4 items-center pt-8">
          <a class="text-ship-gray font-medium">©lifelo 2021. All rights reserved.</a>
          <a class="text-ship-gray font-medium">Privacy</a>
          <a class="text-ship-gray font-medium">Terms</a>
          <a class="text-ship-gray font-medium">About</a>
          <a class="text-ship-gray font-medium">Contact</a>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { LoremIpsum } from 'lorem-ipsum'
import ProfileCard from 'src/components/ProfileCard.vue'
import PostCard from 'src/components/PostCard.vue'
import { Post, Profile } from 'src/models/models'
import { profiles as pr } from 'src/assets/profiles'

export default defineComponent({
  name: 'PageIndex',
  components: {
    ProfileCard,
    PostCard
  },
  setup() {
    const profiles = ref<Profile[]>(pr)

    const slide = ref(0)
    const showSuggestions = ref(true)

    const posts = ref<Post[]>([
      {
        user: profiles.value[Math.floor(Math.random() * profiles.value.length)],
        body: new LoremIpsum().generateSentences(4).toString(),
        likes: profiles.value.sort(() => 0.5 - Math.random()).slice(0, 3),
        comments: []
      },
      {
        user: profiles.value[Math.floor(Math.random() * profiles.value.length)],
        body: new LoremIpsum().generateSentences(4).toString(),
        likes: profiles.value.sort(() => 0.5 - Math.random()).slice(0, 3),
        comments: []
      },
      {
        user: profiles.value[Math.floor(Math.random() * profiles.value.length)],
        body: new LoremIpsum().generateSentences(4).toString(),
        likes: profiles.value.sort(() => 0.5 - Math.random()).slice(0, 3),
        comments: []
      }
    ])

    const loadMore = (_: number, done: (x?: boolean) => void) => {
      setTimeout(() => {
        for(let i = 0; i < 5; i++) {
          posts.value.push({
            user: profiles.value[Math.floor(Math.random() * profiles.value.length)],
            body: new LoremIpsum().generateSentences(4).toString(),
            likes: profiles.value.sort(() => 0.5 - Math.random()).slice(0, 3),
            comments: []
          })
          done()
        }
      }, 3000)
    }

    return {
      profiles,
      slide,
      showSuggestions,
      posts,
      loadMore
    }
  }
})
</script>
