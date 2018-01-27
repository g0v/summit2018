<template>
  <font v-if="showSlotContent">
    <slot></slot>
  </font>
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

</style>