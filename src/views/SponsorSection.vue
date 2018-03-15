<template>
  <section class="sponsor-section grid-x grid-padding-x">
    <div
      v-for="sponsor in sponsors"
      :class="'cell ' + getClassName(sponsor)"
      :key="sponsor.id"
    >
      <div
        class="card" @click="selected = (selected === sponsor.id ? null : sponsor.id)"
        :style="{backgroundImage: `url(${sponsor.LOGO})`}"
      >
        <!-- Hover 時的遮罩 -->
        <div class="overlay">
          <div class="content">

            <!-- 贊助商名稱 -->
            <h5 class="name">
              <EN >{{ sponsor['NAME'] }}</EN>
              <TW>{{ sponsor['NAME-CH'] }}</TW>
              <a class="link" v-if="sponsor.URL" :href="sponsor.URL" target="_blank">
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
</template>

<script>
import SponsorData from '../../static/airtable_data/SPONSORS.json'
import shuffle from 'lodash/shuffle'
import sortBy from 'lodash/sortBy'

/** 設定贊助商大於一定數量，則打亂顯示順序，單純以卡片大小分別 */
const SHUFFEL_THRESHOLE = null // 5

export default {
  name: 'sponsor-section',
  data () {
    return {
      /** 當下選取的贊助商 id */
      selected: null
    }
  },
  computed: {
    /**
     * 來自 Airtable 的贊助商資料
     */
    sponsors () {
      const sponsors = SponsorData.records
        .filter(record => record.fields.SHOW === true)
        .map(record => ({
          ...record.fields,
          LOGO: record.fields.CROPPED_LOGO[0].thumbnails.large.url,
          id: record.id
        }))

      if (SHUFFEL_THRESHOLE && sponsors.length >= SHUFFEL_THRESHOLE) {
        return shuffle(sponsors)
      }
      return sortBy(sponsors, 'CLASS')
    }
  },
  methods: {
    /**
     * 不同等級贊助商有不同卡片大小
     */
    getClassName (sponsor) {
      if (sponsor.id === this.selected) {
        return 'selected small-12 medium-9 large-5'
      }
      switch (sponsor.CLASS) {
        case 'A': return 'class-a small-6 medium-5 large-4'
        case 'B': return 'class-b small-5 medium-4 large-3'
        case 'C': return 'class-c small-4 medium-3 large-2'
        case 'D': return 'class-d small-4 medium-3 large-2'
        default:
          console.log('Sponsor instance has invalid value "CLASS": ', sponsor)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sponsor-section {
  ._hide {
    opacity: 0;
    transition: opacity .3s ease-in .1s;
  }

  ._show {
    opacity: unset;
    background: rgba(255, 255, 255, 0.8);
  }

  .cell {
    transition: width .4s ease-in-out; // TODO: use <transition-group> to tween neighboor cells
    .card { height: 7rem; }
    &.selected {
      .card {
        height: auto;
        .overlay { .content { @extend ._show }};
      }
      .blur-footer { display: none; }
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
        padding: .5rem;
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

  // 不同等級的顏色分別
  .class-a .card {
    height: 8rem;
    border-top: 5px solid $classA;
  }
  .class-b .card {
    height: 7rem;
    border-top: 4px solid $classB;
  }
  .class-c .card {
    height: 6rem;
    border-top: 3px solid $classC;
  }
  .class-d .card {
    height: 5rem;
    border-top: 3px solid $classD;
  }
}


</style>
