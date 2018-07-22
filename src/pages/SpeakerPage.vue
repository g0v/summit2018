<template>
  <section id="speaker-page" class="grid-container">
    <div class="grid-x grid-margin-x">
      <template v-for="(speaker, index) in speakers">
        <!-- Spacers push five <SpeakerIntro/> in a row -->
        <div v-if="index!==0&&index%5===0" :key="`1st-spacer:${speaker.id}`" class="spacer cell large-1 medium-0 small-0"/>
        <div v-if="index%5===0" :key="`2nd-spacer:${speaker.id}`" class="spacer cell large-1 medium-0 small-0"/>

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

  // TODO: Spacers are used to get five <SpeakerInfo/> in a row. Try better approch.
  // .spacer {
  //   border: 1px dashed green;
  // }
}
</style>
