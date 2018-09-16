<template>
  <transition name="fade">
    <div v-if="open" class="agendum-dialog">
      <div class="dialog-wrapper" @click.stop="$emit('close')">
        <section class="dialog" @click.stop="noop">
          <header class="header">
            <div>
              <h1 @click="copyCurrentURL">
                #{{ agendum.ID }}
                <TW>{{ agendum.TITLE || agendum.TITLE_EN }}</TW>
                <EN>{{ agendum.TITLE_EN || agendum.TITLE }}</EN>
              </h1>
              <a v-if="agendum.SLIDE" :href="agendum.SLIDE" class="slide-link" target="_blank">
                <img src="@/assets/AgendaPage/slide.png" title="Open slide in new tab" alt="Slide icon">
              </a>
            </div>
            <button
              class="close-icon"
              aria-label="Close Dialog"
              @click="$emit('close')"
            >&times;</button>
          </header>
          <div class="details">
            <p>
              <b class="venue">{{ agendum.VENUE }}</b>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span class="time">{{ formatTime(agendum.START) }} - {{ formatTime(agendum.END) }}</span>
            </p>
            <span
              v-for="(speaker, index) in speakers"
              :key="`speaker-info-row:${index}`"
              class="speaker-info-row grid-x flex-container flex-dir-column medium-flex-dir-row"
            >
              <div>
                <SpeakerAvatar :speaker="speaker" class="speaker-avatar" />
              </div>
              <div>
                <div class="speaker-title">
                  <div class="v-align-child-middle">
                    <b>
                      <TW>{{ speaker.NAME || speaker.NAME_EN }}</TW>
                      <EN>{{ speaker.NAME_EN || speaker.NAME }}</EN>
                    </b>
                    <span
                      v-for="code in speaker.COUNTRY_CODE"
                      v-if="code !== 'tw'"
                      :key="`${speaker.NAME}:${code}`"
                      :class="`flag flag-${code}`"
                    />
                  </div>
                  <small>
                    <TW>{{ speaker.TITLE1 || speaker.TITLE1_EN }}</TW>
                    <EN>{{ speaker.TITLE1_EN || speaker.TITLE1 }}</EN>
                    <span v-if="speaker.TITLE2 || speaker.TITLE2_EN" class="speaker-title">
                      <TW>{{ speaker.TITLE2 || speaker.TITLE2_EN }}</TW>
                      <EN>{{ speaker.TITLE2_EN || speaker.TITLE2 }}</EN>
                    </span>
                  </small>
                </div>
                <p>
                  <TW class="biography align-self-top">{{ speaker.BIO || speaker.BIO_EN }}</TW>
                  <EN class="biography align-self-top">{{ speaker.BIO_EN || speaker.BIO }}</EN>
                </p>
              </div>
            </span>
            <h2><b>Abstract</b></h2>
            <p>
              <TW>{{ agendum.ABSTRACT || agendum.ABSTRACT_EN }}</TW>
              <EN>{{ agendum.ABSTRACT_EN || agendum.ABSTRACT }}</EN>
            </p>
          </div>
        </section>
      </div>
      <div class="modal" @click="$emit('close')" />
    </div>
  </transition>
</template>

<script>
import '@/assets/flag-sprites.com/flags.min.css' // Country flag source: https://www.flag-sprites.com/
import noop from 'lodash/noop'
import SpeakerAvatar from '@/views/SpeakerAvatar'

export default {
  name: 'AgendumDialog',
  components: { SpeakerAvatar },
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
    formatTime: timeString =>
      new Date(timeString).toLocaleTimeString('zh-TW', {
        timeZone: 'Asia/Taipei',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      }),
    copyCurrentURL() {},
    noop,
  },
}
</script>

<style lang="scss" scoped>
.title-font {
  font-size: 24px;
  letter-spacing: 1.6px;
}

.dialog-wrapper {
  z-index: $agendum-dialog-z-index;
  position: fixed;
  top: 0;
  margin: auto;
  height: 100%;
  width: 100%;
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
      h1 {
        font-size: 18px;
        margin: 0;
        cursor: pointer;
        display: inline;
      }
      .slide-link {
        margin-left: 0.9rem;
        cursor: pointer;
      }
      .close-icon {
        cursor: pointer;
        color: $primary-color;
        font-size: 24px;
      }
    }
    .details {
      padding: 15px;
      .venue {
        @extend .title-font;
        color: $primary-color;
        font-weight: bold;
      }
      .time {
        @extend .title-font;
      }
      .speaker-info-row {
        flex-wrap: nowrap;
        margin-bottom: 30px;
        &:last-of-type {
          margin-bottom: 45px;
        }
        .speaker-avatar {
          margin-right: 35px;
          margin-bottom: 30px;
        }
        .speaker-title {
          color: $secondary-color;
          font-size: 20px;
          letter-spacing: 2.25px;
          margin-bottom: 18px;
        }
      }
      h2 {
        @extend .title-font;
        color: $primary-color;
        font-weight: bold;
      }
    }
    @include breakpoint(medium) {
      margin: 6rem auto;
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

// Transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
