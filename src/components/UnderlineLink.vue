<template>
  <router-link v-if="!!to" :to="to">
    <span id="wrapper">
      <slot/>
    </span>
  </router-link>
  <a v-else-if="!!href" :href="href" target="_blank">
    <span id="wrapper">
      <slot/>
    </span>
  </a>
  <span v-else id="wrapper">
    <slot/>
  </span>
</template>

<script>
export default {
  name: 'UnderlineLink',
  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  color: $body-font-color;
  font-weight: bold;
}

#wrapper {
  display: inline-block;

  &:after {
    display: block;
    content: '';
    border-bottom: solid 0.1em;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
}
</style>
