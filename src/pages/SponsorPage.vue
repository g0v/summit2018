<template lang="pug">

  .sponsor-page.grid-x.align-center

    //- 鑽石級贊助
    section.class-a.cell.large-10
      h3
        TW 鑽石級贊助
        EN Diamond
      .project-card.grid-x(v-for="sponsor in sponsors['A']" :key="sponsor.id").grid-margin-x
        .cell.logo-container.small-12.medium-4.large-3.text-center
          a(:href="sponsor.URL" targe="_blank")
            img.logo(:src="sponsor.LOGO")
        .cell.small-12.medium-8.large-9
          h4
            EN {{ sponsor['NAME'] }}
            TW {{ sponsor['NAME-CH'] }}
          p
            EN {{ sponsor['BIO'] }}
            TW {{ sponsor['BIO-CH'] }}
          a(:href="sponsor.URL" targe="_blank")
            span {{ sponsor.URL }} &nbsp;
            FaIcon(name="external-link")

    //- 黃金級贊助
    section.class-b.cell.large-10
      h3
        TW 黃金級贊助
        EN Gold
      .project-card.grid-x(v-for="sponsor in sponsors['B']" :key="sponsor.id").grid-margin-x
        .cell.logo-container.small-12.medium-4.large-3.text-center
          a(:href="sponsor.URL" targe="_blank")
            img.logo(:src="sponsor.LOGO")
        .cell.small-12.medium-8.large-9
          h4
            EN {{ sponsor['NAME'] }}
            TW {{ sponsor['NAME-CH'] }}
          p
            EN {{ sponsor['BIO'] }}
            TW {{ sponsor['BIO-CH'] }}
          a(:href="sponsor.URL" targe="_blank")
            span {{ sponsor.URL }} &nbsp;
            FaIcon(name="external-link")

    //- 白銀級贊助
    section.class-c.cell.large-10
      h3
        TW 白銀級贊助
        EN Silver
      .grid-x.grid-margin-x
        .cell(v-for="sponsor in sponsors['C']" :key="sponsor.id").small-12.medium-6.large-4
          .project-card
            .logo-container.text-center
              a(:href="sponsor.URL" targe="_blank")
                img.logo(:src="sponsor.LOGO")
            h4
              EN {{ sponsor['NAME'] }}
              TW {{ sponsor['NAME-CH'] }}
            p
              EN {{ sponsor['BIO'] }}
              TW {{ sponsor['BIO-CH'] }}
            a(:href="sponsor.URL" targe="_blank")
              span {{ sponsor.URL }} &nbsp;
              FaIcon(name="external-link")

    //- 青銅級贊助
    section.class-d.cell.large-10
      h3
        TW 青銅級贊助
        EN Bronze
      .grid-x.grid-margin-x
        .cell(v-for="sponsor in sponsors['D']" :key="sponsor.id").small-12.medium-6.large-4
          .project-card
            .logo-container.text-center
              a(:href="sponsor.URL" targe="_blank")
                img.logo(:src="sponsor.LOGO")
            h4
              EN {{ sponsor['NAME'] }}
              TW {{ sponsor['NAME-CH'] }}
            p
              EN {{ sponsor['BIO'] }}
              TW {{ sponsor['BIO-CH'] }}
            a(:href="sponsor.URL" targe="_blank")
              span {{ sponsor.URL }} &nbsp;
              FaIcon(name="external-link")

    //- 贊助按鈕
    .cell.text-center.mb-50
      SponsorUsButton

  </div>
</template>

<script>
import groupBy from 'lodash/groupBy'
import shuffle from 'lodash/shuffle'
import SponsorData from '../../static/airtable_data/SPONSORS.json'
import { SponsorUsButton } from '@/views'

export default {
  name: 'sponsor-page',
  components: { SponsorUsButton },
  computed: {
    /**
     * 來自 Airtable 的贊助商資料
     */
    sponsors () {
      const logoType = window.innerWidth > 640 ? 'large' : 'small'

      const sponsors = SponsorData.records
        .map(record => ({
          ...record.fields,
          LOGO: record.fields.CROPPED_LOGO[0].thumbnails[logoType].url,
          id: record.id
        }))
        .filter(record => record.SHOW)

      return groupBy(shuffle(sponsors), 'CLASS')
    }
  }
}
</script>

<style lang="scss" scoped>
.sponsor-page {
  section {
    margin-bottom: 4rem;

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

  .class-a {
    // h3 { border-bottom-color: $classA }
  }
  .class-b {
    // h3 { border-bottom-color: $classB }
  }
  .class-c {
    // h3 { border-bottom-color: $classC }
  }
  .class-d {
    // h3 { border-bottom-color: $classD }
  }
}
</style>