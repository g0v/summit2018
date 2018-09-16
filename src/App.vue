<template>
  <div id="app">
    <header>
      <NavBar/>
    </header>
    <main>
      <router-view/>
      <AgendumDialog
        :open="!!dialogAgendum"
        :agendum="dialogAgendum"
        @close="closeDialog"
      />
    </main>
    <footer>
      <SponsorSection v-if="showSponsorFooter"/>
      <TheFooter/>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import find from 'lodash/find'
import throttle from 'lodash/throttle'
import router from '@/router'
import { AgendumDialog } from '@/components'
import { NavBar, TheFooter, SponsorSection } from '@/views'
import { POPULATED_SCHEDULE } from '@/../static/airtable_data/index'

export default {
  name: 'App',
  components: { NavBar, TheFooter, SponsorSection, AgendumDialog },
  data() {
    return {
      dialogAgendum: find(POPULATED_SCHEDULE, [
        'id',
        this.$route.params.agendumIdOrDay,
      ]),
    }
  },
  computed: {
    ...mapState(['lang']),
    showSponsorFooter() {
      return this.$route.path !== '/sponsors'
    },
  },
  watch: {
    $route(to, from) {
      const { agendumIdOrDay } = to.params
      this.dialogAgendum = agendumIdOrDay
        ? find(POPULATED_SCHEDULE, ['id', agendumIdOrDay])
        : null
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
    closeDialog() {
      router.push({ name: this.$route.name })
    },
  },
}
</script>

<style lang="scss">
@import './styles/global';
</style>
