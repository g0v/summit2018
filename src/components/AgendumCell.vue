<template>
  <a
    :class="['agendum-cell-link', { 'pointer': shouldShowDialog }]"
    :role="shouldShowDialog && 'link'"
    tabindex="0"
    @click="goToAgendum"
  >
    <div class="agendum-cell">
      <!-- Label -->
      <b v-if="label" class="label">{{ label }}</b>
      <div v-if="label" class="label-spacer"/>

      <!-- Series (Visible if first of series) -->
      <div
        v-if="seriesName"
        :class="['series-name', {'hide': !isSeriesHeader}]"
      >
        {{ seriesName }}
      </div>

      <!-- Selerator within series (show to replace border-top of <td>, if not first of series) -->
      <div v-if="seriesName && !isSeriesHeader" class="series-seperator"/>

      <!-- Title -->
      <h6 class="title">
        <TW>{{ title['TW'] || title['EN'] }}</TW>
        <EN>{{ title['EN'] || title['TW'] }}</EN>
      </h6>

      <!-- Subtitle -->
      <small v-if="subtitle !== null" class="subtitle">
        <TW>{{ subtitle['TW'] || subtitle['EN'] }}</TW>
        <EN>{{ subtitle['EN'] || subtitle['TW'] }}</EN>
      </small>
    </div>
  </a>
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
    label() {
      return this.agendum.TYPE
    },
    seriesName() {
      return this.agendum.TRACK
    },
    isSeriesHeader() {
      return this.seriesName && this.agendum.isFirstWithinTrack
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
.agendum-cell-link {
  // Hack the table content to vertically fill <td> (https://stackoverflow.com/a/15801081/6739302)
  display: block;
  margin: -30em;
  padding: 30em;
  background-color: $dark-gray;

  .agendum-cell {
    padding: 20px 10px;
    .title {
      color: black;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      line-height: 16px;
    }
    .subtitle {
      color: black;
      font-size: 12px;
    }
    .pointer {
      cursor: pointer;
    }
    .label {
      position: absolute;
      text-align: center;
      top: 10px;
      left: 0;
      color: white;
      height: 24px;
      width: 72px;
      background-color: $primary-color;
      border-radius: 0 24px 24px 0;
      padding-left: 0;
      padding-right: 0;
    }
    .label-spacer {
      height: 30px;
    }
    .series-name {
      color: $primary-color;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1.5px;
    }
    .series-seperator {
      width: 25%;
      height: 2px;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      margin-right: auto;
      margin-left: auto;
      position: absolute;
      top: 0;
    }
  }
}
</style>
