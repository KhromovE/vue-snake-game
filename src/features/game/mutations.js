export const CHANGE_STAGE = 'CHANGE_STAGE'
export const MOVE_SNAKE = 'MOVE_SNAKE'
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION'
export const SET_FOOD = 'SET_FOOD'
export const CHANGE_SCORE = 'CHANGE_SCORE'
export const SET_SNAKE = 'SET_SNAKE'
export const CHANGE_LEVEL = 'CHANGE_LEVEL'

export const mutations = {
  [CHANGE_STAGE](state, { stage }) {
    state.stage = stage
  },
  [MOVE_SNAKE](state, { snake }) {
    state.snake = snake
  },
  [CHANGE_DIRECTION](state, { direction }) {
    state.direction = direction
  },
  [SET_FOOD](state, { food }) {
    state.food = food
  },
  [CHANGE_SCORE](state, { score }) {
    state.score = score
  },
  [SET_SNAKE](state) {
    const { height, width } = state
    const x = Math.floor(width / 2)
    const y = Math.floor(height / 2)
    state.snake = Array(3)
      .fill()
      .map((_, i) => ({ x, y: y + i }))
  },
  [CHANGE_LEVEL](state, { level }) {
    state.level = level
  },
}
