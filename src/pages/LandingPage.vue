<template lang="pug">
  #LandingPage
    HeroImage(class="mb-150")
    #event-intro.grid-y.align-middle.mb-50
      //- 社群簡介
      section
        TW
          h1 社群簡介
          p 自 2012 年以來，公民科技運動風起雲湧，以開放透明、公民參與為號召的 g0v 台灣零時政府社群號召了第一場活動，以「寫程式改造社會」為口號，從此開始公民科技之火開始延燒，至今未歇。
          p 五年多來，在上千位參與者集體的貢獻下，透過一場場黑客松，打造出多項以開放資料、開放政府為精神的資訊平台，以縮短數位落差為初衷，降低公民參與門檻，使得議題審議可立基在具體事實，提升理性討論公共事務的意識。這場開放資料、開放政府運動，g0v 社群也打破了民間與政府對抗的傳統運動路線，開創出台灣公民社會與政府互動的新模式。
        EN
          h1 About g0v
          p g0v (pronounced “gov zero”) is a decentralized, grass-roots civic tech community based in Taiwan. We advocate information transparency and build tech solutions to promote civic engagement.
          p Built on the spirits of open source and activism, g0v aims to use technology in the interest of the public good. Our missions are to allow citizens easy access to public information and to empower them to make a change. Substituting the “o” with “0″ in gov, we want to use the power of digital technologies to reform current politics so as to envision a new future of democracy.
          p Established in 2012, g0v has since hosted over 50 hackathons and two international summits. Thousands of participants from different backgrounds have contributed to hundreds of projects, making g0v one of the biggest civic tech communities around the world.

      //- 雙年會簡介
      section
        TW
          h1 雙年會簡介
          p g0v 國際雙年會兩年舉辦一次，關注開放政府、開源協作、公民參與等面向，是國際開放政府社群的焦點活動，過去兩屆吸引多達十九國講者投稿。雙年會全部由社群參與者志願籌辦，議程也秉持開放協作精神，全部議程皆有口譯、文字記錄和直播。議程除了大會籌辦，也開放完整時段的開放工作坊（Unconference）由參與者提案決定議程內容，以演講、討論、自由對話等形式創造新的協作空間。閉幕前自由報名的全場閃電講更是開源社群傳統，以開放分享的精神貫穿年會。
          p
            a(href="mailto:g0v-summit-partner-2018@googlegroups.com") 贊助大會
            span &nbsp;&nbsp;|&nbsp;&nbsp;
            a(href="mailto:g0v-summit-2018-pr@googlegroups.com") 媒體聯絡
            span &nbsp;&nbsp;|&nbsp;&nbsp;
            router-link(:to="{ name: 'CallForPaperPage' }") 投稿 (已截止)
        EN
          h1 About g0v summit
          p The g0v summit is a biennial event which focuses on open government, open source collaboration and civic participation. It was established in 2014 by the g0v community. The past two summits have gathered speakers from 19 countries and more than 2,000 local and international participants. The summit is run by volunteers, and it itself is a huge collaborative project of the community. We aim to build an open environment for everyone. Volunteers will help write online shared notes, make livestreaming videos, and do realtime translation, all of these are released under open licenses. Besides formal sessions, we emphasize on “unconference”, which enables participants to host sessions and organize their own summit. As part of the tradition in open source events, the summit always ends with lightening talks when everyone can share their projects on the stage.
          p
            a(href="mailto:g0v-summit-partner-2018@googlegroups.com") Sponsor the Event
            span &nbsp;&nbsp;|&nbsp;&nbsp;
            a(href="mailto:g0v-summit-2018-pr@googlegroups.com") Media Contact
            span &nbsp;&nbsp;|&nbsp;&nbsp;
            router-link(:to="{ name: 'CallForPaperPage' }") Call For Paper (Closed)

    #timeline-wrapper.mb-50
      section#timeline
        VueResponsiveTimeline(:items="timelineItems" :breakpoint="1024")

    #summit-highlight.grid-y.align-middle.mb-50

      section#keynotes
        h1
          TW 2018 Keynote
          EN 2018 Keynote
        .grid-x.align-justify.grid-margin-x.mb-50
          template(v-for="keynote in keynotes")
            KeynoteBrief(:keynote="keynote").cell.large-6.medium-6.flex-child-shrink

      section#past-speakers
        h1
          TW 歷年講者
          EN Past Speakers
        .grid-x.align-justify.grid-margin-x.mb-50
          template(v-for="speaker in speakers")
            SpeakerBrief(:speaker="speaker").cell.large-4.medium-6.flex-child-shrink

      section#media-coverage
        h1
          TW 媒體報導
          EN Media Coverage
        .grid-x.align-justify.grid-margin-x.mb-50
          .media-object(v-for="report in reports").large-4.stack-for-small
            .media-object-section
              MediaQuote(:report="report")

      section#flickr
        h1 g0v Flickr
        .card: .card-section
          <a data-flickr-embed="true"  href="https://www.flickr.com/photos/g0v" title="summit-2018-carousel">
            <img src="https://farm8.staticflickr.com/7588/26460319244_1c602283e3_h.jpg" width="1600" height="709" alt="summit-2018-carousel">
          </a>

        //- 歷年活動（隱藏）
        //- .cell.large-8
        //-   h1
        //-     TW 歷年活動
        //-     EN Past Events
        //-   #previous-events.grid-x
        //-     .card
        //-       .grid-x
        //-         .cell.card-section.medium-7.small-order-2
        //-           a(href="http://summit.g0v.tw/2016/", target="_blank")
        //-             h5
        //-               TW 2016 拆後重建
        //-               EN 2016 g0v summit
        //-           p
        //-             TW 2016 年則以「拆政府原地重建」作為主題。時值新舊政府交接，台灣在開放資料評比中排名世界第一，多位社群參與者也進入政府擔任顧問、幕僚等職，在拆解傳統政治模式之後，討論如何以科技建立開放的公私協作新模式。這次有超過千位參與者，與來自 17 國的全球公民科技代表，分享歐洲的新興政治經驗、亞洲推展數位科技到傳統公民團體的經驗、各國數位進入政府搭建溝通橋樑的改造經驗等。
        //-             EN The 2016 summit centered on the theme of “reconstruction”. 2016 is a year that Taiwan was ranked No.1 in Open Data Index, that Taiwan elected a new president, and that many g0v participants joined the government to “reconstruct” the system from inside. This summit invited participants to share and reflect on various efforts of “reconstruction”, ranging from how to build new systems for civic tech, how to practice liquid democracy in Europe, how to empower NGOs in Asia, and how to promote public-private partnership.
        //-         .cell.card-section.medium-5.small-order-1
        //-           a(href="http://summit.g0v.tw/2016/", target="_blank")
        //-             img(src="../assets/LandingPage/past-events/summit2016.png").thumbnail

        //-     .card
        //-       .grid-x
        //-         .cell.card-section.medium-6
        //-           a(href="http://summit.g0v.tw/2014/", target="_blank")
        //-             img(src="../assets/LandingPage/past-events/summit2014.png").thumbnail
        //-         .cell.card-section.medium-6
        //-           a(href="http://summit.g0v.tw/2014/", target="_blank")
        //-             h5
        //-               TW 2014 啥米零時政府
        //-               EN 2014 g0v summit
        //-           p
        //-             TW 2014 年的首次年會緊接在 318 公民運動之後，聚焦開放國會、參與式民主、網路協作的社會運動。有來自八國長期關注開放政府運動的國際講者，以及國內政府公部門、NGO、媒體、資訊好手，並與中央研究院社會學研究所二十週年慶「跨世紀學運論壇」合辦，促進跨界交流。
        //-             EN The 2014 summit took place right after the Sunflower Movement, in which digital tools boosted hundreds of thousands of protestors to take the streets. This summit focused on open parliament, participatory democracy and online collaboration in social movements. It was also the first attempt to bring cross-displinary discussion among international civic tech hackers, open source communities, NGOs, media, academic and public servants.

</template>

<script>
import { mapState } from 'vuex'
import { VueResponsiveTimeline } from '@/components'
import { SpeakerBrief, MediaQuote, KeynoteBrief, HeroImage } from '@/views'
import speakers from '@/assets/LandingPage/speakers/index.js'
import keynotes from '@/assets/LandingPage/keynotes/index.js'
import media from '@/assets/LandingPage/media/index.js'

export default {
  name: 'LandingPage',
  components: {
    HeroImage,
    SpeakerBrief,
    MediaQuote,
    KeynoteBrief,
    VueResponsiveTimeline,
  },
  data() {
    return {
      timeline: [
        {
          description: { TW: '社群貢獻者申請', EN: 'Contributor Registration' },
          time: { EN: 'Until May 30th', TW: '即日起至 5/30' },
          date: new Date(2018, 5, 30),
          href: 'https://g0v-summit2018.kktix.cc/events/contributor',
        },
        {
          description: { TW: '徵稿', EN: 'Call for Paper' },
          time: { EN: 'Until June 30th ', TW: '即日起至 6/30' },
          date: new Date(2018, 6, 30, 1),
          href: 'http://summit.g0v.TW/2018/cfp',
        },
        {
          description: { TW: '早鳥票', EN: 'Early Bird Program' },
          time: { EN: 'Until June 30th', TW: '即日起至 6/30' },
          date: new Date(2018, 6, 30, 2),
          href: 'https://g0v-summit2018.kktix.cc/events/conf',
        },
        {
          description: { TW: '公布議程', EN: 'Announce the Agenda' },
          time: { EN: 'Late July', TW: '7月下旬' },
          date: new Date(2018, 7, 25),
        },
        {
          description: { TW: '一般票', EN: 'Standard Ticket' },
          time: { EN: 'August 1st', TW: '8/1' },
          date: new Date(2018, 8, 1),
        },
        {
          description: 'g0v Summit',
          time: { EN: 'Oct 5th - 7th', TW: '10/5 - 7' },
          date: new Date(2018, 10, 5),
        },
      ],
    }
  },
  computed: {
    ...mapState(['lang']),
    keynotes() {
      return this.lang === 'TW' ? keynotes.TW : keynotes.EN
    },
    speakers() {
      return this.lang === 'TW' ? speakers.TW : speakers.EN
    },
    reports() {
      return this.lang === 'TW' ? media.TW : media.EN
    },
    timelineItems() {
      return this.timeline.map(({ time, description, date }) => ({
        title: time[this.lang] || time,
        subtitle: description[this.lang] || description,
        date,
      }))
    },
  },
}
</script>

<style lang="scss" scoped>
#timeline-wrapper {
  background-color: #e7e7e7;
  padding: 100px 1rem;
  #timeline {
    margin: auto;
  }
}
</style>
