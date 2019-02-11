import {
  CHANGE_STAGE,
  MOVE_SNAKE,
  CHANGE_DIRECTION,
  SET_FOOD,
  CHANGE_SCORE,
  SET_SNAKE,
  CHANGE_LEVEL,
} from './mutations'
import { GAME_STAGES, CONTROLS, DIRECTIONS } from './constants'
import { LEVEL_STEP } from '~/config'

export const START_GAME = 'START_GAME'
export const TICK = 'TICK'
export const CLICK_BUTTON = 'CLICK_BUTTON'

const checkCollision = (snake, nextCoord) =>
  snake.some(({ x, y }) => nextCoord.x === x && nextCoord.y === y)

/**
 * Generate a random number
 * @param  {number} value
 * @return {number}
 */
const generateRandomNumber = value => Math.floor(Math.random() * value)

/**
 * Compare two coords
 * @param  {Object} first coord
 * @param  {Object} second coord
 * @return {boolean}
 */
const compareCoords = (first, second) =>
  first.x === second.x && first.y === second.y

/**
 * Generate a new food coords
 * @param  {Array.<{x: number, y: number}>} snake
 * @param  {number} height
 * @param  {number} width
 * @return {{x: number, y: number}}
 */
const generateFoodCoord = (snake, height, width) => {
  let board = []

  for (let x = 0; x < width; x += 1) {
    for (let y = 0; y < height; y += 1) {
      const nextCoord = { x, y }

      if (!snake.some(snakeCoord => compareCoords(snakeCoord, nextCoord))) {
        board.push(nextCoord)
      }
    }
  }

  const randomIndex = generateRandomNumber(board.length)
  const randomCoords = board[randomIndex]

  return randomCoords
}

/**
 * Check that the snake doesn't go into itself
 * @param  {Arrya<{x: number, y: number}>} snake
 * @param  {string} direction
 * @return {boolean}
 */
const checkCorrectDirection = (snake, direction, height, width) => {
  switch (direction) {
    case DIRECTIONS.UP: {
      const y = snake[0].y - 1
      const nextY = y < 0 ? height - 1 : y

      return nextY !== snake[1].y
    }
    case DIRECTIONS.DOWN: {
      const y = snake[0].y + 1
      const nextY = y >= height ? 0 : y

      return nextY !== snake[1].y
    }
    case DIRECTIONS.LEFT: {
      const x = snake[0].x - 1
      const nextX = x < 0 ? width - 1 : x

      return nextX !== snake[1].x
    }
    case DIRECTIONS.RIGHT: {
      const x = snake[0].x + 1
      const nextX = x >= width ? 0 : x

      return nextX !== snake[1].x
    }
  }
}

export const actions = {
  [START_GAME]({ commit, state }) {
    const { snake, height, width } = state
    commit(CHANGE_SCORE, { score: 0 })
    commit(CHANGE_LEVEL, { level: 1 })
    commit(CHANGE_DIRECTION, { direction: DIRECTIONS.UP })
    commit(SET_SNAKE)
    commit(SET_FOOD, { food: generateFoodCoord(snake, height, width) })
    commit(CHANGE_STAGE, { stage: GAME_STAGES.STARTED })
  },
  [TICK]({ commit, getters, state }) {
    const nextCoord = getters.getNextCoord
    const { snake, food, height, width, score, level } = state
    const collision = checkCollision(snake, nextCoord)

    if (collision) {
      commit(CHANGE_STAGE, { stage: GAME_STAGES.GAME_OVER })
    } else {
      const eatingFoo = compareCoords(nextCoord, food)
      const offset = eatingFoo ? 0 : 1
      const newSnake = [nextCoord, ...snake.slice(0, snake.length - offset)]

      commit(MOVE_SNAKE, { snake: newSnake, nextCoord })
      if (eatingFoo) {
        const newScore = score + 1

        commit(SET_FOOD, { food: generateFoodCoord(snake, height, width) })
        commit(CHANGE_SCORE, { score: newScore })

        if (newScore % LEVEL_STEP === 0) {
          commit(CHANGE_LEVEL, { level: level + 1 })
        }
      }
    }
  },
  [CLICK_BUTTON]({ commit, state, dispatch }, { keyCode }) {
    const { stage, snake, height, width } = state

    switch (keyCode) {
      case CONTROLS.UP:
      case CONTROLS.W:
        if (checkCorrectDirection(snake, DIRECTIONS.UP, height, width)) {
          commit(CHANGE_DIRECTION, { direction: DIRECTIONS.UP })
        }
        break

      case CONTROLS.DOWN:
      case CONTROLS.S:
        if (checkCorrectDirection(snake, DIRECTIONS.DOWN, height, width)) {
          commit(CHANGE_DIRECTION, { direction: DIRECTIONS.DOWN })
        }
        break

      case CONTROLS.LEFT:
      case CONTROLS.A:
        if (checkCorrectDirection(snake, DIRECTIONS.LEFT, height, width)) {
          commit(CHANGE_DIRECTION, { direction: DIRECTIONS.LEFT })
        }
        break

      case CONTROLS.RIGHT:
      case CONTROLS.D:
        if (checkCorrectDirection(snake, DIRECTIONS.RIGHT, height, width)) {
          commit(CHANGE_DIRECTION, { direction: DIRECTIONS.RIGHT })
        }
        break

      case CONTROLS.SPANCE:
        if (
          stage === GAME_STAGES.CREATED ||
          stage === GAME_STAGES.GAME_OVER ||
          stage === GAME_STAGES.WON
        ) {
          dispatch(START_GAME)
        } else if (stage === GAME_STAGES.PAUSED) {
          commit(CHANGE_STAGE, { stage: GAME_STAGES.STARTED })
        } else if (stage === GAME_STAGES.STARTED) {
          commit(CHANGE_STAGE, { stage: GAME_STAGES.PAUSED })
        }
        break

      default:
    }
  },
}
