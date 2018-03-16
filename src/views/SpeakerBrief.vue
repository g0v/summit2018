<template lang="pug">

.card.speaker
  .card-section
    .media-object
      .media-object-section.middle
        img(:src="speaker.avatarUrl").thumbnail.avatar
      .media-object-section.main-section
        h5 {{ speaker.name }}
          br
          small.speaker-title {{ speaker.title }}
        p {{ speaker.description }}
  .mask.grid-x.align-middle.align-center
    img.photo(:src="speaker.photoUrl")
    a.youtube.button.primary.hollow.flex-container.align-middle(:href="speaker.youtube", target="_blank", :alt="'YouTube video of ' + speaker.name")
      FaIcon(name="youtube-play", scale="1.2")
      span &nbsp; Watch on YouTube

</template>

<script>
import has from 'lodash/has'

export default {
  name: 'SpeakerBrief',
  props: {
    speaker: {
      type: Object,
      required: true,
      validator: speaker =>
        has(speaker, 'name') &&
        has(speaker, 'title') &&
        has(speaker, 'description') &&
        has(speaker, 'photoUrl') &&
        has(speaker, 'avatarUrl') &&
        has(speaker, 'youtube'),
    },
  },
}
</script>

<style lang="scss" scoped>
.speaker {
  position: relative;
  .mask {
    display: flex;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: rgba($dark-gray, 0.75);
    .photo {
      opacity: 0.9;
      width: 100%;
    }
    .youtube {
      position: absolute;
      bottom: 20px;
      right: 20px;
      margin-bottom: 0;
      background-color: rgba($white, 0.9);
    }
  }
  &:hover {
    .mask {
      opacity: 1;
    }
  }
}
.avatar {
  border-radius: 50%;
  height: 64px;
}
</style>
