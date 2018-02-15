<template lang="pug">
  #LandingPage
    HeroImage
    #content.grid-x.grid-padding-x.align-center

      //- 贊助我們
      section#cta.cell.text-center
        a.button.hollow.secondary.large(href="#sponsor-us")
          TW 成為贊助夥伴
          EN Become a Partner

      //- 社群簡介
      section#intro.cell.card.medium-8.align-self-left
        TW
          h3 社群簡介
          p 自 2012 年以來，公民科技運動風起雲湧，以開放透明、公民參與為號召的 g0v 台灣零時政府社群號召了第一場活動，以「寫程式改造社會」為口號，從此開始公民科技之火開始延燒，至今未歇。
          p 五年多來，在上千位參與者集體的貢獻下，透過一場場黑客松，打造出多項以開放資料、開放政府為精神的資訊平台，以縮短數位落差為初衷，降低公民參與門檻，使得議題審議可立基在具體事實，提升理性討論公共事務的意識。這場開放資料、開放政府運動，g0v 社群也打破了民間與政府對抗的傳統運動路線，開創出台灣公民社會與政府互動的新模式。
        EN
          h3 About g0v
          p g0v (pronounced “gov zero”) is a decentralized civic tech community from Taiwan, advocating transparency of information, building tech solutions for citizens to participate in public affairs from grass-roots.
          p In the spirit of open source and activism, g0v aims to use technology in the interest of the public good, allowing citizens easy access to vital information and power to shape the civil society. Substituting the “o” with “0″ in gov, we want to use the Internet and digital thinking (0 &amp; 1) to change the traditional “gov”.
          p Since 2012, g0v has hosted over 50 hackathons and 2 international summits. Thousands of participants from different backgrounds contributed to hundreds of projects, creating new tools to mobilise civic engagement.

      //- 雙年會簡介
      section#intro.cell.card.medium-8.align-self-right
        TW
          h3 雙年會簡介
          p g0v 國際雙年會兩年舉辦一次，關注開放政府、開源協作、公民參與等面向，是國際開放政府社群的焦點活動，過去兩屆吸引多達十九國講者投稿。雙年會全部由社群參與者志願籌辦，議程也秉持開放協作精神，全部議程皆有口譯、文字記錄和直播。議程除了大會籌辦，也開放完整時段的開放工作坊（Unconference）由參與者提案決定議程內容，以演講、討論、自由對話等形式創造新的協作空間。閉幕前自由報名的全場閃電講更是開源社群傳統，以開放分享的精神貫穿年會。
        EN
          h3 About g0v summit
          p g0v’s biennial summits started in 2014, featuring open government, open source collaboration and civic participation. The past 2 summits have gathered speakers from 19 countries and 2000 local participants. Hosted by volunteers only, g0v summit’s agenda is designed under and for open collaboration. Unconference enables participants to freely host their own sessions. As the tradition, lightening talks open the stage to everyone to share their projects. Operation documents, online shared notes, livestreaming videos and translations are released by open license with the help of volunteer contributors.

      //- 贊助年會
      section#sponsor-us.cell.medium-8
        ScrollToTack(tackClass="tack-sponsor-us")
          //- SponsorUs

      //- 時程
      section#timelime.cell
        TheTimeline(:items="timelineItems")

      //- Summit hightlight
      section#hightlights.cell.large-10
        h2
          TW 峰會亮點
          EN Summit highlight

        //- 重點講者
        h3
          TW 歷年講者
          EN Previous Speakers
        #speakers.grid-x.align-justify.grid-padding-x
          div(v-for="speaker in speakers").media-object.medium-4.cell
            .media-object-section
              img(:src="speaker.imgUrl").thumbnail.round
            .media-object-section.main-section
              h5 {{ speaker.name }}
                small.speaker-title {{ speaker.title }}
              p {{ speaker.description }}

        //- 媒體報導
        h3
          TW 媒體報導
          EN Media Coverage
        #reports
          .media-object(v-for="report in reports").stack-for-small
            .media-object-section
              blockquote {{ report.quote }}
                cite {{ report.title}} - {{ report.name }}

        //- 歷年活動
        h3
          TW 歷年回顧
          EN Previous Events
        #previous-events
          .grid-x.grid-padding-x
            .cell.medium-4
              a(href="http://summit.g0v.tw/2016/", target="_blank")
                img(src="../assets/img/summit2016.png").thumbnail
            .cell.medium-8
              h5
                TW 2016 拆後重建
                EN 2016 g0v summit
              p
                TW 2016 年則以「拆政府原地重建」作為主題。時值新舊政府交接，台灣在開放資料評比中排名世界第一，多位社群參與者也進入政府擔任顧問、幕僚等職，在拆解傳統政治模式之後，討論如何以科技建立開放的公私協作新模式。這次有超過千位參與者，與來自 17 國的全球公民科技代表，分享歐洲的新興政治經驗、亞洲推展數位科技到傳統公民團體的經驗、各國數位進入政府搭建溝通橋樑的改造經驗等。
                EN Right after the Sun Flower Movement, in which digital tools boosted hundreds of thousands of protestors, g0v Summit 2014 focus on open parliament, participatory democracy and online collaboration in social movements. It was also the first attempt to bring cross-displinary discussion among international civic tech hackers, open source communities, NGOs, media, academic and public administration officers.
          .grid-x.grid-padding-x
            .cell.medium-4
              a(href="http://summit.g0v.tw/2014/", target="_blank")
                img(src="../assets/img/summit2014.png").thumbnail
            .cell.medium-8
              h5
                TW 2014 啥米零時政府
                EN 2014 g0v summit
              p
                TW 2014 年的首次年會緊接在 318 公民運動之後，聚焦開放國會、參與式民主、網路協作的社會運動。有來自八國長期關注開放政府運動的國際講者，以及國內政府公部門、NGO、媒體、資訊好手，並與中央研究院社會學研究所二十週年慶「跨世紀學運論壇」合辦，促進跨界交流。
                EN 2016 is a year that Taiwan was ranked No.1 in Open Data Index, that Taiwan elected a new president, and that many g0v participants have entered the government to “reconstruct” the system from inside. g0v Summit 2016 thus emereged reflections on “reconstructing” a better system by civic tech, practicing liquid democracy in Europe, empowering NGOs in Asia, and bridging public-private partnership.

      //- <a data-flickr-embed="true" data-header="true" data-footer="true"  href="https://www.flickr.com/photos/g0v/albums/72157668568138255" title="20160514 / G0V Summit Day1 精選"><img src="https://farm8.staticflickr.com/7444/27061587186_5e097fe67e_m.jpg" width="240" height="160" alt="20160514 / G0V Summit Day1 精選"></a>

</template>

<script>
import { mapState } from 'vuex'
import { HeroImage } from '@/components'
import { SponsorUs, TheTimeline } from '@/views'
import speakers from '@/assets/LandingPage/speakers'
import media from '@/assets/LandingPage/media'

export default {
  name: 'landingPage',
  data () {
    return {
      timelineItems: [
        { description: 'Call for Paper', time: { tw: '3/15-4/30', en: 'March 15th - April 30th' }, 'fa-icon': 'globe' },
        { description: { tw: '早鳥報名', en: 'Early bird tickets' }, time: { en: 'est. May', tw: '五月' }, 'fa-icon': 'ticket' },
        { description: 'g0v Summit', time: { en: 'October 5th - 7th', tw: '10/5-7' }, 'fa-icon': 'calendar-check-o' }
      ]
    }
  },
  computed: {
    ...mapState(['lang']),
    speakers () {
      return this.lang === 'TW' ? speakers.TW : speakers.EN
    },
    reports () {
      return this.lang === 'TW' ? media.TW : media.EN
    }
  },
  components: { HeroImage, SponsorUs, TheTimeline }
}
</script>

<style lang="scss" scoped>
#content {
  #cta {
    position: relative;
    top: -50px;
    button {
      background-color: $primary-color;
    }
  }
  #intro {}
  #sponsor-us {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  #hightlights {}
  #speakers {
    .round {
      border-radius: 50%;
      height: 64px;
    }
  }
  #reports {}
  #previous-events {}
}
</style>

<style lang="scss">
.tack-sponsor-us {
  @include breakpoint(medium) {
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
