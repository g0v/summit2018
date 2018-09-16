<template>
  <section id="speaker-page" class="grid-container">
    <div class="grid-x grid-margin-x large-up-5">
      <div
        v-for="speaker in speakers"
        :key="`speaker-intro:${speaker.id}`"
        :id="speaker.id"
        class="speaker-intro cell large-2 medium-3 small-6 text-center"
      >
        <!-- Speaker avatar and title -->
        <component
          :is="speaker.agendumLink ? 'router-link' : 'span'"
          :to="speaker.agendumLink"
        >
          <SpeakerAvatar :speaker="speaker"/>
        </component>
        <!-- Name and Title -->
        <h6>
          <b>
            <TW>{{ speaker.NAME || speaker.NAME_EN }}</TW>
            <EN>{{ speaker.NAME_EN || speaker.NAME }}</EN>
          </b>
        </h6>
        <div class="speaker-titles">
          <TW>{{ speaker.TITLE1 || speaker.TITLE1_EN }}</TW>
          <EN>{{ speaker.TITLE1_EN || speaker.TITLE1 }}</EN>
          <br>
          <TW>{{ speaker.TITLE2 || speaker.TITLE2_EN }}</TW>
          <EN>{{ speaker.TITLE2_EN || speaker.TITLE2 }}</EN>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import has from 'lodash/has'
import get from 'lodash/get'
import SpeakerAvatar from '@/views/SpeakerAvatar'
import { POPULATED_SPEAKERS } from '@/../static/airtable_data'

export default {
  name: 'SpeakerPage',
  components: { SpeakerAvatar },
  computed: {
    speakers() {
      return POPULATED_SPEAKERS.filter(
        speaker => speaker['SHOW'] && speaker['NAME']
      ).map(this._mapFirstAgendumLink)
    },
  },
  methods: {
    // 若該講者有對應的 agenda 資料，則附上 agendumDialog 的連結
    _mapFirstAgendumLink(speaker) {
      return has(speaker, 'SCHEDULE[0]')
        ? {
            ...speaker,
            agendumLink: has(speaker, 'SCHEDULE[0]') && {
              name: 'SpeakerPage',
              params: { agendumIdOrDay: get(speaker, 'SCHEDULE[0].id') },
            },
          }
        : speaker
    },
  },
}
</script>

<style lang="scss" scoped>
#speaker-page {
  margin-top: 140px;
  margin-bottom: 140px;
  .speaker-intro {
    h6 {
      margin-top: 18px;
      margin-bottom: 8px;
    }
    .speaker-titles {
      font-size: 14px;
    }
    margin-bottom: 35px;
  }
}
</style>
