<template>
  <span :style="block && ({display: 'block'})">
    <a :href="href" :class="`cta-button button primary ${size}`" target="_blank">
      <span :class="{'hide-on-hover': hasCustomHoverText}">
        <slot/>
      </span>
      <span v-if="hasCustomHoverText" class="show-on-hover">
        {{ hoverText }}
      </span>
    </a>
  </span>
</template>

<script>
export default {
  name: 'CtaButton',
  props: {
    href: {
      type: String,
      required: true,
    },
    hoverText: {
      type: String,
      default: () => undefined,
    },
    block: {
      type: Boolean,
      default: () => false,
    },
    /**
     * Foundation Button component - sizing (https://foundation.zurb.com/sites/docs/button.html#sizing)
     *
     * Allow values: ["tiny", "small", "large", "expanded", "small expanded"]
     */
    size: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    hasCustomHoverText() {
      return this.hoverText !== undefined
    },
  },
}
</script>

<style lang="scss" scoped>
a.cta-button {
  border-radius: 100px;
  border: 1px solid $white;
  margin-right: 0.5em;
  margin-left: 0.5em;
  color: $white;

  > span {
    padding: 0 0.8rem;
  }

  .show-on-hover {
    display: none;
  }
  &:hover {
    .hide-on-hover {
      display: none;
    }
    .show-on-hover {
      display: block;
    }
  }
}
</style>
