<template lang="pug">

.meida-quote
  blockquote
    img.icon(
      :src="report.iconUrl",
      :alt="report.name",
      :style="{height: report.iconHeight || '3em'}"
      )
    p {{ report.quote }}
    cite
      a(:href="report.url", target="_blank") {{ report.title}}
      span - {{ report.name }}

</template>

<script>
import has from 'lodash/has'

export default {
  name: 'MediaQuote',
  props: {
    report: {
      type: Object,
      required: true,
      validator: item =>
        has(item, 'name') &&
        has(item, 'title') &&
        has(item, 'iconUrl') &&
        has(item, 'url') &&
        has(item, 'quote'),
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  margin-bottom: 0.5em;
  width: auto !important;
}
</style>
