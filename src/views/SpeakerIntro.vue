<template>
  <div class="speaker-intro">
    <!-- Avatar -->
    <img
      v-if="imgSrc"
      :src="imgSrc"
      :alt="`photo of speaker ${speaker.NAME_EN}`"
      class="avatar"
    >
    <img
      v-else
      :alt="`photo of speaker ${speaker.NAME_EN}`"
      src="@/assets/SpeakerPage/default_avatar.png"
      class="avatar"
    >
    <!-- Name and Title -->
    <h6>
      <b>
        <TW>{{ speaker.NAME }}</TW><EN>{{ speaker.NAME_EN }}</EN>
      </b>
    </h6>
    <div>
      <TW>{{ speaker.TITLE1 }}</TW><EN>{{ speaker.TITLE1_EN }}</EN>
      <br>
      <TW>{{ speaker.TITLE2 }}</TW><EN>{{ speaker.TITLE2_EN }}</EN>
    </div>
  </div>
</template>

<script>
import has from 'lodash/has'
import get from 'lodash/get'

export default {
  name: 'SpeakerIntro',
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
.speaker-intro {
  margin-bottom: 35px;

  .avatar {
    height: 130px;
    widows: 130px;
    border-radius: 65px;
    margin-bottom: 18px;
  }
}
</style>
