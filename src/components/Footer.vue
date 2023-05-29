<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="left-area mt-10">
        <!-- 로고 영역 -->
        <img :src="require(`@/assets/images/footer_logo.png`)" alt="일상과 여행 사이">
        <!-- 텍스트 영역 -->
        <ul>
          <p class="company">더블유엘비컴퍼니 <span>| 대표: 이지연 ADMIN</span></p>
          <address>주소: 제주특별자치도 제주시 관덕로 15길 23 (재) 여성기업종합지원센터 405호</address>
          <p class="businessNumber">사업자등록번호: 656-44-00919<span>|</span></p>
          <p>통신판매신고번호: 제2023-제주이도1-0002호</p>
          <p>개인정보 관리 책임자: 이지연</p>
          <div class="text-wrap">
            <p>이용약관</p>
            <p>개인정보처리방침</p>
          </div>
          <p>자사는 통신판매중개자로서 중개하는 거래에 대해여 책임을 부담하지 않습니다.</p>
        </ul>
      </div>
      <div class="right-area">
        <p>고객센터 C/S</p>
        <p>이메일: ilsangtrip@naver.com</p>
        <p>대표 번호: 010-8675-1423</p>
        <p>채팅상담: 카카오톡 채널 일상과 여행 사이</p>
        <p>업무시간: 평일 9:30 ~ 17:30 Break time : 12:00 ~ 13:00 </p>
        <p>Copyright ⓒWLB컴퍼니 | Design & Hosting by 보구정제주</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage"
}
</script>

<style lang="scss">
  @import '../assets/scss/components/Footer.scss'
</style>