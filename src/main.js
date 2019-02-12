import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/router'
import YmapPlugin from 'vue-yandex-maps'
const options = { // you may define your apiKey, lang and version or skip this.
  apiKey: 'xxx', // '' by default
  lang: 'ru_RU', // 'ru_RU' by default
  version: '2.1' // '2.1' by default
}
Vue.use(YmapPlugin, options)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
