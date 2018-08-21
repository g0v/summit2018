<template>
  <div class="agendum-cell" @click="goToAgendum">
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
import router from '@/router'
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
    slug() {
      if (this.agendum.TITLE_EN) {
        return encodeURIComponent(
          this.agendum.TITLE_EN.toLowerCase()
            .replace(/[:.,，。\s]/g, '-')
            .replace(/["'#?!]/g, '')
            .slice(0, 80)
        )
      }
    },
  },
  methods: {
    goToAgendum() {
      router.push({
        name: 'AgendaPage',
        params: { agendumId: this.agendum.id, slug: this.slug },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.agendum-cell {
  padding: 20px 0;
  cursor: pointer;
}
</style>
