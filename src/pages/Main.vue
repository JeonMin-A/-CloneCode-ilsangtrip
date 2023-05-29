<template>
    <!-- 
            상단 타이틀 스와이퍼 영역     
        -->
    <div class="swiper-container">
        <div class="swiper-wrap">
            <swiper class="mySwiper" :modules="Modules" :autoplay="{delat:4000}" :slides-per-view="1" :space-between="10" :loop="true" :pagination="{pagination: 'true', clickable: true,}" :effect="'fade'">
                <swiper-slide class="Swiper-slide" v-for="(e, index) in 3" :key="index">
                    <img :src="require(`@/assets/images/title_${index+1}.png`)" :alt="e">
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <!-- 
            웰 메이트 프로그램 영역 
        -->
        <div class="middle-aria">
        <!-- 텍스트 영역 -->
        <h2>일상 탐험가를 위한</h2>
        <h2>웰 메이트의 프로그램을 만나보세요</h2>
        <div class="text-wrap">
            <p v-for="e in ContentTxt" :key="e">{{ e }}</p>
        </div>
        <!-- 이미지 스와이퍼 영역 -->
        <div class="swiper-container2">
            <div class="swiper-wrap2">
                <swiper class="mySwiper2" :loop="true" :autoplay="{delat:4000}" :slidesPerView="4" :spaceBetween="10" :navigation="true" :pagination="{clickable: true,}" :modules="Modules"> 
                    <swiper-slide class="Swiper-slide2" v-for="(e, index) in 4" :key="index">
                        <img :src="require(`@/assets/images/swiper_img_${index+1}.jpg`)" :alt="e">
                        <h5>{{ SwiperTxt[index] }}</h5>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!-- 텍스트 트랙 애니메이션 -->
        <div class="animated-title">
            <div class="track">
                <div class="content">
                    <img :src="require(`@/assets/images/star.png`)" alt="일상과 여행 사이">&nbsp;나를 발견하는 일상 탐험, '일상과 여행 사이'<img :src="require(`@/assets/images/star.png`)" alt="일상과 여행 사이">&nbsp;나를 발견하는 일상 탐험, '일상과 여행 사이'<img :src="require(`@/assets/images/star.png`)" alt="일상과 여행 사이">&nbsp;나를 발견하는 일상 탐험, '일상과 여행 사이'<img :src="require(`@/assets/images/star.png`)" alt="일상과 여행 사이">&nbsp;나를 발견하는 일상 탐험, '일상과 여행 사이'<img :src="require(`@/assets/images/star.png`)" alt="일상과 여행 사이">&nbsp;나를 발견하는 일상 탐험, '일상과 여행 사이'<img :src="require(`@/assets/images/star.png`)" alt="일상과 여행 사이">&nbsp;나를 발견하는 일상 탐험, '일상과 여행 사이'<img :src="require(`@/assets/images/star.png`)" alt="일상과 여행 사이">&nbsp;나를 발견하는 일상 탐험, '일상과 여행 사이'<img :src="require(`@/assets/images/star.png`)" alt="일상과 여행 사이">&nbsp;나를 발견하는 일상 탐험, '일상과 여행 사이'<img :src="require(`@/assets/images/star.png`)" alt="일상과 여행 사이">&nbsp;나를 발견하는 일상 탐험, '일상과 여행 사이'<img :src="require(`@/assets/images/star.png`)" alt="일상과 여행 사이">&nbsp;나를 발견하는 일상 탐험, '일상과 여행 사이'
                </div>
            </div>
        </div>
        <!-- 
            인스타 피드 스와이퍼 영역 
        -->
        
        <div class="swiper-container3">
            <!-- 텍스트 영역 -->
            <h2>Instagram</h2>
            <p>@ilsang_jeju</p>
            <!-- 이미지 스와이퍼 영역 -->
            <div class="swiper-container3">
            <div class="swiper-wrap3">
                <swiper class="mySwiper3" :spaceBetween="20" :navigation="true" :slidesPerView="3" :modules="Modules" :loop="true" :autoplay="{delat:4000}" > 
                    <Swiper-slide class="Swiper-slide3" v-for="e in instaFeed" :key="e">
                        <a :href="e.permalink" target="_blank">
                            <img :src="e.media_url" :alt="e.caption" style="width:100%"/>
                        </a>
                            
                    </Swiper-slide>
                </swiper>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>
import MainData from '../assets/json/Data.json'

// `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${props.count}&access_token=${props.accessToken}`



// import InstaFeed from '../js/instafeed.min.js'

// 슬라이드 스와이퍼
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';

export default {
    name: "MainPage",
    data() {
        return {
            MainImgData: MainData,
            Modules: [EffectFade, Pagination, Autoplay, Navigation],
            ContentTxt: ["#Dailyjoy", "#Weeklydelight", "#Monthlyhappiness"],
            SwiperTxt: ["[웰니스 클럽] 컬러로 탐험하는 나의 마음", "[일상 탐험] 썬데이 뮤직 클럽", "[일상 탐험] 나만의 제주 구좌 풍경을 담는 판화 클래스", "[일상 탐험] 빠우사 컬러요가 클래스"],
            
        }
    },
    props:{
        instaFeed: Array
    },
    components: {
        Swiper,
        SwiperSlide
    },
    mounted(){

    },

}
</script>

<style lang="scss">
@import '../assets/scss/pages/Main.scss'
</style>