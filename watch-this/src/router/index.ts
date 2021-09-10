import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/trending'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/trending'
      },
      {
        path: 'trending',
        component: () => import('@/views/Trending.vue')
      },
      {
        path: 'watchlist',
        component: () => import('@/components/WatchList.vue')
      },
      {
        path: 'share',
        component: () => import('@/views/Share.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
