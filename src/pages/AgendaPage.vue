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
        :threads="['R0', 'R1', 'R2', 'R3']"
        :common-thread="'ALL'"
        agenda-key-of-thread="VENUE"
        agenda-key-of-start-time="START"
        agenda-key-of-end-time="END"
      />

      <AgendumDialog
        :open="!!dialogAgendum"
        :agendum="dialogAgendum"
        @close="closeDialog"
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
import router from '@/router'
import CapsuleRadioButton from '@/components/CapsuleRadioButton'
import ParallelAgenda from '@/components/ParallelAgenda'
import AgendumCell from '@/components/AgendumCell'
import AgendumDialog from '@/components/AgendumDialog'
import { formatDate } from '@/utils'
import get from 'lodash/get'
import find from 'lodash/find'
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import groupBy from 'lodash/groupBy'
import { POPULATED_SCHEDULE } from '@/../static/airtable_data/index'

export default {
  name: 'AgendaPage',
  components: {
    CapsuleRadioButton,
    ParallelAgenda,
    AgendumCell,
    AgendumDialog,
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

    return {
      schedule,
      dates,
      activeDate: dates[0],
      AgendumCell,
      dialogAgendum: find(POPULATED_SCHEDULE, [
        'id',
        this.$route.params.agendumId,
      ]),
    }
  },
  watch: {
    $route(to, from) {
      const { agendumId } = to.params
      this.dialogAgendum = agendumId
        ? find(POPULATED_SCHEDULE, ['id', agendumId])
        : null
    },
  },
  methods: {
    agendumPropsMapper(agendum) {
      return agendum
    },
    closeDialog() {
      router.push({ name: 'AgendaPage' })
    },
    formatDate,
    get,
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
    max-width: $global-width;
  }
}
</style>
