<template>
  <g :transform="`translate(${x} ${y})`">
    <path :stroke="colors[1]" :d="`M0 0 H3000`" :stroke-width="2*r"/>
    <path v-if="colors[2]" :stroke="colors[2]" :d="`M0 ${2*r/3} H3000`" :stroke-width="2*r/3"/>
    <circle :fill="colors[0]" :r="r"/>
  </g>
</template>

<script>
export default {
  name: 'Beam',
  props: {
    colors: { type: Array, default: () => ['#C55B3B', '#E3DDAB', '#DEB793'] },
    r: { type: Number, default: 10 },
    x: { type: Number, default: 10 },
    y: { type: Number, default: 10 },
  },
}
</script>

<style scoped>
</style>
