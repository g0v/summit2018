<template>
  <div
    :class="['agendum-cell', 'text-center', { 'pointer': shouldShowDialog }]"
    :role="shouldShowDialog && 'link'"
    tabindex="0"
    @click="goToAgendum"
  >
    <h6>
      <TW>{{ title['TW'] || title['EN'] }}</TW>
      <EN>{{ title['EN'] || title['TW'] }}</EN>
    </h6>
    <small v-if="subtitle !== null">
      <TW>{{ subtitle['TW'] || subtitle['EN'] }}</TW>
      <EN>{{ subtitle['EN'] || subtitle['TW'] }}</EN>
    </small>
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
        TW: this.agendum['TITLE'] || this.agendum['TITLE_EN'],
        EN: this.agendum['TITLE_EN'] || this.agendum['TITLE'],
      }
    },
    subtitle() {
      const { SPEAKER } = this.agendum
      if (isEmpty(SPEAKER)) {
        return null
      }
      return {
        TW: SPEAKER.map(s => s.NAME || s.NAME_EN).join('、'),
        EN: SPEAKER.map(s => s.NAME_EN || s.NAME).join(', '),
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
    shouldShowDialog() {
      return (
        has(this.agendum, 'ABSTRACT') ||
        has(this.agendum, 'ABSTRACT_EN') ||
        has(this.agendum, 'speaker.NAME') ||
        has(this.agendum, 'speaker.NAME_EN') ||
        has(this.agendum, 'speaker.TITLE1') ||
        has(this.agendum, 'speaker.TITLE1_EN') ||
        has(this.agendum, 'speaker.BIO') ||
        has(this.agendum, 'speaker.BIO_EN')
      )
    },
  },
  methods: {
    goToAgendum() {
      if (this.shouldShowDialog) {
        router.push({
          name: 'AgendaPage',
          params: { agendumId: this.agendum.id, slug: this.slug },
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.agendum-cell {
  padding: 20px 0;
  .pointer {
    cursor: pointer;
  }
}
</style>
