<template lang="pug">

.card.keynote
  .card-section
    .media-object
      .media-object-section.middle
        img(:src="keynote.avatarUrl").thumbnail.avatar
      .media-object-section.main-section
        h5 {{ keynote.name }}
          br
          small.speaker-title {{ keynote.title }}
        p {{ keynote.description }}

</template>

<script>
import has from 'lodash/has'
import { FocusImage } from '@/components'

export default {
  name: 'KeynoteBrief',
  components: { FocusImage },
  props: {
    keynote: {
      type: Object,
      required: true,
      validator: keynote =>
        has(keynote, 'name') &&
        has(keynote, 'title') &&
        has(keynote, 'description') &&
        has(keynote, 'avatarUrl'),
    },
  },
}
</script>

<style lang="scss" scoped>
.keynote {
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
    top: 0px;
    left: 0px;
    .photo-container {
      width: 100%;
      height: 100%;
      & > .photo {
        opacity: 0.9;
      }
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
