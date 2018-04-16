<template>
  <span v-if="showSlotContent" class="tw">
    <slot/>
  </span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TW',
  computed: mapState({
    showSlotContent(state) {
      return state.lang === 'TW'
    },
  }),
}
</script>

<style lang="scss" scoped>
</style>
