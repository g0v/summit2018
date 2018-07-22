<template lang="pug">

  .sponsor-page.grid-x.align-center

    //- Row view (Evangelist, Activist, Civicist, Supporter)
    template(v-for="classType in rowViewClasses")
      section(v-if="sponsorsByClass[classType._key]").class-a.cell
        h4
          TW {{ classType.TW }}
          EN {{ classType.EN }}
        .project-card.grid-x(v-for="sponsor in sponsorsByClass[classType._key]" :key="sponsor.id").grid-margin-x
          .cell.logo-container.small-12.medium-4.large-3.text-center
            a(:href="sponsor.URL" targe="_blank")
              img.logo(:src="sponsor.LOGO")
          .cell.small-12.medium-8.large-9
            h6: b
              EN {{ sponsor['NAME'] }}
              TW {{ sponsor['NAME-CH'] }}
            p
              EN {{ sponsor['BIO'] }}
              TW {{ sponsor['BIO-CH'] }}
            a(:href="sponsor.URL" targe="_blank")
              span {{ sponsor.URL }}
              FaIcon(name="external-link" v-if="sponsor.URL")

    //- Column view (IN_KIND, MEDIA_PARTNER)
    template(v-for="classType in columnViewClasses")
      section(v-if="sponsorsByClass[classType._key]").class-b.cell
        h4
          TW {{ classType.TW }}
          EN {{ classType.EN }}
        .grid-x.grid-margin-x
          .cell(v-for="sponsor in sponsorsByClass[classType._key]" :key="sponsor.id").small-12.medium-6.large-4
            .project-card
              .logo-container.text-center
                a(:href="sponsor.URL" targe="_blank")
                  img.logo(:src="sponsor.LOGO")
              h6: b
                EN {{ sponsor['NAME'] }}
                TW {{ sponsor['NAME-CH'] }}
              p
                EN {{ sponsor['BIO'] }}
                TW {{ sponsor['BIO-CH'] }}
              a(:href="sponsor.URL" targe="_blank")
                span {{ sponsor.URL }}
                FaIcon(name="external-link")

    //- 贊助按鈕
    .cell.text-center.mb-50
      CtaButton(
        TW="我要贊助"
        EN="Sponsor Now"
        TW_hover="g0v-summit-partner-2018@googlegroups.com"
        EN_hover="g0v-summit-partner-2018@googlegroups.com"
        href=`mailto:g0v-summit-partner-2018@googlegroups.com?subject=${encodeURIComponent('成為 g0v summit 2018 贊助夥伴')}`
      )

  </div>
</template>

<script>
import groupBy from 'lodash/groupBy'
import SponsorData from '../../static/airtable_data/SPONSORS.json'
import { CtaButton } from '@/components'

export default {
  name: 'SponsorPage',
  components: { CtaButton },
  computed: {
    /**
     * 顯示為一橫列的等級
     */
    rowViewClasses() {
      return [
        { _key: 'EVANGELIST', TW: 'Evangelist', EN: 'Evangelist' },
        { _key: 'ACTIVIST', TW: 'Activist', EN: 'Activist' },
        { _key: 'CIVICIST', TW: 'Civicist', EN: 'Civicist' },
      ]
    },
    /**
     * 顯示為欄的等級
     */
    columnViewClasses() {
      return [
        { _key: 'SUPPORTER', TW: 'Supporter', EN: 'Supporter' },
        { _key: 'IN_KIND', TW: 'In Kind', EN: 'In Kind' },
        { _key: 'MEDIA_PARTNER', TW: 'Media Partner', EN: 'Media Partner' },
      ]
    },
    /**
     * 來自 Airtable 的贊助商資料
     */
    sponsorsByClass() {
      const sponsors = SponsorData.records
        .filter(record => record.fields.SHOW === true)
        .map(record => ({
          ...record.fields,
          LOGO: record.fields.CROPPED_LOGO[0].thumbnails.large.url,
          id: record.id,
        }))

      return groupBy(sponsors, 'CLASS')
    },
  },
}
</script>

<style lang="scss" scoped>
.sponsor-page {
  padding: 0.5em;

  section {
    max-width: $global-width;
    h4 {
      margin-top: 100px;
      margin-bottom: 40px;
    }

    .project-card {
      margin-bottom: 3rem;
    }

    .logo-container {
      height: 12rem;
      .logo {
        object-fit: contain;
        max-height: 100%;
      }
    }
  }
}
</style>
