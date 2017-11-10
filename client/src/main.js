import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'

Vue.use(Vuetify)

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

new Vue({
  el: '#app',
  render: h => h(App)
})
