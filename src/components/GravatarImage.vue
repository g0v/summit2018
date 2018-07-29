<template>
  <img v-once :src="src" :alt="alt">
</template>

<script>
import crypto from 'crypto'

export default {
  name: 'GravatarImage',
  props: {
    email: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
  computed: {
    src() {
      return 'https://www.gravatar.com/avatar/' + this.hashGen(this.email)
    },
  },
  methods: {
    hashGen(raw) {
      raw = raw.trim().toLowerCase()
      let md5Gen = crypto.createHash('md5')
      md5Gen.update(raw)
      return md5Gen.digest('hex')
    },
  },
}
</script>
