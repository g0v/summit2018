<template>
  <div id="hero-image-container">
    <HeroImageMobile v-if="isSmallScreen"/>
    <HeroImageDesktop v-else/>

    <span id="hero-image-text" :class="isSmallScreen && 'small-screen-text-layout'">
      <div id="slogan">開源 公民 生態系</div>
      <div id="time">2018.10.5-2018.10.7</div>
      <div id="location">
        <TW>台北</TW>
        <EN>Taipei</EN>
        <!-- TODO: Move to transportation page -->
        <!-- <TW>中央研究院 人文社會科學館</TW> -->
        <!-- <EN>Building of Humanities and Social Sciences, Academia Sinica</EN> -->
        <a target="_blank" href="https://www.google.com.tw/maps/place/Joint+Library+of+Humanities+and+Social+Sciences,+Academia+Sinica/@25.041189,121.6128625,19z/data=!4m8!1m2!2m1!1z5Lit5aSu56CU56m26Zmi5Lq65paH6aSo!3m4!1s0x3442ab46ae2ef65b:0x53ceacf197917004!8m2!3d25.041087!4d121.6117">
          <TW>地圖</TW>
          <EN>Map</EN>
        </a>
      </div>
      <CtaButton href="https://g0v-summit2018.kktix.cc/events/conf" block>
        <TW>一般票</TW>
        <EN>Registration</EN>
      </CtaButton>
      <CtaButton href="https://g0v-summit2018.kktix.cc/events/conf-donate" block>
        <TW>個人贊助功德票</TW>
        <EN>Personal Donation</EN>
      </CtaButton>
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { CtaButton } from '@/components'
import HeroImageMobile from '@/views/HeroImage/HeroImageMobile'
import HeroImageDesktop from '@/views/HeroImage/HeroImageDesktop'

export default {
  name: 'HeroImage',
  components: { HeroImageMobile, HeroImageDesktop, CtaButton },
  data() {
    return {
      vw: window.innerWidth,
    }
  },
  computed: {
    ...mapGetters(['isSmallScreen']),
  },
}
</script>

<style lang="scss" scoped>
#hero-image-container {
  position: relative;

  #hero-image-text {
    position: absolute;
    top: calc(35% - 118px);
    left: calc(21% - 145px);
    font-size: 26px;
    color: black;
    font-weight: bold;

    #slogan {
      font-size: 30px;
      color: $primary-color;
      letter-spacing: 4px;
      margin-bottom: 1.86vw; // 27px @ 1445
    }

    #time,
    #location {
      letter-spacing: 3.47px;
    }
    #time {
      padding-bottom: 0.89vw; // 13px @ 1445
    }
    #location {
      margin-bottom: 5.25vw; // 76px @ 1445
    }

    &.small-screen-text-layout {
      top: unset;
      bottom: calc(16% - 118px);
      left: 20px;
      font-size: 15px;
      #slogan {
        font-size: 20px;
        letter-spacing: 2px;
      }
      #time,
      #location {
        letter-spacing: 1.5px;
      }
    }
  }
}
</style>
