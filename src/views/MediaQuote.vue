<template lang="pug">

.meida-quote
  blockquote {{ report.quote }}
    cite
      a(:href="report.url") {{ report.title}}
      span - {{ report.name }}

</template>

<script>
import has from 'lodash/has'

export default {
  name: 'media-quote',
  props: {
    report: {
      type: Object,
      required: true,
      validator: (item) =>
        has(item, 'name') &&
        has(item, 'title') &&
        has(item, 'iconUrl') &&
        has(item, 'url') &&
        has(item, 'quote')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>