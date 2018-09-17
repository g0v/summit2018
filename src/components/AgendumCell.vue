<template>
  <a
    v-close-popover
    :class="['agendum-cell-link', { 'pointer': shouldShowDialog }]"
    :role="shouldShowDialog && 'link'"
    tabindex="0"
    @click.stop="goToAgendum"
  >
    <div class="agendum-cell">
      <div class="fixed-cell-top">
        <!-- Series (Visible if first of series) -->
        <v-popover
          v-if="track"
          :class="['series-name', {'hide': !isSeriesHeader}]"
          :open="showTooltip"
          trigger="manual"
        >
          <!-- This will be the popover target (for the events and position) -->
          <div class="tooltip-target" @click.stop="openTooltip">
            <TW>{{ track.NAME || track.NAME_EN }}</TW>
            <EN>{{ track.NAME_EN || track.NAME }}</EN>
          </div>


          <!-- This will be the content of the popover -->
          <template slot="popover">
            <h6>
              <TW>{{ track.NAME || track.NAME_EN }}</TW>
              <EN>{{ track.NAME_EN || track.NAME }}</EN>
            </h6>
            <p v-if="trackModeratorNames">
              <TW>主持人：{{ trackModeratorNames.TW }}</TW>
              <EN>Moderator: {{ trackModeratorNames.EN }}</EN>
            </p>
            <p>
              <TW>{{ track.DESCRIPTION || track.DESCRIPTION_EN }}</TW>
              <EN>{{ track.DESCRIPTION_EN || track.DESCRIPTION }}</EN>
            </p>
          </template>
        </v-popover>

        <!-- Label -->
        <b v-if="label" class="label">{{ label }}</b>
      </div>

      <div v-if="label" class="label-spacer"/>
      <div
        v-if="track"
        :class="['series-name series-name-spacer', {'hide': !isSeriesHeader}]"
      />

      <!-- Selerator within series (show to replace border-top of <td>, if not first of series) -->
      <div v-if="track && !isSeriesHeader" class="series-seperator"/>

      <!-- Title -->
      <h6 class="title">
        <TW>{{ title['TW'] || title['EN'] }}</TW>
        <EN>{{ title['EN'] || title['TW'] }}</EN>
      </h6>

      <!-- Subtitle -->
      <small v-if="agendum.SPEAKER" class="subtitle">
        <span v-for="speaker in agendum.SPEAKER" :key="speaker.NAME" class="v-align-child-middle">
          <TW>{{ speaker.NAME || speaker.NAME_EN }}</TW>
          <EN>{{ speaker.NAME_EN || speaker.NAME }}</EN>
          <!-- Easter egg: add ?flag=1 to url to show country flag! -->
          <span
            v-tooltip="speaker.COUNTRY"
            v-for="(code, i) in speaker.COUNTRY_CODE"
            v-if="code !== 'tw'"
            :key="`${speaker.NAME}:${code}`"
            :class="showFlag && `flag flag-${code}`"
          >
            <template v-if="i === 0"> - </template>
            <template v-else>, </template>
            <span v-if="!showFlag">{{ code.toUpperCase() }}</span>
          </span>
          <br>
        </span>
      </small>
    </div>
  </a>
</template>

<script>
import '@/assets/flag-sprites.com/flags.min.css' // Country flag source: https://www.flag-sprites.com/
import router from '@/router'
import has from 'lodash/has'
import get from 'lodash/get'
import find from 'lodash/find'
import isEmpty from 'lodash/isEmpty'
import { POPULATED_TRACK } from '@/../static/airtable_data/index'

export default {
  name: 'AgendumCell',
  props: {
    agendum: {
      type: Object,
      required: true,
      validator: info => has(info, 'TITLE'),
    },
  },
  data() {
    return {
      showTooltip: false,
    }
  },
  computed: {
    title() {
      return {
        TW: this.agendum['TITLE'] || this.agendum['TITLE_EN'],
        EN: this.agendum['TITLE_EN'] || this.agendum['TITLE'],
      }
    },
    speaker() {
      const { SPEAKER } = this.agendum
      if (isEmpty(SPEAKER)) {
        return null
      }
      return {
        TW: SPEAKER.map(s => s.NAME || s.NAME_EN).join('、'),
        EN: SPEAKER.map(s => s.NAME_EN || s.NAME).join(', '),
        ...SPEAKER,
      }
    },
    label() {
      return this.agendum.TYPE
    },
    track() {
      const trackId = get(this.agendum, 'TRACK[0]')
      return trackId ? find(POPULATED_TRACK, ['id', trackId]) : null
    },
    trackModeratorNames() {
      const moderators = get(this.track, 'MODERATOR')
      return moderators
        ? {
            TW: moderators
              .map(speaker => speaker.NAME || speaker.NAME_EN)
              .join('、'),
            EN: moderators
              .map(speaker => speaker.NAME_EN || speaker.NAME)
              .join(', '),
          }
        : null
    },
    isSeriesHeader() {
      return this.track && this.agendum.isFirstWithinTrack
    },
    slug() {
      if (this.agendum.TITLE_EN) {
        return encodeURIComponent(
          this.agendum.TITLE_EN.toLowerCase()
            .replace(/[:.,，。\s“”'’]/g, '-')
            .replace(/["'#?!]/g, '')
            .slice(0, 80)
        )
      }
    },
    shouldShowDialog() {
      return (
        has(this.agendum, 'ABSTRACT') ||
        has(this.agendum, 'ABSTRACT_EN') ||
        !isEmpty(this.agendum.SPEAKER)
      )
    },
    showFlag() {
      return !!this.$route.query.flag
    },
  },
  watch: {
    $route(to, from) {
      if (this.track && this.agendum.isFirstWithinTrack) {
        this.showTooltip = this.track.id === to.query.track
      }
    },
  },
  mounted() {
    if (this.track && this.track.id === this.$route.query.track) {
      this.showTooltip = true
    }
  },
  methods: {
    goToAgendum() {
      if (this.shouldShowDialog) {
        router.push({
          name: 'AgendaPage',
          params: { agendumIdOrDay: this.agendum.id, slug: this.slug },
        })
      }
    },
    openTooltip() {
      router.replace({ query: { track: this.track.id } })
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
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 1px;
      line-height: 18px;
    }
    .subtitle {
      color: black;
      font-size: 14px;
    }
    .pointer {
      cursor: pointer;
    }
    .fixed-cell-top {
      position: absolute;
      top: 10px;
      left: 0;
      width: 100%;
      .series-name {
        text-align: center;
        color: $primary-color;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1.5px;
        margin-bottom: 15px;
      }
      .label {
        position: absolute;
        left: 0;
        text-align: center;
        color: white;
        height: 24px;
        width: 72px;
        background-color: $primary-color;
        border-radius: 0 24px 24px 0;
        padding-left: 0;
        padding-right: 0;
      }
    }
    .series-name-spacer,
    .label-spacer {
      height: 30px;
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

// Styles for tooltip
<style lang="scss">
.tooltip {
  max-width: 370px;
  background-color: unset;

  .tooltip-inner {
    color: black;
    background: white;
    border: 3px solid $primary-color;
    border-radius: 5px;
    padding: 5px 10px 4px;
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
    }
  }
}
</style>
