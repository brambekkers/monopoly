import Vue from 'vue'
import Router from 'vue-router'
import Landing from './pages/Landing.vue'
import Game from './pages/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },

  ]
})
