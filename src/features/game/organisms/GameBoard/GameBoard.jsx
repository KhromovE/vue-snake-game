import styled from 'vue-styled-components'

import { Cell, Header } from '../../atoms'
import { Row, Controls, Footer, ScreenLocker } from '../../molecules'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const RowsWrapper = styled.div`
  display: inline-block;
  position: relative;
`

export const GameBoard = {
  name: 'GameBoard',
  props: {
    board: {
      type: Array,
      required: true,
    },
    clickButton: {
      type: Function,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    stage: {
      type: String,
      required: true,
    },
  },
  render() {
    return (
      <Wrapper>
        <Header>Snake Game</Header>
        <RowsWrapper>
          <ScreenLocker stage={this.stage} />
          {this.board.map((row, y) => (
            <Row key={`row-${y}`}>
              {row.map((cell, x) => (
                <Cell key={`cell-${x}-${y}`} type={cell} />
              ))}
            </Row>
          ))}
        </RowsWrapper>
        <Footer level={this.level} score={this.score} />
        <Controls clickButton={this.clickButton} />
      </Wrapper>
    )
  },
}
