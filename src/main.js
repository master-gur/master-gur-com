import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/router'
import YmapPlugin from 'vue-yandex-maps'
const options = { // you may define your apiKey, lang and version or skip this.
  apiKey: '67dda79c-7f77-40f9-bd71-99ff6965a915', // '' by default
  lang: 'ru_RU', // 'ru_RU' by default
  version: '2.1' // '2.1' by default
}
var SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);
Vue.use(YmapPlugin, options)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
