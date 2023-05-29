<template>
  <div class="side-widget-area">
    <div class="side-widget">
      <div class="widget-wrap">
        <div class="instagram-btn"><a href="https://instagram.com/ilsangtrip_jeju?igshid=YmMyMTA2M2Y=">
          <img :src="require(`@/assets/images/side-widget-instagram.png`)" alt="인스타그램바로가기">
        </a>
        </div>
        <div class="kakaotalk-btn">
          <a href="https://pf.kakao.com/_zQiJxj"><img :src="require(`@/assets/images/side-widget-kakao.png`)" alt="카카오톡채팅상담"></a>
        </div>
        <div class="scrollToTop-btn">
            <img id="pagetop" @click="toTop" :src="require(`@/assets/images/side-widget-scrollToTop.png`)" alt="페이지상단이동">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideWidgetPage",
  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },
  methods: {
    handleScroll: function() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
      }, 100);
    },
    toTop: function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
    },

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss">
  @import '../assets/scss/components/SideWidget.scss'
</style>