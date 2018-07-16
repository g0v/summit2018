<template lang="pug">
  a.cta-button.button.primary.large(:href="href", target="_blank")
    .cta-button-text
      TW {{ TW }}
      EN {{ EN }}
    .cta-button-text-hover
      TW {{ TW_hover || EN_hover || TW }}
      EN {{ EN_hover || TW_hover || EN }}
</template>

<script>
export default {
  name: 'CtaButton',
  props: {
    TW: {
      type: String,
      required: true,
    },
    EN: {
      type: String,
      required: true,
    },
    TW_hover: {
      type: String,
      default: null,
    },
    EN_hover: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.cta-button {
  border-radius: 500px;
  border: 1px solid $white;
  margin-right: 0.5em;
  margin-left: 0.5em;
  color: $white;
  > div {
    height: 20px;
  }
  .cta-button-text-hover {
    display: none;
  }
  &:hover {
    .cta-button-text {
      display: none;
    }
    .cta-button-text-hover {
      display: block;
    }
  }
}
</style>
