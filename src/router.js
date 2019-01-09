import Vue from 'vue'
import Router from 'vue-router'

import { gameRoutes } from '~/features/game'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...gameRoutes],
})
