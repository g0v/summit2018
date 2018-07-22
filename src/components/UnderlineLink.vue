<template>
  <router-link :to="to">
    <span id="wrapper">
      <slot/>
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'UnderlineLink',
  props: {
    to: {
      type: String,
      required: true,
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
