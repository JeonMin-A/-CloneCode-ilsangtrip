import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/scss/index.scss';
import router from './router'
import InstagramFeed from "vue3-instagram-feed";
import "vue3-instagram-feed/dist/style.css";

createApp(App).use(InstagramFeed).use(router).mount('#app')
