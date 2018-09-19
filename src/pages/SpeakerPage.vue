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
          :is="speaker.avatarLink ? 'router-link' : 'span'"
          :to="speaker.avatarLink"
        >
          <SpeakerAvatar :speaker="speaker"/>
        </component>
        <!-- Name and Title -->
        <h6>
          <b>
            <TW>
              {{ speaker.IS_MODERATOR && '【主持人】' }}
              {{ speaker.NAME || speaker.NAME_EN }}
            </TW>
            <EN>
              {{ speaker.IS_MODERATOR && '[moderator]' }}
              {{ speaker.NAME_EN || speaker.NAME }}
            </EN>
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
import { mapState } from 'vuex'
import has from 'lodash/has'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import SpeakerAvatar from '@/views/SpeakerAvatar'
import { POPULATED_SPEAKERS } from '@/../static/airtable_data'

export default {
  name: 'SpeakerPage',
  components: { SpeakerAvatar },
  computed: {
    ...mapState(['lang']),
    speakers() {
      return sortBy(POPULATED_SPEAKERS, this.getComparableBasis).map(
        this._mapAvatarLink
      )
    },
  },
  methods: {
    // 若該講者有對應的 agenda 資料則附上 agendum dialog; 若有 track 資料則付上 track popover 的連結
    _mapAvatarLink(speaker) {
      let _speaker = speaker
      if (has(speaker, 'SCHEDULE[0]')) {
        _speaker = {
          ...speaker,
          avatarLink: {
            name: 'SpeakerPage',
            params: { agendumIdOrDay: get(speaker, 'SCHEDULE[0].id') },
          },
        }
      }

      if (speaker.IS_MODERATOR && has(speaker, 'TRACK[0]')) {
        _speaker = {
          ...speaker,
          avatarLink: {
            name: 'AgendaPage',
            query: { track: get(speaker, 'TRACK[0]') },
          },
        }
      }

      return _speaker
    },
    // 排序規則：講者一律優先於主持人，其餘根據顯示語系的 unicode 順序
    getComparableBasis(speaker) {
      const displayName =
        this.lang === 'EN'
          ? `${speaker.NAME_EN || speaker.NAME}`.toUpperCase().trim()
          : `${speaker.NAME || speaker.NAME_EN}`.toUpperCase().trim()

      // 未公布名稱講者
      if (speaker.NAME_EN === 'TBA' || speaker.NAME === '待公告') {
        return '🐛🐛ⒷⒾⒼⒼⒺⓇ ⓊⓃⒾⒸOⒹⒺ' + displayName
      }

      // 主持人
      if (speaker.IS_MODERATOR) {
        return '🐛ⒷⒾⒼ ⓊⓃⒾⒸOⒹⒺ' + displayName
      }

      return displayName
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
