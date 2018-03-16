<template lang="pug">
  #LandingPage
    HeroImage
    #event-intro.grid-x.grid-padding-x.align-center.flex-child-shrink.mb-50
      //- 我要贊助
      section#cta.cell.text-center.mb-50
        SponsorUsButton

      #paragraphs.cell.large-8.grid-y

        //- 社群簡介
        section#intro.cell.card
          TW.card-section
            h3 社群簡介
            p 自 2012 年以來，公民科技運動風起雲湧，以開放透明、公民參與為號召的 g0v 台灣零時政府社群號召了第一場活動，以「寫程式改造社會」為口號，從此開始公民科技之火開始延燒，至今未歇。
            p 五年多來，在上千位參與者集體的貢獻下，透過一場場黑客松，打造出多項以開放資料、開放政府為精神的資訊平台，以縮短數位落差為初衷，降低公民參與門檻，使得議題審議可立基在具體事實，提升理性討論公共事務的意識。這場開放資料、開放政府運動，g0v 社群也打破了民間與政府對抗的傳統運動路線，開創出台灣公民社會與政府互動的新模式。
          EN.card-section
            h3 About g0v
            p g0v (pronounced “gov zero”) is a decentralized, grass-roots civic tech community based in Taiwan. We advocate information transparency and build tech solutions to promote civic engagement.
            p Built on the spirits of open source and activism, g0v aims to use technology in the interest of the public good. Our missions are to allow citizens easy access to public information and to empower them to make a change. Substituting the “o” with “0″ in gov, we want to use the power of digital technologies to reform current politics so as to envision a new future of democracy.
            p Established in 2012, g0v has since hosted over 50 hackathons and two international summits. Thousands of participants from different backgrounds have contributed to hundreds of projects, making g0v one of the biggest civic tech communities around the world.

        //- 雙年會簡介
        section#intro.cell.card
          TW.card-section
            h3 雙年會簡介
            p g0v 國際雙年會兩年舉辦一次，關注開放政府、開源協作、公民參與等面向，是國際開放政府社群的焦點活動，過去兩屆吸引多達十九國講者投稿。雙年會全部由社群參與者志願籌辦，議程也秉持開放協作精神，全部議程皆有口譯、文字記錄和直播。議程除了大會籌辦，也開放完整時段的開放工作坊（Unconference）由參與者提案決定議程內容，以演講、討論、自由對話等形式創造新的協作空間。閉幕前自由報名的全場閃電講更是開源社群傳統，以開放分享的精神貫穿年會。
          EN.card-section
            h3 About g0v summit
            p The g0v summit is a biennial event which focuses on open government, open source collaboration and civic participation. It was established in 2014 by the g0v community. The past two summits have gathered speakers from 19 countries and more than 2,000 local and international participants. The summit is run by volunteers, and it itself is a huge collaborative project of the community. We aim to build an open environment for everyone. Volunteers will help write online shared notes, make livestreaming videos, and do realtime translation, all of these are released under open licenses. Besides formal sessions, we emphasize on “unconference”, which enables participants to host sessions and organize their own summit. As part of the tradition in open source events, the summit always ends with lightening talks when everyone can share their projects on the stage.
      //- 時程
      section#timelime.cell.large-4
        TheTimeline(:items="timelineItems")

      //- 贊助年會
      //- section#sponsor-us.cell.medium-8
      //-   ScrollToTack(tackClass="tack-sponsor-us")
      //-     SponsorUs

    #summit-highlight.grid-x.grid-padding-x.align-center
      //- Summit hightlight
      section#hightlights.cell
        //- 重點講者
        h3
          TW 歷年講者
          EN Past Speakers
        #speakers.grid-x.align-justify.grid-margin-x.mb-50
          template(v-for="speaker in speakers")
            SpeakerBrief(:speaker="speaker").cell.large-4.medium-6.flex-child-shrink

        .grid-x.grid-margin-x
          //- 媒體報導
          .cell.large-4
            h3
              TW 媒體報導
              EN Media Coverage
            #reports
              .media-object(v-for="report in reports").stack-for-small
                .media-object-section
                  MediaQuote(:report="report")

          //- 歷年活動
          .cell.large-8
            h3
              TW 歷年活動
              EN Past Events
            #previous-events.grid-x
              .card
                .grid-x
                  .cell.card-section.medium-7.small-order-2
                    a(href="http://summit.g0v.tw/2016/", target="_blank")
                      h5
                        TW 2016 拆後重建
                        EN 2016 g0v summit
                    p
                      TW 2016 年則以「拆政府原地重建」作為主題。時值新舊政府交接，台灣在開放資料評比中排名世界第一，多位社群參與者也進入政府擔任顧問、幕僚等職，在拆解傳統政治模式之後，討論如何以科技建立開放的公私協作新模式。這次有超過千位參與者，與來自 17 國的全球公民科技代表，分享歐洲的新興政治經驗、亞洲推展數位科技到傳統公民團體的經驗、各國數位進入政府搭建溝通橋樑的改造經驗等。
                      EN The 2016 summit centered on the theme of “reconstruction”. 2016 is a year that Taiwan was ranked No.1 in Open Data Index, that Taiwan elected a new president, and that many g0v participants joined the government to “reconstruct” the system from inside. This summit invited participants to share and reflect on various efforts of “reconstruction”, ranging from how to build new systems for civic tech, how to practice liquid democracy in Europe, how to empower NGOs in Asia, and how to promote public-private partnership.
                  .cell.card-section.medium-5.small-order-1
                    a(href="http://summit.g0v.tw/2016/", target="_blank")
                      img(src="../assets/LandingPage/past-events/summit2016.png").thumbnail

              .card
                .grid-x
                  .cell.card-section.medium-6
                    a(href="http://summit.g0v.tw/2014/", target="_blank")
                      img(src="../assets/LandingPage/past-events/summit2014.png").thumbnail
                  .cell.card-section.medium-6
                    a(href="http://summit.g0v.tw/2014/", target="_blank")
                      h5
                        TW 2014 啥米零時政府
                        EN 2014 g0v summit
                    p
                      TW 2014 年的首次年會緊接在 318 公民運動之後，聚焦開放國會、參與式民主、網路協作的社會運動。有來自八國長期關注開放政府運動的國際講者，以及國內政府公部門、NGO、媒體、資訊好手，並與中央研究院社會學研究所二十週年慶「跨世紀學運論壇」合辦，促進跨界交流。
                      EN The 2014 summit took place right after the Sunflower Movement, in which digital tools boosted hundreds of thousands of protestors to take the streets. This summit focused on open parliament, participatory democracy and online collaboration in social movements. It was also the first attempt to bring cross-displinary discussion among international civic tech hackers, open source communities, NGOs, media, academic and public servants.

              //- Flickr 內嵌
              .card
                .card-section
                  h5: a(href="https://www.flickr.com/photos/g0v/albums/with/72157692801078814" target="_blank") g0v Flickr
                //- .card-section
                <a data-flickr-embed="true" data-header="false" data-footer="false"  href="https://www.flickr.com/photos/g0v/albums/72157692801078814" title="g0v flickr">
                  <img alt="g0v flickr" src="https://farm8.staticflickr.com/7588/26460319244_975d4dd47e_c.jpg" width="100%" height="auto">
                </a>

          //- 尾部贊助商 logo 的標題
          .cell
            h3
              TW 贊助夥伴
              EN Sponsors

</template>

<script>
import { mapState } from 'vuex'
import { HeroImage } from '@/components'
import { SponsorUsButton, TheTimeline, SpeakerBrief, MediaQuote } from '@/views'
import speakers from '@/assets/LandingPage/speakers/index.js'
import media from '@/assets/LandingPage/media/index.js'

export default {
  name: 'LandingPage',
  components: {
    HeroImage,
    SponsorUsButton,
    TheTimeline,
    SpeakerBrief,
    MediaQuote,
  },
  data() {
    return {
      timelineItems: [
        {
          description: 'Call for Paper',
          time: { tw: '3/15-4/30', en: 'March 15th - April 30th' },
          'fa-icon': 'globe',
        },
        {
          description: { tw: '早鳥報名', en: 'Early bird tickets' },
          time: { en: 'est. May', tw: '五月' },
          'fa-icon': 'ticket',
        },
        {
          description: 'g0v Summit',
          time: { en: 'October 5th - 7th', tw: '10/5-7' },
          'fa-icon': 'calendar-check-o',
        },
      ],
    }
  },
  computed: {
    ...mapState(['lang']),
    speakers() {
      return this.lang === 'TW' ? speakers.TW : speakers.EN
    },
    reports() {
      return this.lang === 'TW' ? media.TW : media.EN
    },
  },
}
</script>

<style lang="scss" scoped>
// #LandingPage {
//   #event-intro, #summit-highlight {
//     max-width: 1080px;
//     margin: auto;
//   }
// }

#event-intro {
  #cta {
    position: relative;
  }
  #intro {
  }
  #sponsor-us {
    padding-top: 100px;
    padding-bottom: 50px;
  }
}

#summit-highlight {
  #hightlights {
  }
  #speakers {
  }
  #reports {
  }
  #previous-events {
  }
}
</style>

<style lang="scss">
.tack-sponsor-us {
  @include breakpoint(medium) {
    opacity: 0.93;
    font-size: 0.75em;
    position: fixed;
    z-index: 1;
    right: 20px;
    bottom: 40px;
    width: 320px;
    .close-button {
      display: block !important;
    }
  }
}
</style>
