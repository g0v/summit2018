<template>
  <div class="ParallelAgenda">
    <table>
      <colgroup>
        <col style="width: 2.7rem">
        <col v-for="(_, index) in threads" :key="index">
      </colgroup>
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
        <tr v-for="(time, index) in timeLabels" :key="`time:day${index+1}:${formatTime(time)}`">
          <!-- Time -->
          <td class="time-label-cell">
            <span class="time-label">{{ formatTime(time) }}</span>
          </td>

          <!-- Common thread cell -->
          <template v-if="getAgendum(time, commonThread)">
            <td
              :colspan="threads.length"
              class="agendum-cell"
            >
              <!-- TODO: User Scoped Slot instead.
                         (https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) -->
              <component
                :is="agendumComponent"
                :agendum="getAgendum(time, commonThread)"
              />
            </td>
          </template>

          <!-- Agendum cell -->
          <template v-else>
            <template v-for="thread in threads">
              <!-- Render agendum cell for this time/thread slot ... -->
              <template v-if="getRowSpan(time, thread) > 0">
                <td
                  :rowspan="getRowSpan(time, thread)"
                  :headers="thread"
                  :key="`agendum:${time}:${thread}`"
                  class="agendum-cell"
                >
                  <component
                    :is="agendumComponent"
                    :agendum="getAgendum(time, thread)"
                  />
                </td>
              </template>
              <!-- ... Or render a placeholder, if the time/venue slot is idle -->
              <template v-else>
                <template v-if="isIdle(time, thread)">
                  <td :key="`agendum:${time}:${thread}:placeholder`" />
                </template>
              </template>
            </template>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import get from 'lodash/get'
import every from 'lodash/every'
import keyBy from 'lodash/keyBy'
import isDate from 'lodash/isDate'
import sortBy from 'lodash/sortBy'
import assign from 'lodash/assign'
import groupBy from 'lodash/groupBy'
import isString from 'lodash/isString'
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
      const getTime = date => date.getTime()
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
    /** Determine if a given time/thread slot is idle (no agendum) */
    isIdle(timeToCheck, thread) {
      let earlierEvent = null // the agendum right before the time/thread slot
      let timeLabelIndex = null // the index in `timeLabels` of the given time/thread slot
      for (let i = this.timeLabels.length - 1; i > 0; i--) {
        const timeLabel = this.timeLabels[i]
        if (timeToCheck.getTime() === timeLabel.getTime()) {
          timeLabelIndex = i
        }
        if (timeLabelIndex) {
          earlierEvent = this.getAgendum(timeLabel, thread)
          if (earlierEvent) {
            const rowspan = this.getRowSpan(timeLabel, thread)
            // if the space taken by earlier event is equal or bigger then the index, it's overlappying
            const isNotOverlaypping = timeLabelIndex > i + rowspan - 1
            return isNotOverlaypping
          }
        }
      }

      return true
    },
    /** Format ISO 8601 Data object to `hh:mm` */
    formatTime(date) {
      return date.toLocaleTimeString('zh-TW', {
        hour12: false,
        timeZone: 'Asia/Taipei',
        hour: '2-digit',
        minute: '2-digit',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
table {
  table-layout: fixed;
}

td,
th {
  color: #3c3e3d;
  text-align: center;

  // TODO: Avoid using $body-background, achieve full height <agendum-component/> then use padding instead
  outline: 3px solid $body-background;
  padding: 0px;
}

.time-label-cell {
  vertical-align: top;
  white-space: nowrap;
  .time-label {
    position: relative;
    top: -0.75rem;
    left: -10px;
    // TODO: Remove after responsive layout is implemented
    @include breakpoint(small only) {
      left: 0;
    }
  }
}

// Visually center the table by padding the space taken by time-label-cell for large screen
@media only screen and (min-width: 1024px) {
  .ParallelAgenda {
    padding-right: 2.7rem;
  }
}

td.agendum-cell {
  position: relative;
  // FIX: Make child's height fill <td> to avoid $dark-gray and hard-coded padding-top here
  // See https://stackoverflow.com/questions/3215553/make-a-div-fill-an-entire-table-cell/14163076
  padding-top: 18px;
  background-color: $dark-gray;
}
</style>
