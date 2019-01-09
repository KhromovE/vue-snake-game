import { storiesOf } from '@storybook/vue'

import { GameBoard } from './GameBoard'
import { CELL_FILLEES } from '~/features/game/constants'

storiesOf('GameBoard', module).add('should render a board component', () => ({
  render() {
    return (
      <GameBoard
        board={[
          [
            CELL_FILLEES.EMPTY_CELL,
            CELL_FILLEES.EMPTY_CELL,
            CELL_FILLEES.EMPTY_CELL,
          ],
          [
            CELL_FILLEES.EMPTY_CELL,
            CELL_FILLEES.EMPTY_CELL,
            CELL_FILLEES.EMPTY_CELL,
          ],
          [
            CELL_FILLEES.SNAKE_CELL,
            CELL_FILLEES.SNAKE_CELL,
            CELL_FILLEES.SNAKE_CELL,
          ],
        ]}
      />
    )
  },
}))
