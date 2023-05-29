<template>
    <!--  
        전체 네비 영역
    -->
    <div class="nav">
        
        <div class="nav-wrap">
            <div class="nav-container">
                <!-- 메뉴 영역 -->
                <div class="nav-menu">
                    <ul>
                        <li v-for="(e, index) in NavListChange" :key="e" @mouseover="KoreaTrans(index)" @mouseout="EnglishTrans(index)">{{ e }}</li>
                    </ul>
                </div>
                <!-- 로고 영역 -->
                <div class="logo">
                    <a href="#"><img :src="require(`@/assets/images/logo.png`)" alt="일상과여행사이"></a>
                </div>
                <!-- 유저 메뉴 -->
                <div class="user-menu">
                    <ul>
                        <li class="signIn">로그인</li>
                        <li class="myPage">마이페이지</li>
                        <li @click="function(){
                            if(isModal === true){
                                isModal = false
                            }else{
                                isModal = true
                            }
                            }" class="modal-btn"><i class="zmdi zmdi-format-align-right zmdi-hc-2x" ></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    <!-- 모달 창 -->
    <div v-if="isModal === true"  class="overlay">
        <div  class="modal">
            <div class="modal-wrap">
                <p class="modal-title">menu</p>
                <ul>
                    <li class="modal-menu" v-for="e in ModalList" :key="e">{{ e }}</li>
                </ul>
                <p class="work-hour">work hour</p>
                <p class="work-time" v-for="e in WorkHour" :key="e">{{ e }}</p>
                <button class="close-btn" @click="function(){
                        if(isModal === true){
                            isModal = false
                        }else{
                            isModal = true
                        }
                    }"><i class="zmdi zmdi-close"></i></button>
                    <!-- <i class="zmdi zmdi-close"></i> -->
            </div>
        </div>
    </div>

    <template >
        <div>

        </div>
        <span>

        </span>
    </template>
</template>
<script>

import NavData from '../assets/json/Data.json'

import '../assets/css/material-design-iconic-font.css'

export default {
    name: "NavPage",
    data() {
        return {
            NavList: NavData,
            isModal: 0,
            WorkHour: ["MON - FRI 9:30 - 17:30", "LUNCH 12:00 - 13:00", "토요일 / 일요일 / 공휴일휴무"]
        }
    },
    computed: {
        NavListChange(){
            return this.NavList[0].Nav
        },
        ModalList(){
            return this.NavList[1].Nav
        }
    },
    methods: {
        KoreaTrans(index){
            document.querySelectorAll(".nav-menu > ul > li")[index].innerText = this.NavList[2].Nav[index]
        },
        EnglishTrans(index){
            document.querySelectorAll(".nav-menu > ul > li")[index].innerText = this.NavList[0].Nav[index]
        }
    },
}
</script>
<style lang="scss">
    @import '../assets/scss/components/Nav.scss'
</style>