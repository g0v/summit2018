<template>
  <span v-if="showSlotContent">
    <slot></slot>
  </span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EN',
  computed: mapState({
    showSlotContent (state) {
      return state.lang === 'EN'
    }
  })
}
</script>

<style scoped>
span {
  all: unset
}
</style>