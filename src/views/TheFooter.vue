<template lang="pug">
div#the-footer
  #footer-container.grid-container
    #footer.grid-x.align-justify
      .cell.auto.grid-x.align-middle.border
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
        ul.menu
          li.menu-text.align-self-middle
            TW 協作
            EN Collaboration
          li(title="join g0v slack")
            a(href="http://join.g0v.today/", target="_blank")
              FaIcon(name="slack")
          li(title="g0v github")
            a(href="https://github.com/g0v/summit2018", target="_blank")
              FaIcon(name="github")
          li(title="Co-edited event documents")
            a(href="http://beta.hackfoldr.org/g0v-summit2018/", target="_blank")
              FaIcon(name="hackfoldr")
          li(title="Mail to organizer")
            a(href="mailto:g0v-summit-committee-2018@googlegroups.com", target="_blank")
              FaIcon(name="envelope-o")
      .cell.medium-shrink.small-expand.border.grid-x.align-middle.align-center
        small: p#copyright.text-center Copyright © g0v Summit 2018

</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
#the-footer {
  height: 100px;
  background-color: $dark-gray;
  border-top: 2px solid $darker-gray;
  ul > li > a {
    padding: 0.7rem 0.8rem;
  }
}
#footer-container,
#footer {
  height: 100%;
}
#g0v-icon > a {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
#copyright {
  margin-bottom: 0px;
}
.border {
  border: 1px solid rgba($color: #000000, $alpha: 0);
}
</style>
