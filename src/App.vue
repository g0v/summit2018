<template>
  <div id="app">
    <header>
      <NavBar/>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { StickyNavHero, NavBar } from '@/components'

export default {
  name: 'app',
  data () {
    return {}
  },
  computed: mapState(['lang']),
  methods: mapMutations(['toggleLang']),
  components: { StickyNavHero, NavBar }
}
</script>

<style lang="scss">
@import './styles/global';
</style>
