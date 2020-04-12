// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 不要忘记引入css文件
import router from './router'

// 适用vue插件
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // render:(h)=>h(app)
  components: { App },
  template: '<App/>'
})
