/* 路由配置全写这里 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/* 开启debug模式 */
Vue.config.debug = true
Vue.use(VueRouter);

import Index from '../pages/index.vue'
import News from '../pages/news.vue'
import secondcomponent from '../pages/otherPages.vue'
import thirdcomponent from '../pages/otherPages2.vue'
import newPage1 from '../pages/newPage1.vue'
import personal from '../pages/personal'

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/second',
      component: secondcomponent
    },
    {
      path: '/third',
      component: thirdcomponent
    },
    {
      path:'/newPage1',
      component: newPage1
    },
    {
      path: '/personal',
      component: personal
    }
  ]
})
