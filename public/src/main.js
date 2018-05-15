/* 项目启动 */
import Vue from 'vue'
import App from './App'
import router from './router' //import router from './router/index.js'
// import $ from 'jquery'
import 'lib-flexible' //自适应屏幕，类似于设置document.font-size = ..px,在webpack.base.conf.js设置require('postcss-px2rem')({remUnit: 75})即可自适应屏幕

	// import Vue from 'vue'
	// import '../static/swiper.min.css'
	// import VueAwesomeSwiper from 'vue-awesome-swiper'
	// Vue.use(VueAwesomeSwiper)


new Vue({
  router: router,
  render: h => h(App),
  //components: { firstcomponent, secondcomponent }
}).$mount('#app')
