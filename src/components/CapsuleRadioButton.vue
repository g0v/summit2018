<template>
  <div class="capsule-radio-button grid-x align-middle align-center">
    <template
      v-for="(option, index) in options"
    >
      <div v-if="index !== 0" :key="`spacer:${option}`" class="spacer"/>
      <button
        :key="`option:${option}`"
        :class="[value === option ? 'active' : 'inactive']"
        @click="() => handleSelect(option)"
      >
        {{ option }}
      </button>
    </template>
  </div>
</template>

<script>
import every from 'lodash/every'
import isString from 'lodash/isString'

export default {
  name: 'CapsuleRadioButton',
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      validator: options => every(options, isString),
    },
  },
  methods: {
    handleSelect(option) {
      this.$emit('input', option)
    },
  },
}
</script>

<style lang="scss" scoped>
.capsule-radio-button {
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
}

button {
  cursor: pointer;
  height: 40px;
  width: 130px;
  border-radius: 20px;
  &.active {
    background-color: $primary-color;
    color: white;
  }
  &.inactive {
    border: 1px solid $primary-color;
    border-width: 2px;
    color: $secondary-color;
  }
}

.spacer {
  display: inline-block;
  @media screen and (max-width: 640px) {
    height: 8px;
    border-left: 2px solid $primary-color;
  }
  @media screen and (min-width: 640px) {
    width: 48px;
    border-top: 2px solid $primary-color;
  }
}
</style>
