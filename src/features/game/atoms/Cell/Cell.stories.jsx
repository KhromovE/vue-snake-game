import { storiesOf } from '@storybook/vue'
import styled from 'vue-styled-components'

import { Cell } from './Cell'
import { CELL_FILLEES } from '../../constants'

const Wrapper = styled.div`
  height: 90px;
  width: 90px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
`

storiesOf('Cell', module)
  .add('should render a snake cell', () => ({
    render() {
      return (
        <Wrapper>
          <Cell type={CELL_FILLEES.SNAKE_CELL} />
        </Wrapper>
      )
    },
  }))
  .add('should render a food cell', () => ({
    render() {
      return (
        <Wrapper>
          <Cell type={CELL_FILLEES.FOOD_CELL} />
        </Wrapper>
      )
    },
  }))
  .add('should render an empty cell', () => ({
    render() {
      return (
        <Wrapper>
          <Cell type={CELL_FILLEES.EMPTY_CELL} />
        </Wrapper>
      )
    },
  }))
