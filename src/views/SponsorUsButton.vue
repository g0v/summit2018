<template lang="pug">
  .sponsor-us-button
    a.cta-button.button.primary.large(:href="`mailto:g0v-summit-partner-2018@googlegroups.com?subject=${encodeURIComponent('成為 g0v summit 2018 贊助夥伴')}`", target="_blank")
      .cta-button-text
        TW 我要贊助
        EN Sponsor Now
      .cta-button-text-hover
        FaIcon(name="envelope")
        strong &nbsp; partner-2018@summit.g0v.tw
</template>

<script>
export default {
  name: 'sponsor-us-button'
}
</script>

<style lang="scss" scoped>

    .cta-button {
      border: 1px solid $white;
      color: $white;
      > div { height: 20px; }
      .cta-button-text-hover { display: none; }
      &:hover {
        .cta-button-text { display: none; }
        .cta-button-text-hover { display: block; }
      }
    }
</style>