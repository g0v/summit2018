<template lang="pug">
  div#nav-bar: .top-bar(@scroll="handleScroll", :class="(scrollY>50) && 'shrink'")
    //- TODO: add for later version
    //- .top-bar-left.show-for-large
    .top-bar-left
      ul.menu
        li: router-link(to="/").brand-logo.menu-text
          span.flex-container.align-middle.shahow
            FaIcon.brand-icon(name="g0v-logo", :scale="1.5")
            TW.brand-title 2018 零時政府高峰會
            EN.brand-title summit 2018
    .top-bar-right
      ul.menu
        //- TODO: add for later version
        //- li
        //-   UnderlineLink(to="/schedule").disabled
        //-     TW 議程
        //-     EN Schedule
        //- li
        //-   UnderlineLink(to="/speakers")
        //-     TW 講者
        //-     EN Speakers
        li
          UnderlineLink(to="/cfp")
            TW 講者徵求
            EN Call for Paper
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
        //- li
        //-   UnderlineLink(to="/staff")
        //-     TW 工作人員
        //-     EN Staff
        //- li
        //-   UnderlineLink(to="/wiki")
        //-     TW 大會共筆
        //-     EN Wiki
        li
          a(@click="toggleLang")
            span(v-if="lang === 'TW'")
              b 中
              span /En
            span(v-else)
              span 中/
              b En
        //- li
        //-   input(type="search", placeholder="Search")
        //- li
        //-   button(type="button").button Search
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import throttle from 'lodash/throttle'

export default {
  name: 'NavBar',
  data() {
    return {
      shrink: false,
    }
  },
  computed: mapState(['lang', 'scrollY']),
  mounted() {
    window.addEventListener('scroll', throttle(this.handleScroll, 300))
  },
  destroied() {
    window.removeEventListener('scroll', throttle(this.handleScroll, 300))
  },
  methods: {
    handleScroll() {
      this.setScrollY({ scrollY: window.scrollY })
    },
    ...mapMutations(['toggleLang', 'setScrollY']),
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
  z-index: 1;
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
      margin-right: 0.7rem;
      color: #eee;
    }
    .brand-title {
      color: #eee;
    }
    font {
      @include vertical-center;
    }
  }
}
</style>
