<template lang="pug">
  div#nav-bar: .top-bar(:class="{shrink: scrollY > 50}")
    //- TODO: add for later version
    //- .top-bar-left.show-for-large
    .top-bar-left
      ul.menu.hide-for-small-only
        li: router-link(to="/").brand-logo.menu-text
          span.flex-container.align-middle.shahow
            img.brand-icon(src="@/assets/svg/g0v.svg")
            TW.brand-title 2018 零時政府高峰會
            EN.brand-title summit 2018
    .top-bar-right
      ul.menu
        li
          UnderlineLink(to="/speakers")
            TW 講者
            EN Speakers
        li
          UnderlineLink(to="/agenda").disabled
            TW 議程
            EN Agenda
        //- li
        //-   UnderlineLink(to="/cfp")
        //-     TW 講者徵求
        //-     EN Call for Paper
        li
          UnderlineLink(to="/sponsors")
            TW 合作夥伴
            EN Partners
        li
          UnderlineLink(to="/transport")
            TW 交通
            EN Transport
        li
          //- TODO: Embed streamming in page /live
          //- UnderlineLink(to="/live")
          UnderlineLink(href="https://www.youtube.com/user/g0vTW")
            TW 直撥
            EN Live
        li
          //- TODO: Embed content in site
          UnderlineLink(href="https://www.juicer.io/g0vsummit")
            TW 社群動態
            EN Feed
        li
          UnderlineLink(to="/staff")
            TW 工作人員
            EN Staff
        //- li
        //-   UnderlineLink(to="/wiki")
        //-     TW 大會共筆
        //-     EN Wiki
        li
          a(href="https://g0v-summit2018.kktix.cc/events/conf", target="_blank")
            TW 立即購票
            EN Registration
        li
          a(@click="toggleLangUpdateQuery")
            b(v-if="lang === 'TW'") English
            b(v-else) 華語
        //- li
        //-   input(type="search", placeholder="Search")
        //- li
        //-   button(type="button").button Search
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import get from 'lodash/get'
import router from '@/router'

export default {
  name: 'NavBar',
  data() {
    return {
      shrink: false,
    }
  },
  computed: mapState(['lang', 'scrollY']),
  created() {
    if (get(this.$route, 'query.lang') === 'EN' && this.lang !== 'EN') {
      this.toggleLang()
    }
  },
  methods: {
    ...mapMutations(['toggleLang']),
    /**
     * Toggle site language and add ?lang=XX to url
     */
    toggleLangUpdateQuery() {
      this.toggleLang()
      if (get(this.$route, 'query.lang') !== this.lang) {
        router.push({
          ...this.$route,
          query: {
            ...this.$route.query,
            lang: this.lang,
          },
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#nav-bar {
  margin-bottom: 98px;
}

.top-bar {
  opacity: 0.95;
  position: fixed;
  z-index: $nav-bar-z-index;
  top: 0px;
  width: 100%;

  // TODO: remove for later version
  .top-bar-right,
  .top-bar-left {
    // Override default stacking for small screen
    flex-basis: unset;
  }

  // shrink/expand effect
  transition-property: padding;
  transition-duration: 0.2s;
  &.shrink {
    padding: 0px;
    border-bottom: 1px solid $dark-gray;
  }

  @include breakpoint(small only) {
    padding: 0px;
    .menu > li > a {
      padding-right: 10px;
      padding-left: 10px;
    }
  }

  .brand-logo {
    color: inherit;
    .brand-icon {
      height: 60px;
    }
    .brand-title {
      color: $primary-color;
      font-size: 24px;
    }
    font {
      @include vertical-center;
    }
  }
}
</style>
