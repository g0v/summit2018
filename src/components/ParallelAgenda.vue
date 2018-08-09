<template>
  <div class="ParallelAgenda">
    <table>
      <!-- Header -->
      <thead>
        <tr>
          <th/>
          <th
            v-for="thread in threads"
            :id="thread"
            :key="`th:${thread}`"
          >
            {{ thread }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in timeLabels" :key="`time:${formatTime(time)}`">
          <!-- Time -->
          <td class="time-label-cell">
            <span class="time-label">{{ formatTime(time) }}</span>
          </td>

          <!-- Common thread cell -->
          <td
            v-if="getAgendum(time, commonThread)"
            :colspan="threads.length"
            class="agendum-cell"
          >
            <component
              :is="agendumComponent"
              :agendum="getAgendum(time, commonThread)"
            />
          </td>

          <!-- Agendum cell -->
          <template
            v-for="thread in threads"
          >
            <td
              v-if="getRowSpan(time, thread) > 0"
              :rowspan="getRowSpan(time, thread)"
              :headers="thread"
              :key="`th:${thread}`"
              class="agendum-cell"
            >
              <component
                :is="agendumComponent"
                :agendum="getAgendum(time, thread)"
              />
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import get from 'lodash/get'
// import find from 'lodash/find'
import every from 'lodash/every'
import keyBy from 'lodash/keyBy'
// import clone from 'lodash/clone'
import isDate from 'lodash/isDate'
import sortBy from 'lodash/sortBy'
import assign from 'lodash/assign'
import groupBy from 'lodash/groupBy'
// import reverse from 'lodash/reverse'
import isString from 'lodash/isString'
import padStart from 'lodash/padStart'
import mapValues from 'lodash/mapValues'
import findIndex from 'lodash/findIndex'
import uniqBy from 'lodash/uniqBy'

const isEqualDateWith = time1 => time2 => time1.getTime() === time2.getTime()

export default {
  name: 'ParallelAgenda',
  props: {
    /** Array of agendum object, which should at least contains thread, start infomation */
    agenda: {
      type: Array,
      required: true,
    },
    /** The key of agendum object for thread */
    agendaKeyOfThread: {
      type: String,
      default: () => 'thread',
    },
    /** The key of agendum object for start time of an event */
    agendaKeyOfStartTime: {
      type: String,
      default: () => 'start',
    },
    /** The key of agendum object for end time of an event */
    agendaKeyOfEndTime: {
      type: String,
      default: () => 'end',
    },
    /** The compoennt used to render each table cell */
    agendumComponent: {
      type: [String, Object],
      default() {
        return 'div'
      },
    },
    /** Column names of agenda */
    threads: {
      type: Array,
      required: true,
      validator: threads => every(threads, isString),
    },
    /** The key to represet "all threads" */
    commonThread: {
      type: String,
      default: 'all',
    },
    /** Whether passed agenda is already sorted (by field `start` or this.agendaKeyOfStartTime) */
    isAgendaSorted: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    /**
     * Agendum field `start` (or agendaKeyOfStartTime) casted to Date and used to sorted agenda
     */
    sortedAgenda() {
      const agendaWithDate = this.agenda.map(
        agendum =>
          isDate(agendum[this.agendaKeyOfStartTime])
            ? agendum
            : assign(agendum, {
                [this.agendaKeyOfStartTime]: new Date(
                  agendum[this.agendaKeyOfStartTime]
                ),
                [this.agendaKeyOfEndTime]: new Date(
                  agendum[this.agendaKeyOfEndTime]
                ),
              })
      )
      return this.isAgendaSorted
        ? agendaWithDate
        : sortBy(agendaWithDate, this.agendaKeyOfStartTime)
    },
    /**
     * Time labels besides table
     */
    timeLabels() {
      const startTimes = this.sortedAgenda.map(
        agendum => agendum[this.agendaKeyOfStartTime]
      )
      const endTimes = this.sortedAgenda.map(
        agendum => agendum[this.agendaKeyOfEndTime]
      )
      const getTime = time => time.getTime()
      const times = sortBy(
        uniqBy([...startTimes, ...endTimes], getTime),
        getTime
      )
      return times
    },
    /**
     * Agenda grouped by thread and time, so an agendum can be accessed by agenda[thread][time]
     */
    agendaByThreadByTime() {
      const agendaByThread = groupBy(this.sortedAgenda, this.agendaKeyOfThread)

      const agendaByThreadByTime = mapValues(agendaByThread, threadAgenda =>
        keyBy(threadAgenda, this.agendaKeyOfStartTime)
      )

      return agendaByThreadByTime
    },
    /** Add `rowspan` to agendum accroding to index offset of start and end time */
    agendaWithRowSpan() {
      return mapValues(this.agendaByThreadByTime, threadAgenda => {
        return mapValues(threadAgenda, agendum => {
          const startTimeIndex = findIndex(
            this.timeLabels,
            isEqualDateWith(agendum[this.agendaKeyOfStartTime])
          )

          const endTimeIndex = findIndex(
            this.timeLabels,
            isEqualDateWith(agendum[this.agendaKeyOfEndTime])
          )

          const rowspan = endTimeIndex - startTimeIndex
          return assign(agendum, { rowspan })
        })
      })
    },
  },
  methods: {
    /** Get rowspan of an agendum cell */
    getRowSpan(time, thread) {
      const agendum = get(this.agendaWithRowSpan, `${thread}.${time}`)
      return agendum ? agendum.rowspan : -1
    },
    /** Get agendum object with time & thread */
    getAgendum(time, thread) {
      const agendum = get(this.agendaWithRowSpan, `${thread}.${time}`)
      return agendum
    },
    /** Format Data object to `hh:mm` */
    formatTime(time) {
      const hour = padStart(time.getHours(), 2, '0')
      const minute = padStart(time.getMinutes(), 2, '0')
      return `${hour}:${minute}`
    },
  },
}
</script>

<style lang="scss" scoped>
td,
th {
  color: #3c3e3d;
  text-align: center;

  // TODO: Avoid using $body-background, achieve full height <agendum-component/> then use padding instead
  border: 3px solid $body-background;
  padding: 0px;
}

.time-label-cell {
  vertical-align: top;
  width: 4rem;
  white-space: nowrap;
  .time-label {
    position: relative;
    top: -0.75rem;
    margin: 0 10px;
  }
}

// Visually center the table by padding the space taken by time-label-cell for large screen
@media only screen and (min-width: 1024px) {
  .ParallelAgenda {
    padding-right: 4rem;
  }
}

.agendum-cell {
  // TODO: Dynamically set this by js, so that <agendum-component/> can vertically fill the cell
  // height: ??px;

  // TODO: Remove after above is fixed. This infomation should only be in <AgendumCell>
  background-color: $dark-gray;
  & > * {
    height: 100%;
  }
}
</style>
