import { CELL_FILLERS, DIRECTIONS } from './constants'
import { isUndefined } from '~/lib/utils'

/**
 * Create a matrix by a height and a width
 * @param  {number} height
 * @param  {number} width
 * @return {Array.<Array.<number>>}
 */
const createEmptyBoard = (height, width) =>
  Array(height)
    .fill()
    .map(() => Array(width).fill(CELL_FILLERS.EMPTY_CELL))

/**
 * Fill a matrix cells with snake coords
 * @param  {Array.<Array.<number>>} board
 * @param  {Array.<Object>} snake
 * @return {Array.<Array.<number>>}
 */
const addSnakeToBoard = (board, snake) => {
  snake.forEach(({ y, x }) => {
    board[y][x] = CELL_FILLERS.SNAKE_CELL
  })

  return board
}

/**
 * Fill a matrix cells with food coords
 * @param  {Array.<Array.<number>} board
 * @param  {number} {y
 * @param  {number} x}
 * @return {Array.<Array.<number>>}
 */
const addFoodToBoard = (board, { y, x }) => {
  if (!isUndefined(y) && !isUndefined(x)) {
    board[y][x] = CELL_FILLERS.FOOD_CELL
  }

  return board
}

/**
 * Create a matrix and fill it with a game data
 * @param  {number} {height
 * @param  {number} width
 * @param  {Array.<Object>} snake
 * @param  {Object} food}
 * @return {Array.<Array.<number>>}
 */

export const getters = {
  createBoard({ height, width, snake, food }) {
    let board = createEmptyBoard(height, width)
    board = addSnakeToBoard(board, snake)
    return addFoodToBoard(board, food)
  },
  getNextCoord({ snake, direction, height, width }) {
    let preparedCoord = {
      ...snake[0],
    }

    switch (direction) {
      case DIRECTIONS.UP: {
        const y = preparedCoord.y - 1

        preparedCoord = {
          ...preparedCoord,
          y: y < 0 ? height - 1 : y,
        }

        break
      }

      case DIRECTIONS.DOWN: {
        const y = preparedCoord.y + 1

        preparedCoord = {
          ...preparedCoord,
          y: y >= height ? 0 : y,
        }

        break
      }

      case DIRECTIONS.LEFT: {
        const x = preparedCoord.x - 1

        preparedCoord = {
          ...preparedCoord,
          x: x < 0 ? width - 1 : x,
        }

        break
      }

      case DIRECTIONS.RIGHT: {
        const x = preparedCoord.x + 1

        preparedCoord = {
          ...preparedCoord,
          x: x >= width ? 0 : x,
        }

        break
      }

      default:
    }

    return preparedCoord
  },
}
