import { storiesOf } from '@storybook/vue'

import { GameBoard } from './GameBoard'
import { CELL_FILLERS } from '~/features/game/constants'

storiesOf('GameBoard', module).add('should render a board component', () => ({
  render() {
    return (
      <GameBoard
        board={[
          [
            CELL_FILLERS.EMPTY_CELL,
            CELL_FILLERS.EMPTY_CELL,
            CELL_FILLERS.EMPTY_CELL,
          ],
          [
            CELL_FILLERS.EMPTY_CELL,
            CELL_FILLERS.EMPTY_CELL,
            CELL_FILLERS.EMPTY_CELL,
          ],
          [
            CELL_FILLERS.SNAKE_CELL,
            CELL_FILLERS.SNAKE_CELL,
            CELL_FILLERS.SNAKE_CELL,
          ],
        ]}
      />
    )
  },
}))
