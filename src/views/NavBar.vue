<template lang="pug">
  .top-bar(@scroll="handleScroll", :class="(scrollY>50) && 'shrink'")
    //- TODO: add for later version
    //- .top-bar-left.show-for-large
    .top-bar-left
      ul.menu
        li
          a(href="/").brand-logo.menu-text
            FaIcon(name="g0v-logo", :scale="1.5")
            TW 啥米零時政府
            EN summmit 2018
    .top-bar-right
      ul.menu
        //- TODO: add for later version
        //- li
        //-   UnderlineLink(href="/schedule").disabled
        //-     TW 議程
        //-     EN Schedule
        //- li
        //-   UnderlineLink(href="/speakers")
        //-     TW 講者
        //-     EN Speakers
        //- li
        //-   UnderlineLink(href="/sponsors")
        //-     TW 贊助
        //-     EN Sponsors
        //- li
        //-   UnderlineLink(href="/transport")
        //-     TW 交通
        //-     EN Transport
        //- li
        //-   UnderlineLink(href="/live")
        //-     TW 直撥
        //-     EN Live
        //- li
        //-   UnderlineLink(href="/staff")
        //-     TW 工作人員
        //-     EN Staff
        //- li
        //-   UnderlineLink(href="/wiki")
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
  name: 'nav-bar',
  data () {
    return {
      shrink: false
    }
  },
  computed: mapState(['lang', 'scrollY']),
  mounted () {
    window.addEventListener('scroll', throttle(this.handleScroll, 300))
  },
  destroied () {
    window.removeEventListener('scroll', throttle(this.handleScroll, 300))
  },
  methods: {
    handleScroll () {
      this.setScrollY({ scrollY: window.scrollY })
    },
    ...mapMutations(['toggleLang', 'setScrollY'])
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  opacity: 0.95;
  position: fixed;
  z-index: 1;
  top: 0px;
  width: 100%;

  // TODO: remove for later version
  .top-bar-right, .top-bar-left {
    // Override default stacking for small screen
    flex-basis: unset;
  }


  // shrink/expand effect
  transition-property: padding;
  transition-duration: .2s;
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
    font {
      @include vertical-center;
    }
  }
}
</style>