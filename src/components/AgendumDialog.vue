<template>
  <transition name="fade">
    <div v-if="open" class="agendum-dialog">
      <div class="dialog-wrapper">
        <section class="dialog">
          <header class="header">
            <h1 @click="copyCurrentURL">
              #
              <TW>{{ agendum.TITLE || agendum.TITLE_EN }}</TW>
              <EN>{{ agendum.TITLE_EN || agendum.TITLE }}</EN>
            </h1>
            <button
              class="close-icon"
              aria-label="Close Dialog"
              @click="$emit('close')"
            >&times;</button>
          </header>
          <div class="details">
            <p>
              <b class="venue">{{ agendum.VENUE }}</b>
              <span class="time">{{ formatTime(agendum.START) }} - {{ formatTime(agendum.END) }}</span>
            </p>
            <span
              v-for="(speaker, index) in speakers"
              :key="`speaker-info-row:${index}`"
              class="speaker-info-row grid-x align-justify"
            >
              <div>
                <div class="grid-y align-spaced align-top">
                  <span>
                    <TW>{{ speaker.NAME || speaker.NAME_EN }}</TW>
                    <EN>{{ speaker.NAME_EN || speaker.NAME }}</EN>
                  </span>
                  <small class="speaker-title">
                    <TW>{{ speaker.TITLE1 || speaker.TITLE1_EN }}</TW>
                    <EN>{{ speaker.TITLE1_EN || speaker.TITLE1 }}</EN>
                  </small>
                  <small v-if="speaker.TITLE2 || speaker.TITLE2_EN" class="speaker-title">
                    <TW>{{ speaker.TITLE2 || speaker.TITLE2_EN }}</TW>
                    <EN>{{ speaker.TITLE2_EN || speaker.TITLE2 }}</EN>
                  </small>
                  <TW class="biography align-self-top">{{ speaker.BIO || speaker.BIO_EN }}</TW>
                  <EN class="biography align-self-top">{{ speaker.BIO_EN || speaker.BIO }}</EN>
                </div>
              </div>
              <SpeakerAvatar :speaker="speaker" />
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
  },
}
</script>

<style lang="scss" scoped>
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
      .speaker-info-row {
        flex-wrap: nowrap;
        margin-bottom: 25px;
        &:last-of-type {
          margin-bottom: 65px;
        }
        .time,
        .speaker-title {
          color: $secondary-color;
          margin-bottom: 0.5rem;
        }
      }
      h2 {
        font-size: 18px;
        color: $primary-color;
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
