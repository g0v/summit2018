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
  methods: mapMutations(['toggleLang']),
}
</script>

<style lang="scss">
@import './styles/global';

.mb-50 {
  margin-bottom: 50px;
}
</style>
