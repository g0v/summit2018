<template>
  <font v-if="showSlotContent">
    <slot></slot>
  </font>
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

</style>