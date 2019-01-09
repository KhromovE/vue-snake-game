import styled from 'vue-styled-components'

import { Cell, Header } from '../../atoms'
import { Row, Controls } from '../../molecules'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const RowsWrapper = styled.div`
  display: inline-block;
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
  },
  render() {
    return (
      <Wrapper>
        <Header>Snake</Header>
        <RowsWrapper>
          {this.board.map((row, y) => (
            <Row key={`row-${y}`}>
              {row.map((cell, x) => (
                <Cell key={`cell-${x}-${y}`} type={cell} />
              ))}
            </Row>
          ))}
        </RowsWrapper>
        <Controls clickButton={this.clickButton} />
      </Wrapper>
    )
  },
}
