<template>
  <div id="app">
    <header>
      <NavBar/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <SponsorSection v-if="showSponsorFooter"/>
      <TheFooter/>
    </footer>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
import { mapState, mapMutations } from 'vuex'
import { NavBar, TheFooter, SponsorSection } from '@/views'

export default {
  name: 'App',
  components: { NavBar, TheFooter, SponsorSection },
  data() {
    return {}
  },
  computed: {
    ...mapState(['lang']),
    showSponsorFooter() {
      return this.$route.path !== '/sponsors'
    },
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', throttle(this.handleScroll, 300))
  },
  destroied() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', throttle(this.handleScroll, 300))
  },
  methods: {
    ...mapMutations(['setWindowInnerWidth', 'setScrollY']),
    handleResize() {
      this.setWindowInnerWidth({ innerWidth: window.innerWidth })
    },
    handleScroll() {
      this.setScrollY({ scrollY: window.scrollY })
    },
  },
}
</script>

<style lang="scss">
@import './styles/global';

.mb-50 {
  margin-bottom: 50px;
}
</style>
