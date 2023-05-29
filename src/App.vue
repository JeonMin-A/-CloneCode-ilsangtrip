<template>
  
  <Nav /> 
  <Main :instaFeed="instaFeed" /> 
  <Footer /> 
  <SideWidget /> 
</template>

<script>

// pages
import Main from './pages/Main.vue'
// import Main from './pages/Main.vue'

// components
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import SideWidget from './components/SideWidget.vue'


import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      count : 6,
      accessToken: '',
      instaFeed : []
    }
  },
  components: {
    Nav,
    Main,
    Footer,
    SideWidget
  },
  created(){
    this.accessToken = process.env.VUE_APP_API_KEY
      axios.get(`https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${this.count}&access_token=${this.accessToken}`).then((res)=>{
      
      this.instaFeed = res.data.data;
    })
  }

}
</script>

<style>

</style>
