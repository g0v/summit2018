<template>
  <div class="callout text-center" data-closable>
    <h3>
      <TW>成為合作夥伴</TW>
      <EN>Become a Partner</EN>
    </h3>
    <p>
      <TW>這邊會放一些關於贊助年會的說明文字，所以這是一段關於贊助年會的說明文字，所以這是一段關於贊助年會的說明文字。</TW>
      <EN>Tempor eiusmod velit deserunt exercitation excepteur aliqua irure laborum aliquip aliquip est consectetur. exercitation excepteur aliqua irure laborum aliqu.</EN>
    </p>
    <p>
      <UnderlineLink
        id="mailto"
        href="`mailto:g0v-summit-partner-2018@googlegroups.com?subject=${encodeURIComponent('成為 g0v summit 2018 贊助夥伴')}`"
        target="_blank"
      >
        <strong>g0v-summit-partner-2018@googlegroups.com</strong>
      </UnderlineLink>
    </p>
    <a class="button hollow">
      <TW>下載企劃書</TW>
      <EN>Download Proposal</EN>
    </a>
    <button class="close-button" type="button" data-close aria-label="Dismiss alert">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SponsorUs',
}
</script>

<style lang="scss" scoped>
.callout {
  background-color: $primary-color;
  // color: $white;
  #mailto {
    color: $white;
  }
  a.button {
    background-color: $white;
  }
  .close-button {
    display: none;
  }
}
</style>
