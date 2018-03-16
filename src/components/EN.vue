<template>
  <span v-if="showSlotContent">
    <slot/>
  </span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EN',
  computed: mapState({
    showSlotContent(state) {
      return state.lang === 'EN'
    },
  }),
}
</script>

<style lang="scss" scoped>
</style>
