<template>
  <div id="StaffPage" class="grid-x align-center">
    <section id="staff" class="cell large-10">
      <div v-for="group in staffs" :key="group.name" class="line">
        <div class="title">
          <h4 class="title">
            <TW>{{ group.name }}</TW>
            <EN>{{ GROUPS[group.name] }}</EN>
          </h4>
        </div>
        <div class="members">
          <a v-for="staff in group.data"
             :key="staff.name"
             :href="staff.LINK"
             :class="{ nolink: staff.LINK === undefined }"
             class="member"
             target="_blank">
            <img
              :src="staff.AVATAR ? staff.AVATAR[0].url : `https://www.gravatar.com/avatar/${staff.MD5}`"
              :alt="staff.NAME"
              class="thumbnail avatar"
            >
            <!-- <gravatar-image v-else :md5="staff.MD5" :alt="staff.NAME" class="thumbnail avatar" /> -->
            <div class="name">
              <TW>{{ staff['NAME-CH'] || staff.NAME }}</TW>
              <EN>{{ staff.NAME || staff['NAME-CH'] }}</EN>
            </div>
            <div class="description">
              <TW><small>{{ staff['TITLE-CH'] || staff.TITLE }}</small></TW>
              <EN><small>{{ staff.TITLE || staff['TITLE-CH'] }}</small></EN>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { GravatarImage } from '@/components'
import groupBy from 'lodash/groupBy'

import { STAFF } from '@/../static/airtable_data'

const GROUPS = {
  總籌組: 'General Preparatory',
  議程委員: 'Programming Committee',
  議程組: 'Programming',
  合作夥伴組: 'Partnership',
  行政組: 'Administration',
  票務組: 'Ticketing',
  會計組: 'Accounting',
  宣傳組: 'Advertising',
  文創組: 'Product Development',
  公關媒體組: 'Media Relation',
  '網站 APP 組': 'Information Architecture',
  場務組: 'General Services',
  設備組: 'Infrastructure',
  口譯組: 'Translation',
  直播組: 'Broadcasting',
  記錄組: 'Photography',
}

export default {
  name: 'StaffPage',
  components: { GravatarImage },
  data() {
    let tempStaffs = STAFF
    tempStaffs = groupBy(tempStaffs, record => record.GROUP)
    let staffs = Object.keys(tempStaffs).map(element => {
      return {
        name: element,
        data: tempStaffs[element],
      }
    })
    staffs = Object.keys(GROUPS).map(element => {
      return {
        name: element,
        data: tempStaffs[element],
      }
    })

    return {
      staffs,
      GROUPS,
    }
  },
  computed: {
    ...mapState(['lang']),
  },
}
</script>

<style lang="sass" scoped>
section#staff
  margin: 100px 0 120px
  .line
    padding: 15px
    font-size: 0px
    *
      display: inline-block
      vertical-align: top
    .title
      writing-mode: vertical-lr
      width: 3.3rem
      padding-top: 3px
      h4
        font-size: 1.3rem
        text-align: center
    .members
      width: calc(100% - 3.3rem)
      .member
        text-align: center
        width: 100px
        img
          width: 80px
          height: 80px
          border-radius: 50%
          object-fit: cover
        .thumbnail
          margin-bottom: 0.2rem
        .name
          font-size: 1rem
          display: block
        .description
          font-size: initial
    .nolink:hover
      cursor: default
</style>
