<template>
  <div id="AgendaPage" class="grid-x align-center">
    <section id="agenda" class="cell large-10 text-center">
      <CapsuleRadioButton
        id="date-picker"
        :options="dates"
        v-model="activeDate"
        lazy
        debounce="500"
      />
      <ParallelAgenda
        :agenda="schedule[activeDate]"
        :agendum-props-mapper="agendumPropsMapper"
        :agendum-component="AgendumCell"
        :threads="['R2', 'R0', 'R1', 'R3']"
        :common-thread="'ALL'"
        agenda-key-of-thread="VENUE"
        agenda-key-of-start-time="START"
        agenda-key-of-end-time="END"
      />
    </section>
    <section id="maps" class="cell large-10">
      <h4>
        <TW>活動會場</TW>
        <EN>Venue</EN>
      </h4>
      <div class="text-center">
        <img class="map" src="@/assets/AgendaPage/3F.svg" alt="3F 場地圖" >
        <img class="map" src="@/assets/AgendaPage/4F.svg" alt="4F 場地圖" >
      </div>
    </section>
  </div>
</template>

<script>
import CapsuleRadioButton from '@/components/CapsuleRadioButton'
import ParallelAgenda from '@/components/ParallelAgenda'
import AgendumCell from '@/components/AgendumCell'
import get from 'lodash/get'
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import groupBy from 'lodash/groupBy'

import { NORMALIZED_SCHEDULE } from '@/../static/airtable_data/index'

export default {
  name: 'AgendaPage',
  components: { CapsuleRadioButton, ParallelAgenda, AgendumCell },
  data() {
    let schedule = NORMALIZED_SCHEDULE.map(record => ({
      ...record,
      START: new Date(record.START),
      END: new Date(record.END),
    }))
    schedule = sortBy(schedule, 'START')
    schedule = filter(schedule, 'SHOW')
    schedule = groupBy(schedule, record => this.formatDate(record.START))

    const dates = Object.keys(schedule)

    return {
      schedule,
      dates,
      activeDate: dates[0],
      AgendumCell,
    }
  },
  methods: {
    agendumPropsMapper(agendum) {
      return agendum
    },
    formatDate(d) {
      const month = [
        'Jan.',
        'Feb.',
        'Mar.',
        'Apr.',
        'May',
        'Jun.',
        'Jul.',
        'Aug.',
        'Sept.',
        'Oct.',
        'Nov. ',
      ][d.getMonth()]
      let date =
        get(['1st', '2nd', '3rd'], `${d.getDate()}`) || `${d.getDate()}th`
      return `${month} ${date}`
    },
  },
}
</script>

<style lang="scss" scoped>
section#agenda {
  margin: 10px 0 120px;
  #date-picker {
    margin: 100px 0;
  }
}

section#maps {
  .map {
    max-width: 900px;
  }
}
</style>
