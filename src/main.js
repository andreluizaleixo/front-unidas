import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/style.css"


// import axios from 'axios'
//
// axios.defaults.baseURL = "https://hml-unidaspro-api.unidas.com.br/api/v1"
createApp(App).use(store).use(router).mount('#app')
