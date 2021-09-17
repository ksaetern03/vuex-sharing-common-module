import Vue from 'vue'
import Router from 'vue-router'

import Animals from '@/components/Animals'
import Dogs from '@/components/Dogs'
import Birds from '@/components/Birds'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'animals',
      component: Animals,
      meta: {
        title: 'Dashboard'
      },
      children: [
        {
          path: 'dogs',
          name: 'dogs',
          component: Dogs,
          meta: {
            title: 'Dogs'
          },
        },
        {
          path: 'birds',
          name: 'birds',
          component: Birds,
          meta: {
            title: 'Birds'
          },
        } 
      ]
    }
  ]
})