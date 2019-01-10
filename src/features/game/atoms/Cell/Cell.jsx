import styled from 'vue-styled-components'

import { CELL_SIZE } from '~/config'
import { CELL_FILLERS } from '../../constants'

const colorMap = {
  [CELL_FILLERS.EMPTY_CELL]: 'white',
  [CELL_FILLERS.SNAKE_CELL]: 'var(--bg-snake-cell)',
  [CELL_FILLERS.FOOD_CELL]: 'var(--bg-food-cell)',
}

export const Cell = styled('section', { type: Number })`
  border-left: 1px solid var(--border-color);
  &:last-child {
    border-right: 1px solid var(--border-color);
  }
  height: ${CELL_SIZE}px;
  width: ${CELL_SIZE}px;
  background-color: ${({ type }) => {
    return colorMap[type]
  }};
`
