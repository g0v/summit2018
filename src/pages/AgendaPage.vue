<template>
  <div id="AgendaPage" class="grid-x align-center">
    <section v-close-popover id="agenda" class="cell large-10 margin-bottom-3">
      <div class="text-center h5 margin-top-2 margin-bottom-3">
        <a href="https://g0v.hackmd.io/c/summit18" target="_blank">
          <TW>大會共筆</TW>
          <EN>Collaboration Notes</EN>
        </a>
        &nbsp;|&nbsp;
        <a href="https://beta.hackfoldr.org/g0v-Summit-2018-unconf" target="_blank">
          <TW>開放參與</TW>
          <EN>Open Participation</EN>
        </a>
        &nbsp;|&nbsp;
        <a href="https://g0v.auxala.com" target="_blank">
          <TW>即時口譯</TW>
          <EN>Realtime Interpretation</EN>
        </a>
      </div>
      <CapsuleRadioButton
        id="date-picker"
        :options="dates"
        v-model="activeDate"
        class="margin-bottom-2"
        lazy
        debounce="500"
      />
      <div id="parallel-agenda-wrapper">
        <ParallelAgenda
          id="parallel-agenda"
          :agenda="schedule[activeDate]"
          :agendum-props-mapper="agendumPropsMapper"
          :agendum-component="AgendumCell"
          :threads="['R2', 'R0', 'R1', 'R3']"
          :common-thread="'ALL'"
          agenda-key-of-thread="VENUE"
          agenda-key-of-start-time="START"
          agenda-key-of-end-time="END"
        />
      </div>
    </section>

    <section id="maps" class="cell large-10">
      <h1>
        <TW>活動會場</TW>
        <EN>Venue</EN>
      </h1>
      <div class="text-center">
        <h2>
          <TW>3F 會場地圖</TW>
          <EN>3F Maps</EN>
        </h2>
        <img class="map" src="@/assets/AgendaPage/3F.svg" alt="3F 場地圖" >
        <h2>
          <TW>4F 會場地圖</TW>
          <EN>4F Maps</EN>
        </h2>
        <img class="map" src="@/assets/AgendaPage/4F.svg" alt="4F 場地圖" >
      </div>
    </section>
  </div>
</template>

<script>
import router from '@/router'
import CapsuleRadioButton from '@/components/CapsuleRadioButton'
import ParallelAgenda from '@/components/ParallelAgenda'
import AgendumCell from '@/components/AgendumCell'
import get from 'lodash/get'
import find from 'lodash/find'
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import groupBy from 'lodash/groupBy'
import includes from 'lodash/includes'
import { POPULATED_SCHEDULE } from '@/../static/airtable_data/index'

export default {
  name: 'AgendaPage',
  components: {
    CapsuleRadioButton,
    ParallelAgenda,
    AgendumCell,
  },
  data() {
    let schedule = POPULATED_SCHEDULE.map(record => ({
      ...record,
      START: new Date(record.START),
      END: new Date(record.END),
    }))
    schedule = sortBy(schedule, 'START')
    schedule = filter(schedule, 'SHOW')
    schedule = groupBy(schedule, record => this.formatDate(record.START))

    const dates = Object.keys(schedule)

    // Try to set the activeDate with param, but use dates[0] as default if param not available
    const { agendumIdOrDay } = this.$route.params
    const hasDayParam =
      agendumIdOrDay && includes(dates, agendumIdOrDay.replace('_', ' '))
    const activeDate = hasDayParam ? agendumIdOrDay.replace('_', ' ') : dates[0]

    return {
      schedule,
      dates,
      activeDate,
      AgendumCell,
    }
  },
  watch: {
    $route(to, from) {
      if (!to.params.agendumIdOrDay) {
        // When an agendum dialog is closed
        this.syncActiveDateToParam()
      } else {
        // Come with link like /agenda/Oct_7
        const maybeDayParam = to.params.agendumIdOrDay.replace('_', ' ')

        this.dates.forEach(dateString => {
          if (
            maybeDayParam === dateString &&
            this.activeDate !== maybeDayParam
          ) {
            this.activeDate = maybeDayParam
          }
        })
      }
    },
    // Update the param when another date is selected
    activeDate(date) {
      this.syncActiveDateToParam()
    },
  },
  created() {
    // if a 'track' query is found, add the 'agendumIdOrDay' params if needed
    if (this.$route.query.track && !this.$route.params.agendumIdOrDay) {
      const day = this.getDayByTrackId(this.$route.query.track)
      router.push({
        name: 'AgendaPage',
        params: { agendumIdOrDay: day },
        query: { track: this.$route.query.track },
      })
    }
  },
  methods: {
    agendumPropsMapper(agendum) {
      return agendum
    },
    formatDate(date) {
      return date.toLocaleDateString('en-US', {
        timeZone: 'Asia/Taipei',
        month: 'short',
        day: 'numeric',
      })
    },
    syncActiveDateToParam() {
      const agendumIdOrDay = this.activeDate.replace(' ', '_')

      router.push({
        ...this.$route,
        params: { agendumIdOrDay },
      })
    },
    getDayByTrackId(trackId) {
      let agendum = find(POPULATED_SCHEDULE, agenda => {
        return get(agenda, 'TRACK[0]') === trackId
      })
      let date = get(agendum, 'START')
      if (date) {
        return this.formatDate(new Date(date)).replace(' ', '_')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
section#agenda {
  #parallel-agenda-wrapper {
    overflow-x: scroll;
    #parallel-agenda {
      min-width: 700px;
    }
  }
}

section#maps {
  .map {
    max-width: $global-width;
  }
}
</style>
