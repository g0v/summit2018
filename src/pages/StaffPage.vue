<template>
  <div id="StaffPage" class="grid-x align-center">
    <section id="staff" class="cell large-10">
      <div v-for="group in staffs" :key="group.name" class="line">
        <div class="title"><h4 class="title">{{ group.name }}</h4></div>
        <div class="members">
          <a v-for="staff in group.data"
             :key="staff.name"
             :href="staff.LINK"
             :class="{ nolink: staff.LINK === undefined }"
             class="member"
             target="_blank">
            <img v-if="staff.AVATAR" :src="staff.AVATAR[0].url" :alt="staff.NAME" class="thumbnail avatar">
            <gravatar-image v-else :email="staff.EMAIL" :alt="staff.NAME" class="thumbnail avatar" />
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

import { POPULATED_STAFF } from '@/../static/airtable_data/index'

export default {
  name: 'StaffPage',
  components: { GravatarImage },
  data() {
    let groups = [
      '總籌組',
      '議程委員',
      '議程組',
      '合作夥伴組',
      '行政組',
      '票務組',
      '會計組',
      '宣傳組',
      '文創組',
      '公關媒體組',
      '網站 APP 組',
      '場務組',
      '設備組',
      '口譯組',
      '直播組',
      '記錄組',
    ]

    let tempStaffs = POPULATED_STAFF
    tempStaffs = groupBy(tempStaffs, record => record.GROUP)
    let staffs = Object.keys(tempStaffs).map(element => {
      return {
        name: element,
        data: tempStaffs[element],
      }
    })
    staffs = groups.map(element => {
      return {
        name: element,
        data: tempStaffs[element],
      }
    })

    return {
      staffs,
      groups,
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
      width: 30px
      padding-top: 3px
      h4
        font-size: 1.3rem
        text-align: center
    .members
      width: calc(100% - 30px)
      .member
        text-align: center
        width: 100px
        img
          width: 80px
          height: 80px
          border-radius: 50%
          text-algin: center
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
