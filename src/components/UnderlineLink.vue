<template>
  <a>
    <span id="wrapper">
      <slot/>
    </span>
  </a>
</template>

<script>
export default {
  name: 'UnderlineLink'
}
</script>

<style lang="scss" scoped>
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