import { GAME_STAGES, DIRECTIONS } from './constants'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

export const game = {
  state: {
    snake: [],
    food: {},
    level: 1,
    height: 20,
    width: 23,
    stage: GAME_STAGES.CREATED,
    direction: DIRECTIONS.UP,
    score: 0,
  },
  getters,
  mutations,
  actions,
}
