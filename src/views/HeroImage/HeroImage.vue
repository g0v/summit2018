<template>
  <div id="hero-image-container">
    <HeroImageMobile v-if="isSmallScreen"/>
    <HeroImageDesktop v-else/>
    <span id="hero-image-text" :class="isSmallScreen && 'small-screen-text-layout'">
      <div>
        <div id="title"><span>亞洲最大公民科技盛會</span></div>
        <div id="subtitle"><span>The Largest Civic Tech Event in Asia</span></div>
      </div>
      <div id="slogan">
        <TW>開放了？然後咧！</TW>
        <EN>what’s next after openness</EN>
      </div>
      <div id="time"><span>2018.10.5-2018.10.7</span></div>
      <div id="location">
        <span>
          <TW>台北</TW>
          <EN>Taipei</EN>
          <TW>中央研究院 人文社會科學館</TW>
          <EN>Academia Sinica</EN>
        </span>
      </div>
      <CtaButton :block="!isSmallScreen" href="https://g0v-summit2018.kktix.cc/events/conf">
        <TW>一般票</TW>
        <EN>Registration</EN>
      </CtaButton>
      <CtaButton :block="!isSmallScreen" href="https://g0v-summit2018.kktix.cc/events/conf-donate">
        <TW>個人贊助功德票</TW>
        <EN>Personal Donation</EN>
      </CtaButton>
      <CtaButton :block="!isSmallScreen" href="https://goo.gl/forms/GVruRC4YK1FySIqv2">
        <TW>媒體聯絡</TW>
        <EN>Media Contact</EN>
      </CtaButton>
    </span>
    <div id="hero-main-button" :class="isSmallScreen && 'small-screen-text-layout'">
      <MainButton href="https://g0v.hackmd.io/c/summit18">
        <TW>大會共筆</TW>
        <EN>Collaboration Notes</EN>
      </MainButton>
      <MainButton href="https://beta.hackfoldr.org/g0v-Summit-2018-unconf">
        <TW>開放工作坊</TW>
        <EN>Unconf</EN>
      </MainButton>
      <MainButton href="https://g0v.auxala.com">
        <TW>即時口譯</TW>
        <EN>Simultaneous Interpretation</EN>
      </MainButton>
      <MainButton href="https://raw.githubusercontent.com/g0v/summit2018/master/static/UDTalk-EN.pdf">
        <TW>即時字幕</TW>
        <EN>Simultaneous Multi-Subtitle</EN>
      </MainButton>
      <MainButton href="http://join.g0v.tw">
        <TW>g0v slack</TW>
        <EN>g0v slack</EN>
      </MainButton>
      <MainButton href="http://bit.ly/g0v_fightclub">
        <TW>自介區</TW>
        <EN>Fight Club</EN>
      </MainButton>
      <MainButton href="http://bit.ly/g0v_sideevent">
        <TW>Side Events</TW>
        <EN>Side Events</EN>
      </MainButton>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { CtaButton, MainButton } from '@/components'
import HeroImageMobile from '@/views/HeroImage/HeroImageMobile'
import HeroImageDesktop from '@/views/HeroImage/HeroImageDesktop'

export default {
  name: 'HeroImage',
  components: { HeroImageMobile, HeroImageDesktop, CtaButton, MainButton },
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
    top: calc(35% - 160px);
    left: calc(21% - 145px);
    font-size: 26px;
    color: black;
    font-weight: bold;

    #title,
    #subtitle,
    #slogan,
    #time,
    #location {
      span {
        background: rgba(256, 256, 256, 0.8);
      }
    }

    #subtitle {
      font-size: 0.7em;
      margin-bottom: 1.5vw;
    }

    #slogan {
      font-size: 30px;
      color: $primary-color;
      letter-spacing: 4px;
      margin-bottom: 1.86vw; // 27px @ 1445
    }

    #title,
    #subtitle,
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

  #hero-main-button {
    position: absolute;
    top: 10px;
    right: 70px;
    width: 200px;

    &.small-screen-text-layout {
      right: unset;
      left: calc(50% - 100px);
      font-size: 15px;
    }
  }
}
</style>
