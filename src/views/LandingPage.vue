<template lang="pug">
  #LandingPage.landing-page.grid-x.align-center
    HeroImage.cell
    #content.grid-x.grid-padding-x.align-center

      //- 贊助我們
      section#cta.cell.text-center
        a.button.large(href="#sponsor-us")
          TW 成為贊助夥伴
          EN Become a Partner

      //- 社群簡介
      section#intro.cell
        //- 社群簡介
        TW
          h3 社群簡介
          p 自 2012 年以來，公民科技運動風起雲湧，以開放透明、公民參與為號召的 g0v 台灣零時政府社群號召了第一場活動，以「寫程式改造社會」為口號，從此開始公民科技之火開始延燒，至今未歇。
          p 五年多來，在上千位參與者集體的貢獻下，透過一場場黑客松，打造出多項以開放資料、開放政府為精神的資訊平台，以縮短數位落差為初衷，降低公民參與門檻，使得議題審議可立基在具體事實，提升理性討論公共事務的意識。這場開放資料、開放政府運動，g0v 社群也打破了民間與政府對抗的傳統運動路線，開創出台灣公民社會與政府互動的新模式。
        EN
          h3 About g0v
          p g0v.tw is a civic tech community in Taiwan since 2012 with deep open-source roots. With 1,000+ contributors through 40+ hackathons, it is recognized as one of the largest group in the global civic tech community. The community focuses on building tools for better information disclosure, engagement, and online democracy, advocating government transparency through the power of information technology.
          p Through the years, the g0v community stimulated the progress of open government, open data, civic participation, and new media in Taiwan. Today the open community is still one of the main driving force for grass root civic movements, through interdisciplinary collaboration.

        //- 雙年會簡介
        TW
          h3 雙年會簡介
          p g0v 國際雙年會兩年舉辦一次，關注開放政府、開源協作、公民參與等面向，是國際開放政府社群的焦點活動，過去兩屆吸引多達十九國講者投稿。雙年會全部由社群參與者志願籌辦，議程也秉持開放協作精神，全部議程皆有口譯、文字記錄和直播。議程除了大會籌辦，也開放完整時段的開放工作坊（Unconference）由參與者提案決定議程內容，以演講、討論、自由對話等形式創造新的協作空間。閉幕前自由報名的全場閃電講更是開源社群傳統，以開放分享的精神貫穿年會。
        EN
          h3 About g0v summit
          p g0v.tw is a civic tech community in Taiwan since 2012 with deep open-source roots. With 1,000+ contributors through 40+ hackathons, it is recognized as one of the largest group in the global civic tech community. The community focuses on building tools for better information disclosure, engagement, and online democracy, advocating government transparency through the power of information technology.
          p Through the years, the g0v community stimulated the progress of open government, open data, civic participation, and new media in Taiwan. Today the open community is still one of the main driving force for grass root civic movements, through interdisciplinary collaboration.

        //- 今年主題
        //- h3
        //-   TW 開源 公民 生態系
        //-   EN Open-source, Citizenship, Ecosystem
        //- P
        //-   TW 假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假假的 假的 假的 假
        //-   EN Labore dolor incididunt id eu do. Cillum veniam incididunt ad culpa. Mollit tempor officia incididunt est velit ad labore exercitation elit. Laborum excepteur cillum voluptate amet elit. Fugiat in ex ea ad dolor eu consequat irure amet fugiat duis aliqua. Ut deserunt voluptate ea quis veniam veniam consequat irure et sunt cillum sit non adipisicing.

      //- 贊助年會
      section#sponsor-us.cell.medium-8
        ScrollToTack(tackClass="tack-sponsor-us")
          .callout.text-center(data-closable="slide-out-right")
            h3
              TW 成為贊助夥伴
              EN Become a Partner
            p
              TW 這邊會放一些關於贊助年會的說明文字，所以這是一段關於贊助年會的說明文字，所以這是一段關於贊助年會的說明文字。
              EN Tempor eiusmod velit deserunt exercitation excepteur aliqua irure laborum aliquip aliquip est consectetur. exercitation excepteur aliqua irure laborum aliqu.
            p: UnderlineLink#mailto(:href="`mailto:g0v-summit-partner-2018@googlegroups.com?subject=${encodeURIComponent('成為 g0v summit 2018 贊助夥伴')}`" target="_blank")
              strong g0v-summit-partner-2018@googlegroups.com
            a.button.hollow
              TW 下載企劃書
              EN Download Proposal
            button.close-button(type="button" data-close aria-label="Dismiss alert")
              span(aria-hidden="true") &times;

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
              p {{ speaker.desp }}

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
              p 2016 年則以「拆政府原地重建」作為主題。時值新舊政府交接，台灣在開放資料評比中排名世界第一，多位社群參與者也進入政府擔任顧問、幕僚等職，在拆解傳統政治模式之後，討論如何以科技建立開放的公私協作新模式。這次有超過千位參與者，與來自 17 國的全球公民科技代表，分享歐洲的新興政治經驗、亞洲推展數位科技到傳統公民團體的經驗、各國數位進入政府搭建溝通橋樑的改造經驗等。
          .grid-x.grid-padding-x
            .cell.medium-4
              a(href="http://summit.g0v.tw/2014/", target="_blank")
                img(src="../assets/img/summit2014.png").thumbnail
            .cell.medium-8
              h5
                TW 2014 啥米零時政府
                EN 2014 g0v summit
              p 2014 年的首次年會緊接在 318 公民運動之後，聚焦開放國會、參與式民主、網路協作的社會運動。有來自八國長期關注開放政府運動的國際講者，以及國內政府公部門、NGO、媒體、資訊好手，並與中央研究院社會學研究所二十週年慶「跨世紀學運論壇」合辦，促進跨界交流。



</template>

<script>
import { HeroImage } from '@/components'

export default {
  name: 'landingPage',
  data () {
    return {
      speakers: [
        { name: '王小明', title: '開源運動者', imgUrl: 'http://placehold.it/100x100', desp: '假的假的假的假的假的假的假的假的 假的假的假的假的假的假的假的假 的假的假的假的假的假的假的假的假的假的' },
        { name: '陳小華', title: '公民記者', imgUrl: 'http://placehold.it/100x100', desp: '假的假的假的假的假的假的假的假的 假的假的假的假的假的假的假的假 的假的假的假的假的假的假的假的假的假的' },
        { name: '張小惠', title: '公民黑客', imgUrl: 'http://placehold.it/100x100', desp: '假的假的假的假的假的假的假的假的 假的假的假的假的假的假的假的假 的假的假的假的假的假的假的假的假的假的' }
      ],
      reports: [
        { name: 'Waag Society', title: '報導標題假的假的假的 假的假的假的假的假的', iconUrl: 'http://placehold.it/100x100', photoUrl: 'http://placehold.it/300x185', quote: '假的假的假的假的假的假的假的假的 假的假的假的假的假的假的假的假 的假的假的假的假的假的假的假的假的假的假的假的假的假的假的' },
        { name: 'Taipei Times', title: '報導標題假的假的假的 假的假的假的假的假的', iconUrl: 'http://placehold.it/100x100', photoUrl: 'http://placehold.it/300x185', quote: '假的假的假的假的假的假的假的假的 假的假的假的假的假的假的假的假 的假的假的假的假的假的假的假的假的假的假的假的假的假的假的' },
        { name: 'Taiwan Mag', title: '報導標題假的假的假的 假的假的假的假的假的', iconUrl: 'http://placehold.it/100x100', photoUrl: 'http://placehold.it/300x185', quote: '假的假的假的假的假的假的假的假的 假的假的假的假的假的假的假的假 的假的假的假的假的假的假的假的假的假的假的假的假的假的假的' }
      ]
    }
  },
  components: { HeroImage }
}
</script>

<style lang="scss" scoped>
#content {
  #cta {}
  #intro {}
  #sponsor-us {
    padding-top: 100px;
    .callout {
      background-color: $primary-color;
      // color: $white;
      #mailto {
        color: $white;
      }
      .button {
        background-color: $white;
      }
    }
    padding-bottom: 50px;
  }
  #hightlights {}
  #speakers {
    .round { border-radius: 50%; }
  }
  #reports {}
  #previous-events {}
}

.tack-sponsor-us {
  @include breakpoint(medium) {
    position: fixed;
    z-index: 1;
    right: 20px;
    bottom: 20px;
    width: 500px;
  }
}
</style>