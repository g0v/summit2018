<template>
  <section id="speaker-page" class="grid-container">
    <div class="grid-x grid-margin-x large-up-5">
      <template v-for="speaker in speakers">
        <!-- Speaker avatar and title -->
        <SpeakerIntro
          :key="`speaker-intro:${speaker.id}`"
          :speaker="speaker"
          class="speaker-intro cell large-2 medium-3 small-6 text-center"
        />
      </template>
    </div>
  </section>
</template>

<script>
import SpeakerIntro from '@/views/SpeakerIntro'
import { NORMALIZED_SPEAKERS } from '@/../static/airtable_data'

export default {
  name: 'SpeakerPage',
  components: { SpeakerIntro },
  computed: {
    speakers() {
      return NORMALIZED_SPEAKERS.filter(
        speaker => speaker['SHOW'] && speaker['NAME']
      )
    },
  },
}
</script>

<style lang="scss" scoped>
#speaker-page {
  margin-top: 140px;
  margin-bottom: 140px;
}
</style>
