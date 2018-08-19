<template>
  <div class="agendum-cell">
    <h6>
      <TW>{{ title['TW'] }}</TW>
      <EN>{{ title['EN'] }}</EN>
    </h6>
    <span v-if="subtitle !== null">
      <TW>{{ subtitle['TW'] }}</TW>
      <EN>{{ subtitle['EN'] }}</EN>
    </span>
  </div>
</template>

<script>
import has from 'lodash/has'
import isEmpty from 'lodash/isEmpty'

export default {
  name: 'AgendumCell',
  props: {
    agendum: {
      type: Object,
      required: true,
      validator: info => has(info, 'TITLE'),
    },
  },
  computed: {
    title() {
      return {
        TW: this.agendum['TITLE'],
        EN: this.agendum['TITLE_EN'] || this.agendum['TITLE'],
      }
    },
    subtitle() {
      const { SPEAKER } = this.agendum
      if (isEmpty(SPEAKER)) {
        return null
      }
      return {
        TW: SPEAKER.map(s => s.NAME).join(' '),
        EN: SPEAKER.map(s => s.NAME_EN || s.NAME).join(' '),
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.agendum-cell {
  padding: 20px 0;
}
</style>
