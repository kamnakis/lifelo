<template>
  <div class="flex flex-col pb-8 border-b-2">
    <div class="w-full flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <q-avatar size="60px">
          <img :src="post.user.profileImage" />
        </q-avatar>
        <div class="flex flex-col">
          <h3 class="text-lg font-bold text-ship-gray">
            {{ post.user.fullName }}
          </h3>
          <h4 class="w-52 text-sm font-normal text-ship-gray-400 truncate">
            {{ post.user.description }}
          </h4>
        </div>
      </div>
      <q-btn flat round class="text-ship-gray" icon="more_vert">
        <q-menu anchor="bottom right" self="top right" :offset="[0, 5]">
          <q-list style="min-width: 150px">
            <q-item
              class="flex items-center justify-start space-x-2"
              clickable
              v-close-popup
              dense
              @click="$router.push(`/l/profile/${post.user.id}`)"
            >
              <q-icon name="account_circle" size="1.2rem" />
              <span>Visit profile</span>
            </q-item>
            <q-separator />
            <q-item
              class="flex items-center justify-start space-x-2"
              clickable
              v-close-popup
              dense
            >
              <q-icon name="report" size="1.2rem" /> <span>Report</span>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <p class="w-full mt-4 text-sm md:text-base text-ship-gray font-normal">
      {{ post.body }}
    </p>
    <div class="flex items-center space-x-2 md:space-x-5 mt-8">
      <LikeButton label="Cool" icon="thumb_up" />
      <CommentButton label="Comment" icon="insert_comment" />
      <ShareButton label="Share" icon="share" />
      <h5 class="mt-2 md:mt-0 text-sm font-medium text-ship-gray">
        Before 4 hours
      </h5>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LikeButton from 'src/components/LikeButton.vue'
import CommentButton from 'src/components/CommentButton.vue'
import ShareButton from 'src/components/ShareButton.vue'
import { Post } from 'src/models/models'

export default defineComponent({
  props: {
    post: {
      type: Object as () => Post,
      required: true
    }
  },
  components: {
    LikeButton,
    CommentButton,
    ShareButton
  },
  setup() {
    return {}
  }
})
</script>
