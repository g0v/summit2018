<template>
  <div id="app">
    <header>
      <NavBar/>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <TheFooter/>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { NavBar, TheFooter } from '@/views'

export default {
  name: 'app',
  data () {
    return {}
  },
  computed: mapState(['lang']),
  methods: mapMutations(['toggleLang']),
  components: { NavBar, TheFooter }
}
</script>

<style lang="scss">
@import './styles/global';
#app {
  background: linear-gradient($dark-gray, $light-gray, $light-gray);
}
</style>
