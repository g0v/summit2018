<template>
  <span ref="wrapper" :class="[bindClass, 'scroll-to-tack']">
    <slot/>
  </span>
</template>

<script>
export default {
  name: 'ScrollToTack',
  props: {
    tackClass: {
      type: String,
      default: 'tack-right-bottom',
    },
  },
  data() {
    return {
      offsetTop: undefined,
    }
  },
  computed: {
    bindClass() {
      return this.$store.state.scrollY >= this.offsetTop ? this.tackClass : ''
    },
  },
  mounted() {
    window.foo = this.$refs['wrapper']
    this.offsetTop = this.$refs['wrapper'].offsetTop
  },
}
</script>

<style scoped>
.tack-right-bottom {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 500px;
}
</style>
