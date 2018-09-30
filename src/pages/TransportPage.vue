<template lang="pug">
  .transport-page
    section
      TW
        h5 地點
        p 台北市南港區中央研究院人文館
        h5 地址
        p 台北市南港區研究院路二段128號
        h5 搭乘公車
        p 搭乘 212、276、306、620、645、679、205、 小5、小1、小12 等公車至中研院站，步行入院內至人文館
        h5 搭乘捷運
        p 搭乘捷運板南線至南港站（2 號出口）換乘公車 212、270 或藍 25 至中研院站，步行入院內至人文館
        h5 搭乘火車
        p 至南港站換乘公車 212、270 或藍 25 至中研院站，步行入院內至人文館
        h5 搭乘計程車
        p 可搭乘計程車進入院區
        h5 自行開車
        p 由國道三號，南深路-中研院匝道〈16km〉出國道三號後，左轉接南深路，再左轉接舊莊路一段直走，遇到與研究院路叉路口，即可看到中研院。車輛進入院區請持證件向大門警衛室換取臨時通行證。若您於週一至週五來訪，您須停車至人文社會館 B2，並需支付停車費用（每小時 20 元）。假日換證不收費，並請停車於院內道路旁停車格。
        h5 騎摩托車
        p 院區大門右方有免費機車停車區。或是沿研究院路騎，經過大門、郵局後靠右直騎過側門，往左邊看也有一個停車場。
      EN
        h5 Venue
        p Humanities and Social Science Building (HSSB), Academia Sinica
        h5 Address
        p No. 128, Sec. 2, Academia Rd., Nankang, Taipei 115, Taiwan
        h5 By Bus
        p Take Bus 212, 276, 306, 620, 645, 679, 205, Mini Bus S5, S1, or S12 to Academica Sinica and walk to HSSB.
        h5 By MRT
        p Take MRT to Nankang Station, and transfer to Bus 212, 270, or B25 to Academica Sinica.
        h5 By Train
        p Take train to Nankang Station, and transfer to Bus 212, 270, or B25 to Academica Sinica.
        h5 By Taxi
        p Take taxi to Academica Sinica directly.
        h5 By Car
        p Get off at the exit of “Nanshen Rd.- Academia Sinica” ramp &lt;16km&gt; on Highway No. 3, turn left to Nanshen Rd., and turn left again to JiuZuang Rd., go straight till the intersection of Academia Rd.
    #embed-map
      iframe(width="100%",height="500px",frameBorder="0",src="https://umap.openstreetmap.fr/zh-tw/map/g0v-summit_16594?scaleControl=true&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&datalayersControl=true&onLoadPanel=undefined&datalayers=30448%2C30459#15/25.0495/121.6155")
      #full-screen-link: a(href="https://umap.openstreetmap.fr/map/g0v-summit_16594") 觀看全螢幕 / View full screen
      //iframe(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28918.21852898904!2d121.61407107302806!3d25.041630124767032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53ceacf197917004!2z5Lq65paH56S-5pyD56eR5a246IGv5ZCI5ZyW5pu46aSoL-S4reWkrueglOeptumZog!5e0!3m2!1szh-TW!2stw!4v1410528964629', width='600', height='450', frameborder='0', style='border:0')
</template>
<script>
export default {
  name: 'TransportPage',
}
</script>

<style lang="scss" scoped>
#full-screen-link {
  text-align: right;
  padding: 0 0.5rem 2rem;
}
</style>
