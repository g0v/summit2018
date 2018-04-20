// RESPONSIVE VERTICAL TIMELINE by Rafi Benkual
// https://foundation.zurb.com/building-blocks/blocks/responsive-timeline.html

<template lang="pug">
.timeline
  .timeline-item(v-for="(item, key) in items")
    .timeline-icon.flex-container.align-center.align-middle
      FaIcon(:name="item['fa-icon']", scale="1.6")
    .timeline-content(:class="(key%2===1) && 'right'")
      .timeline-content-date
        TW {{ item.time.tw || item.time }}
        EN {{ item.time.en || item.time }}
      p
        div
          TW {{ item.description.tw || item.description }}&nbsp;
          EN {{ item.description.en || item.description }}&nbsp;
        a(v-if="item.href" :href="item.href" target="_blank")
          span Link
          FaIcon(name="external-link")

</template>

<script>
import every from 'lodash/every'
import has from 'lodash/has'

export default {
  name: 'TheTimeline',
  props: {
    items: {
      type: Array,
      default: () => [],
      validator: items =>
        every(
          items,
          item =>
            has(item, 'fa-icon') &&
            has(item, 'time') &&
            has(item, 'description')
        ),
    },
  },
}
</script>

<style lang="scss" scoped>
$timeline-color: $white;
$timeline-transition: all 0.25s ease-in;
$timeline-item-card-bg: $card-background; // $white;
$timeline-item-font-color: $black; // $white;
$timeline-item-card: false;
$timeline-item-card-radius: $global-radius;

%clearfix {
  &::after,
  &::before {
    clear: both;
    content: '';
    display: block;
    width: 100%;
  }
}

// Timeline
.timeline {
  margin: 30px auto;
  padding: 0 10px;
  position: relative;
  transition: $timeline-transition;
  width: 100%;

  &::before {
    background: $timeline-color;
    content: '';
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    width: 3px;
  }

  &::after {
    clear: both;
    content: '';
    display: table;
    width: 100%;
  }

  .timeline-item {
    margin-bottom: 20px;
    position: relative;
    @extend %clearfix;

    .timeline-icon {
      background: $timeline-color;
      border-radius: 50%;
      height: 50px;
      left: 50%;
      margin-left: -23px;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 50px;

      // img,
      // svg {
      //   left: 14px;
      //   position: relative;
      //   top: 11px;
      // }

      // svg {
      //   top: 14px;
      // }
    }

    .timeline-content {
      padding: 20px;
      text-align: right;
      transition: $timeline-transition;
      width: 45%;

      @if $timeline-item-card == true {
        background: $timeline-item-card-bg;
        border-radius: $timeline-item-card-radius;

        p {
          color: $black;
        }
      } @else {
        background: transparent;

        p {
          color: $timeline-item-font-color;
        }
      }

      p {
        font-size: 16px;
        line-height: 1.4;
        margin-bottom: 0;
      }

      .timeline-content-date {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 0;
      }

      .timeline-content-month {
        font-size: rem-calc(14);
        text-transform: uppercase;
        font-weight: 400;
      }

      &.right {
        float: right;
        text-align: left;
      }
    }
  }
}

@include breakpoint(small only) {
  .timeline {
    margin: 30px;
    padding: 0;
    width: 90%;

    &::before {
      left: 0;
    }

    .timeline-item {
      .timeline-content {
        float: right;
        text-align: left;
        width: 90%;

        &::before,
        &.right::before {
          border-left: 0;
          border-right: 7px solid $timeline-color;
          left: 10%;
          margin-left: -6px;
        }
      }

      .timeline-icon {
        left: 0;
      }
    }
  }
}
</style>
