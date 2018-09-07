<template lang="pug">
  div#nav-bar: .top-bar(:class="{shrink: scrollY > 50}")
    //- TODO: add for later version
    //- .top-bar-left.show-for-large
    .top-bar-left
      ul.menu
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
            TW 贊助夥伴
            EN Sponsors
        //- li
        //-   UnderlineLink(to="/transport")
        //-     TW 交通
        //-     EN Transport
        //- li
        //-   UnderlineLink(to="/live")
        //-     TW 直撥
        //-     EN Live
        li
          UnderlineLink(to="/staff")
            TW 工作人員
            EN Staff
        //- li
        //-   UnderlineLink(to="/wiki")
        //-     TW 大會共筆
        //-     EN Wiki
        li
          a(@click="toggleLang")
            b(v-if="lang === 'TW'") English
            b(v-else) 華語
        //- li
        //-   input(type="search", placeholder="Search")
        //- li
        //-   button(type="button").button Search
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'NavBar',
  data() {
    return {
      shrink: false,
    }
  },
  computed: mapState(['lang', 'scrollY']),
  methods: {
    ...mapMutations(['toggleLang']),
  },
}
</script>

<style lang="scss" scoped>
#nav-bar {
  margin-bottom: 64px;
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
