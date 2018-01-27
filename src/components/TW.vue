<template>
  <span v-if="showSlotContent">
    <slot></slot>
  </span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TW',
  computed: mapState({
    showSlotContent (state) {
      return state.lang === 'TW'
    }
  })
}
</script>

<style scoped>
span {
  all: unset
}
</style>