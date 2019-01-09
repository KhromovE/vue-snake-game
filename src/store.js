import Vue from 'vue'
import Vuex from 'vuex'
import { game } from '~/features/game'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    game,
  },
})
