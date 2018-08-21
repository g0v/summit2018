<template>
  <div v-if="open" class="agendum-dialog">
    <div class="dialog-wrapper">
      <section class="dialog">
        <header class="header">
          <h5>
            <TW>{{ agendum.TITLE }}</TW>
            <EN>{{ agendum.TITLE_EN || agendum.TITLE }}</EN>
          </h5>
          <button
            class="close-icon"
            aria-label="Close Dialog"
            @click="$emit('close')"
          >&times;</button>
        </header>
        <div class="details">
          <!-- TODO -->
          <!-- <div
            v-for="(speaker, index) in speakers"
            :key="`agendum-info-row:${index}`"
            class="agendum-info-row grid-x align-justify"
          >
            <div class="grid-y align-justify">
              <big v-if="index === 0">
                <b class="venue">{{ agendum.VENUE }}</b>
                <span class="time">{{ formatTime(agendum.START) }} - {{ formatTime(agendum.END) }}</span>
              </big>
              <span>
                <TW>{{ speaker.NAME }}</TW>
                <EN>{{ speaker.NAME_EN || speaker.NAME }}</EN>
              </span>
              <span v-if="speaker.TITLE1" class="speaker-title">
                <TW>{{ speaker.TITLE1 }}</TW>
                <EN>{{ speaker.TITLE1_EN || speaker.TITLE1 }}</EN>
              </span>
              <span v-if="speaker.TITLE2" class="speaker-title">
                <TW>{{ speaker.TITLE2 }}</TW>
                <EN>{{ speaker.TITLE2_EN || speaker.TITLE2 }}</EN>
              </span>
            </div>
            <img
              v-if="speaker.AVATAR"
              :src="speaker.AVATAR[0].url"
              :alt="speaker.NAME_EN || speaker.NAME"
            >
          </div> -->
          <p>
            <TW>{{ agendum.SUMMARY }}</TW>
            <EN>{{ agendum.SUMMARY_EN || agendum.SUMMARY }}</EN>
          </p>
        </div>
      </section>
    </div>
    <div class="modal" @click="$emit('close')" />
  </div>
</template>

<script>
import { formatTime } from '@/utils'

export default {
  name: 'AgendumDialog',
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    agendum: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    speakers() {
      return this.agendum.SPEAKER || {}
    },
  },
  methods: {
    formatTime: timeString => formatTime(new Date(timeString)),
  },
}
</script>

<style lang="scss" scoped>
.dialog-wrapper {
  z-index: $agendum-dialog-z-index;
  position: fixed;
  top: 0;
  margin: auto;
  padding: 1rem;
  height: 100%;
  overflow-y: scroll;
  .dialog {
    background: white;
    border: 3px solid $primary-color;
    border-radius: 5px;
    .header {
      color: $primary-color;
      border-bottom: 3px solid $primary-color;
      display: flex;
      justify-content: space-between;
      align-items: middle;
      padding: 25px;
      h5 {
        margin: 0;
      }
      .close-icon {
        color: $primary-color;
        font-size: 24px;
      }
    }
    .details {
      padding: 15px;
      .venue {
        color: $primary-color;
      }
      .time,
      .speaker-title {
        color: $secondary-color;
      }
    }
    @include breakpoint(medium) {
      margin: 6rem 0;
      .details {
        padding: 60px 80px;
      }
    }
  }
}

.modal {
  z-index: $agendum-modal-z-index;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
