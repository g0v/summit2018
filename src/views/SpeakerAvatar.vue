<template>
  <div class="speaker-intro">
    <!-- Avatar -->
    <img
      v-if="imgSrc"
      :src="imgSrc"
      :alt="`photo of speaker ${speaker.NAME_EN || speaker.NAME}`"
      class="avatar"
    >
    <img
      v-else
      alt="placeholder image"
      src="@/assets/SpeakerPage/default_avatar.png"
      class="avatar"
    >
  </div>
</template>

<script>
import has from 'lodash/has'
import get from 'lodash/get'

export default {
  name: 'SpeakerAvatar',
  props: {
    speaker: {
      type: Object,
      required: true,
      validator: speaker => has(speaker, 'NAME'),
    },
  },
  computed: {
    imgSrc() {
      return get(this.speaker, 'CROPPED_AVATAR[0].thumbnails.large.url')
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  height: 130px;
  width: 130px;
  border-radius: 65px;
  object-fit: cover;
}
</style>
