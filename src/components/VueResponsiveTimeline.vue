<template>
  <div
    :style="cssVariablesPatched"
    class="vue-responsive-timeline"
  >
    <ul
      :style="{
        display: 'grid',
        gridTemplateAreas: isSmallScreen ? gridTemplateAreasVertical : gridTemplateAreasHorizontal,
        gridTemplateRows: isSmallScreen ? `repeat(${items.length}, 150px)` : '30px 30px 120px 120px',
        gridTemplateColumns: isSmallScreen ? '30px 30px auto' : `repeat(${items.length}, 1fr)`,
      }"
    >
      <template v-for="(item, index) in sortedItems">
        <li
          :key="`${item.title} ${item.subtitle}`"
          :style="{
            gridArea: `evt${index}`,
            position: 'relative',
            padding: 0
          }"
        >
          <span class="event-wrapper">
            <!-- Event Title -->
            <p :style="titleStyles" class="title">{{ item.title }}</p>
            <!-- Event Subtitle -->
            <p :style="subtitleStyles" class="subtitle">{{ item.subtitle }}</p>
          </span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { getObjectsValidator } from '@/utils/validators'
import sortBy from 'lodash/sortBy'
import repeat from 'lodash/repeat'
import times from 'lodash/times'
import every from 'lodash/every'
import includes from 'lodash/includes'

export const CSS_VARIABLES = [
  '--theme-color',
  '--theme-color-lighter',
  '--timeline-thickness',
  '--bullet-color',
  '--bullet-line-thickness',
  '--bullet-line-color',
  '--bullet-radius',
  '--bullet-border-radius',
]

export default {
  name: 'VueResponsiveTimeline',
  props: {
    /** Array of objects with shape { title: String, subtitle: String, date: Date, } */
    items: {
      type: Array,
      required: true,
      validator: getObjectsValidator({
        title: String,
        subtitle: String,
        date: Date,
      }),
    },
    /** Timeline will be vertical BELOW this breakpoint, default to be 640px */
    breakpoint: {
      type: Number,
      default: 640,
    },
    /**  */
    nowText: {
      type: String,
      default: 'NOW',
    },
    /** */
    showNow: {
      type: Boolean,
      default: true,
    },
    /** css variables, list of available keys can be name imported CSS_VARIABLES */
    cssVariables: {
      type: Object,
      default: () => ({}),
      validator(value) {
        if (every(Object.keys(value), key => includes(CSS_VARIABLES, key))) {
          return true
        } else {
          console.error(
            `prop 'cssValidator' should only contains allowed keys: ${CSS_VARIABLES}`
          )
          return false
        }
      },
    },
    /** styles for ur>li>span>.title */
    titleStyles: {
      type: Object,
      default: () => ({
        fontSize: '22px',
        color: 'black',
      }),
    },
    /** styles for ur>li>span>.subtitle */
    subtitleStyles: {
      type: Object,
      default: () => ({
        fontSize: '18px',
        color: '#767676',
        marginBottom: '0',
        fontWeight: 'lighter',
      }),
    },
  },
  data() {
    return {
      isSmallScreen: true,
    }
  },
  computed: {
    sortedItems() {
      return sortBy(this.items, ['date'])
    },
    count() {
      return this.items.length
    },
    gridTemplateAreasHorizontal() {
      const top = String(repeat('. ', this.count))
      const timeline = String(repeat('timeln ', this.count))
      const row1 = times(this.count, i => `evt${i}`).join(' ')
      const row2 = times(this.count, i => (i % 2 ? `evt${i}` : '.')).join(' ')

      return `"${top}" "${timeline}" "${row1}" "${row2}"`
    },
    gridTemplateAreasVertical() {
      return times(this.count, i => `". timeln evt${i}"`).join(' ')
    },
    cssVariablesPatched() {
      const timelineThickness =
        this.cssVariables['--timeline-thickness'] || '3px'
      const timelineColor = this.cssVariables['--theme-color'] || '#e55760'
      const timeline = `${timelineThickness} solid ${timelineColor}`
      const bulletLineThickness =
        this.cssVariables['--bullet-line-thickness'] || '2px'
      const bulletLineColor =
        this.cssVariables['--bullet-line-color'] || '#ececec'
      const bulletLine = `${bulletLineThickness} solid ${bulletLineColor}`

      const patch = this.isSmallScreen
        ? {
            '--li-border-top': bulletLine,
            '--li-border-left': timeline,
            '--li-last-child-border-width': `${timelineThickness} 0`,
            '--event-wrapper-top-odd': '0px',
            '--event-wrapper-top-even': '0px',
            '--event-wrapper-left': '2rem',
          }
        : {
            '--li-border-top': timeline,
            '--li-border-left': bulletLine,
            '--li-last-child-border-width': `0 ${timelineThickness}`,
            '--event-wrapper-top-odd': '3.5rem',
            '--event-wrapper-top-even': '10rem',
            '--event-wrapper-left': '7px',
          }

      return Object.assign(patch, this.cssVariables)
    },
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  destroied() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.isSmallScreen = window.innerWidth < this.breakpoint
    },
  },
}
</script>

<style lang="scss">
.vue-responsive-timeline {
  font-family: Helvetica;
  box-sizing: border-box;
  ul {
    list-style-type: none;
    padding-left: var(--bullet-radius, 30px);
    li {
      // Timeline & Bullet line
      border-left: var(--li-border-left);
      border-top: var(--li-border-top);
      &:last-child {
        border-width: var(--li-last-child-border-width);
      }

      // Bullet point
      &::before {
        content: '';
        border: var(--bullet-border-radius, 3px) solid
          var(--theme-color, #e55760);
        background-color: var(--bullet-color, white);
        border-radius: var(--bullet-radius, 30px);
        display: inline-block;
        height: var(--bullet-radius, 30px);
        width: var(--bullet-radius, 30px);
        position: relative;
        left: calc(
          -1 * (var(--bullet-radius, 30px) / 2 +
                var(--bullet-border-radius, 3px))
        );
        top: calc(
          -1 * (var(--bullet-radius, 30px) / 2 +
                var(--bullet-border-radius, 3px))
        );
      }

      // Wrapper of title and subtitle
      span.event-wrapper {
        position: absolute;
        left: var(--event-wrapper-left, 1rem);
      }
      &:nth-child(odd) {
        span.event-wrapper {
          top: var(--event-wrapper-top-odd);
        }
      }
      &:nth-child(even) {
        span.event-wrapper {
          top: var(--event-wrapper-top-even);
        }
      }
    }
  }
}
</style>
