<template>
  <div class="sponsor-section">
    <div class="grid-container">
      <h1><TW>合作夥伴</TW><EN>Partners</EN></h1>
      <section class="grid-x grid-padding-x align-center">
        <div
          v-for="sponsor in sponsors"
          :class="'cell ' + getClassName(sponsor)"
          :key="sponsor.id"
        >
          <div
            :style="{backgroundImage: `url(${sponsor.LOGO})`}"
            class="card"
            @click="selected = (selected === sponsor.id ? null : sponsor.id)"
          >
            <!-- Hover 時的遮罩 -->
            <div class="overlay">
              <div class="content">

                <!-- 贊助商名稱 -->
                <h5 class="name">
                  <EN >{{ sponsor['NAME'] }}</EN>
                  <TW>{{ sponsor['NAME-CH'] }}</TW>
                  <a v-if="sponsor.URL" :href="sponsor.URL" class="link" target="_blank">
                    <FaIcon name="external-link"/>
                  </a>
                </h5>

                <!-- 介紹文字 -->
                <p class="bio">
                  <EN>{{ sponsor['BIO'] }}</EN>
                  <TW>{{ sponsor['BIO-CH'] }}</TW>
                </p>

                <!-- 展開符號 -->
                <span class="blur-footer">
                  <FaIcon name="caret-down"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { SPONSORS } from '@/../static/airtable_data'
import shuffle from 'lodash/shuffle'
import get from 'lodash/get'

/** 設定贊助商大於一定數量，則打亂顯示順序，單純以卡片大小分別 */
const SHUFFEL_THRESHOLE = null // 5

export default {
  name: 'SponsorSection',
  data() {
    return {
      /** 當下選取的贊助商 id */
      selected: null,
    }
  },
  computed: {
    /**
     * 來自 Airtable 的贊助商資料
     */
    sponsors() {
      const sponsors = SPONSORS.filter(record => record.SHOW === true).map(
        record => ({
          ...record,
          LOGO: get(record, 'CROPPED_LOGO[0].thumbnails.large.url'),
          id: record.id,
        })
      )

      if (SHUFFEL_THRESHOLE && sponsors.length >= SHUFFEL_THRESHOLE) {
        return shuffle(sponsors)
      }
      return sponsors
    },
  },
  methods: {
    /**
     * 不同等級贊助商有不同卡片大小
     */
    getClassName(sponsor) {
      if (sponsor.id === this.selected) {
        return 'selected small-12 medium-9 large-5'
      }
      switch (sponsor.CLASS) {
        case 'COHOST':
        case 'EVANGELIST':
        case 'PROGRAM_PARTNER':
          return 'class-a small-6 medium-5 large-4'
        case 'ACTIVIST':
          return 'class-b small-5 medium-4 large-3'
        case 'CIVICIST':
          return 'class-c small-4 medium-3 large-2'
        case 'SUPPORTER':
        case 'IN_KIND':
        case 'MEDIA_PARTNER':
        case 'PROMOTING_PARTNER':
          return 'class-d small-4 medium-3 large-2'
        default:
          // Hide for unknow sponsor class
          return 'hide'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.sponsor-section {
  background-color: $dark-gray;

  ._hide {
    opacity: 0;
    transition: opacity 0.3s ease-in 0.1s;
  }

  ._show {
    opacity: unset;
    background: rgba(255, 255, 255, 0.9);
  }

  .cell {
    transition: width 0.4s ease-in-out; // TODO: use <transition-group> to tween neighboor cells
    .card {
      height: 7rem;
    }
    &.selected {
      .card {
        height: auto;
        .overlay {
          .content {
            @extend ._show;
          }
        }
      }
      .blur-footer {
        display: none;
      }
    }
  }

  .card {
    background: white;
    border-radius: 3px;
    position: relative;

    // Logo 置中
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    // Hover 時的內容
    .overlay {
      cursor: pointer;
      .content {
        padding: 0.5rem;
        @extend ._hide;
        &:hover {
          @extend ._show;
        }
      }
    }
  }

  // Caret Down
  .blur-footer {
    background: linear-gradient(transparent, rgba(255, 255, 255, 0.712), white);
    height: 2.5rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    .fa-icon {
      position: absolute;
      bottom: 2px;
    }
  }

  // 不同等級的大小分別
  .class-a .card {
    height: 8rem;
  }
  .class-b .card {
    height: 7rem;
  }
  .class-c .card {
    height: 6rem;
  }
  .class-d .card {
    height: 5rem;
  }
}
</style>
