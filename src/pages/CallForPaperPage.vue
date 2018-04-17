<template lang="pug">
  #call-for-paper-page.mb-50
    .grid-y
      .cell
        .grid-x.grid-padding-x.grid-margin-x

          //- 文案區塊
          .cell.large-8
            TW
              h3 g0v 是什麼
              p g0v，又稱零時政府，已經五年了。從 2012 年憑藉一股憤怒做出《中央政府總預算視覺化》，到 318 佔領運動期間的爆炸性成長，到社群參與者進入政府、走向地方，到開放文化基金會的成立、國際交流、g0v.news、g0v 公民科技獎助金，社群由發散的去中心走向多中心的穩定發展。五年來，參與者持續以當代思維、開放、開源精神號召群眾協作，吸引各領域專業、議題倡議者，也在大大小小的黑客松，開發新工具、嘗試新型態的組織與媒體、建立新合作關係。
              h3 2018 g0v 年會
              p g0v 年會是亞洲最大的公民科技黑客年會。2018，我們希望以「生態系」的角度來細看公民科技的養分在各社群、國家的土地上長出了什麼、連結了什麼、改變了什麼、累積了什麼。2018 也是台灣的地方選舉年，地方政治會如何震盪？開放政府運動又對在地的選舉機制、文化造成了什麼影響？
              p 作為黑客社群，我們相信捲起袖子的實踐力量。我們重視進行中或已完成的專案呈現，也認知到分享失敗、醞釀想法及說故事的力量。因此，這一次 g0v 年會徵件分為「台上」及「台下」兩個主題區塊，希望已經成形的專案能藉由更精確的主題描述獲得回饋，也讓「非專案」的故事有分享、思考的空間。
              h3 徵求講者
              p 就像社群一樣，g0v 年會因為參與者的貢獻而精彩。今年，我們將致力讓這個聚會成為八百位現場參與者的開放交流平台。無論是工程師、研究者、倡議者、創作者，希望都能繼續透過科技、專業及群眾參與改變社會。我們誠摯地邀請關注以下主題的各方前來分享成果及經驗，無論過去是否有參與 g0v，都歡迎投稿。
            EN
              h3 What is g0v?
              p
                a(href="https://g0v.tw/en-US/about.html" target="_blank") The g0v community
                span , pronounced “gov-zero”, is five years old. From our first project “Central Government Budget Visualization” in 2012, to an explosive growth of the community during the 2014 occupy movement (a.k.a. Sunflower Movement), g0v contributors are now everywhere, in companies, governments, and local communities. Within five years, we have achieved many things: international exchanges have flourished with our partner Open Culture Foundation, a civic tech news platform g0v.news was born, and the Civic Tech Prototype Grant has incubated many impactful projects. The g0v community has also evolved from a decentralized network to a polycentric one that generates opportunities for open(-source) collaboration between professionals and activists. What remains the same is our doer culture —we never stop developing new tools, exploring new models of organization, experimenting on new forms of media, and creating new relationships in and through hackathons.
              h3 g0v Summit 2018
              p g0v Summit is the largest Civic Tech and hackers’ conference in Asia. This year, our theme is “ecosystem”. Please join us to examine the ecosystem of Civic Tech in the past, present and the future, both at the global and local scales. What have been grown? What have been connected? What have been changed? What have been accumulated? 2018 is also witnessing many elections around the world, including local elections in Taiwan. How will these elections affect local and regional politics? What impacts will open government and Civic Tech have on elections?
              p As a hackers’ community, we—g0v contributors—believe in the power of doing. We value ongoing or completed projects, while recognizing at the same time that failure, new and fragile ideas, and stories are equally important. Therefore, we have curated two categories of topics—“Civic Tech Projects On Stage” and “Behind the Scenes”—for you to choose from. Through this categorization, along with a more detailed description of the themes included in each topic, we hope that each project can receive better feedback and we wish to give each story an opportunity to be shared and reflected.
              h3 Calling for proposals now
              p Like our vibrant community, g0v Summit is great thanks to contributors’ efforts. This year, we strive to make the Summit an open platform for sharing and brainstorming ideas and projects. We hope that engineers and researchers, activists and creators, keep changing our society through technology, expertise, and the power of collaboration. If you have something to share that fits the topics below, we sincerely invite you to submit your proposal and to become a contributor.

            .text-center
              CtaButton(TW='馬上投稿' EN='Submit a proposal' href="https://docs.google.com/forms/d/e/1FAIpQLSeESRbF_tmRUzaAFdEcTl5vhor7thL3ahpiR3wDAJaSVUXFhw/viewform")

          //- 主題區塊
          .cell.large-12.large-order-3
            h3
              TW 我們關注的主題
              EN Topics
            .grid-x.grid-padding-x
              .topicsGroup.cell.large-7
                //-
                h4 公民科技台上 / Civic Tech Project On Stage
                .grid-y
                  .cell(v-for="(topics, category) in topicsOnStage")
                    .card
                      .card-section: h5.category {{ category }}
                      .card-section(v-for="topic in topics")
                        p.topic {{ topic }}

              .topicsGroup.cell.large-5
                //-
                h4 公民科技台下 / Behind the Scenes
                .grid-y
                  .cell(v-for="(topics, category) in topicsBehindScene")
                    .card
                      .card-section: h5.category {{ category }}
                      .card-section(v-for="topic in topics")
                        p.topic {{ topic }}

          //- 細節區塊
          .cell.large-4
            TW
              h3 徵件形式
              p 徵件形式分為下列兩種
              ul
                li 30 分鐘的專案展示或短講
                li 60 或 90 分鐘的開放討論或工作坊
              h3 徵件時間及注意事項
              p 徵件即日開始，於台灣時間 2018 年 6 月 30 日晚間 11 時 59 分截止。錄取結果將於七月下旬公佈。
              p 我們將優先接受專案成果、專案影響力、知識分享的投稿。
              p 我們將注重東亞、台灣的在地特性，並且努力朝向性別、地域平等。
              h3 旅費補助
              p 居住在台灣以外的講者，可向大會申請旅費補助與住宿。如果你自籌旅費或是已有願意提供旅費的單位，我們會將提供旅費的單位列為大會贊助者。
              p 【請注意】這是「徵求講者」的辦法，會眾報名辦法將於日後公佈。除了徵求講者以外，年會現場也會有 unconf 及閃電短講的報名。如果你覺得自己還沒準備好，或覺得設計好的形式或主題不適合你，unconf 或閃電短講也許更能符合你的需求！

            EN
              h3 Format
              p You can choose from one of these two formats:
              ul
                li A project demo or talk for 30 minutes
                li A panel discussion or workshop for 60 or 90 minutes
              h3 Timeline and other notices
              p Call for proposal starts now and ends at 11:59 pm, June 30th, 2018, Taipei Time (GMT+8). Results will be announced later July.
              p Please note that we will give priority to proposals that focus on project outcome, impact, or knowledge sharing.
              p Please note that the locality and cultural specificity of Taiwan and East Asia are very important to us. With that in mind, we aim to achieve regional and gender balance among all accepted proposals.
              h3 Travel stipend
              p If you are based outside Taiwan, you are eligible to apply for a travel stipend for transportation and accomodation. If you already have a sponsor, they will be listed as an official sponsor of g0v Summit.
              p **THIS IS A CALL FOR PROPOSAL**  Event registration will open later this year. Aside from submitting (now) a proposal to be a speaker, you will also be able to sign up for a session during the unconf and/or lightning talk during the Summit.

</template>

<script>
import { CtaButton } from '@/components'

export default {
  name: 'CallForPaperPage',
  components: { CtaButton },
  computed: {
    topicsOnStage() {
      return {
        '過去兩年新的進展？ / What’s new since last we met?': [
          '新公民科技專案，以及他們的故事及影響 / Showcasing stories and impact of fresh, new civic tech projects',
        ],
        '公民科技與他們的產地 / Civic tech and where to find them': [
          '亞洲及「開發中國家」的公民科技  / Civic tech in Asia and the “Global South”',
          '跨越邊界的公民科技 / Civic tech projects across borders',
          '跨區專案的分析比較 / Cross-regional projects analysis & comparison',
        ],
        '選舉、政府、民主行不行 / Make election, government & democracy work again': [
          '公平選舉及投票系統 / Facilitating fair elections and voting systems',
          '監督政府 / Government oversight: transparency and accountability for our politics',
          '公僕黑客 / Public servant are hackers too',
          '企業及政治人物金流 / Following the money of corporations and politicians',
          '線上線下審議及決策工具 / On- & offline deliberation and decision-making tools and mechanism',
          '草根、參與式民主 / Grassroots participatory democracy',
        ],
        '媒體新不新 / Mass media and information': [
          '為真相而戰 / Combating disinformation',
          '打擊仇恨及騷擾言論 / Countering hate speech and online harassment',
          '社交媒體成癮 / Social platform addiction by design',
          '當下新聞媒體：形式、方法、組織 / Journalism now: forms, methodologies & organization',
        ],
        '行動與戰力 / Activism and mobilization': [
          '消失中的公民空間 / Tackling the shrinking of civic space',
          '群眾的力量與限制 / Power and limits of crowdsourcing',
          '政府、企業及公民社會的協作 / Collaboration between government, corporations and civil society',
        ],
        '涵容的未來 / Bridging divides, healing world, invision future': [
          '污染、替代能源、環境永續 / Pollution, alternative energy & environmental sustainability',
          '人權及數位人權之戰 / Fighting for human rights and digital rights',
          '性別平權、酷兒人權 / Gender equality and LGBTQ rights',
          '種族、原住民、（沒有）國族、國家衝突 / Race, native people, (without) nationality, national conflict',
          '打擊極端主義 / Combating extremism',
          '災難資訊、救援及協助 / Disaster information, rescue & relief',
          '身體限制、健康照顧及福利 / Disability, healthcare & welfare',
          '教育、自學與共學 / Education, autodidacticism, learning with others',
          '公民科學 / Citizen science',
          '社會變革、想像未來的藝術及設計 / Art & design for social change & reimagining the future',
        ],
      }
    },
    topicsBehindScene() {
      return {
        '說故事 / Group talk': [
          '為什麼失敗？ / Why didn’t it work? Lessons from our failures',
          '說一個公民、科技的故事 / Civic & tech storytelling',
          '洗白開放的個案研究 / Open-washing case studies',
          '開放政府政策的故事 / Stories of open government policies',
        ],
        '玩實作 / Do it with others': [
          '中不中心化？建構社群及治理模型 / Centralized or decentralized? Community-building and governance models',
          '公民科技生態系及永續發展：資金來源及基礎建設 / Civic Tech ecosystem and sustainability: funding models and infrastructure for civic tech organizations',
          '相關技術分享、動手工作坊 / Related skill-sharing and hands-on workshops',
        ],
        '徵求伙伴 / Build new connections': [
          '徵求新的協作 / Calling for new collaboration',
          '啟動新的跨國民主交流計畫 / Initiating new transnational exchange for democracy',
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#call-for-paper-page {
  padding-right: 1em;
  padding-left: 1em;
  // 手機、桌面
  @include breakpoint(medium) {
    main {
      .tw,
      .en {
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}
#topic-section {
  @include xy-cell-block(true);
}
h3 {
  margin-top: 2.5rem;
}
.category {
  display: inline;
  padding: 0.3em;
  background: rgba($primary-color, 0.75);
}
.topic {
  &:hover {
    opacity: 0.8;
  }
}
</style>
