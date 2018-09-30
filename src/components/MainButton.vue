<template>
  <span :style="block && ({display: 'block'})">
    <a :href="href" :class="`main-button button primary ${size}`" target="_blank">
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
  name: 'MainButton',
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
a.main-button {
  border-radius: 100px;
  border: 2px solid #D56064;
  margin-right: 0.5em;
  margin-left: 0.5em;
  color: #D56064;
  width: 200px;
  background: rgba(255, 255, 255, .8);
  font-weight: bold;
  box-sizing: border-box;

  > span {
    padding: 0 0.5rem;
  }

  .show-on-hover {
    display: none;
  }
  &:focus {
    color: #FFF;
  }
  &:hover {
    color: #FFF;

    .hide-on-hover {
      display: none;
    }
    .show-on-hover {
      display: initial;
    }
  }
}
</style>
