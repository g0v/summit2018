<template lang="pug">
div
  img(:src="photoUrl", ref="photo").photo
</template>

<script>
import { FocusedImage } from 'image-focus'

export default {
  name: 'FocusImage',
  props: {
    photoUrl: {
      type: String,
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      focusedImage: null,
    }
  },
  mounted: function() {
    if (Object.keys(this.$refs).includes('photo')) {
      let photo = this.$refs.photo
      const focus = { x: this.x, y: this.y }
      this.focusedImage = new FocusedImage(photo, {
        focus: focus,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
img.photo {
  max-width: unset;
}
</style>
