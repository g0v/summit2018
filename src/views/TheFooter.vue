<template lang="pug">
  #footer.callout.secondary.grid-x.align-justify
    .cell.medium-6
      ul.menu
        li.menu-text.align-self-middle
          TW 追蹤
          EN Follow
        li#g0v-icon(title="g0v website")
          a(href="http://g0v.tw/en-US/", target="_blank")
            FaIcon(name="g0v", :scale="2")
        li(title="g0v facebook")
          a(href="https://www.facebook.com/g0v.tw/", target="_blank")
            FaIcon(name="facebook")
        li(title="g0v twitter")
          a(href="https://twitter.com/g0vtw", target="_blank")
            FaIcon(name="twitter")
        //- ul.menu
        li.menu-text.align-self-middle
          TW 協作
          EN Collaboration
        li(title="join g0v slack")
          a(href="http://join.g0v.today/", target="_blank")
            FaIcon(name="slack")
        li(title="g0v github")
          a(href="https://github.com/g0v", target="_blank")
            FaIcon(name="github")
        li(title="Co-edited event documents")
          a(href="http://beta.hackfoldr.org/g0v-summit2018/", target="_blank")
            FaIcon(name="hackfoldr")
    .cell.medium-6
      p.text-right Copyright © g0v Summit 2018・
        a(href="https://github.com/g0v/summit2018", target="_blank") Source
        //- a(href="https://g0v.hackpad.tw/ep/pad/static/2mprMIpYMz9", target="_blank") Code of Conduct

</template>

<script>
export default {
  name: 'the-footer',
  data () {
    return {}
  }
}
</script>

<style scoped>
#footer {
  margin: 0;
}
#g0v-icon > a {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>