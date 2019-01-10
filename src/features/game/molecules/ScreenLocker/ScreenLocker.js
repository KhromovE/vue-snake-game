import styled from 'vue-styled-components'

import { GAME_STAGES } from '../../constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  background-color: rgba(255, 255, 255, 0.7);
`

const Title = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Addon = styled.span`
  font-size: 20px;
  text-align: center;
`

export const ScreenLocker = {
  name: 'ScreenLocker',
  props: {
    stage: {
      type: String,
      required: true,
    },
  },
  computed: {
    getData() {
      switch (this.stage) {
        case GAME_STAGES.CREATED:
          return {
            title: 'NEW GAME',
            addon: 'Press <space> for start',
          }
        case GAME_STAGES.GAME_OVER:
          return {
            title: 'GAME OVER',
            addon: 'Press <space> to start a new game',
          }
        case GAME_STAGES.PAUSED:
          return {
            title: 'GAME PAUSED',
            addon: 'Press <space> for resume',
          }
        case GAME_STAGES.WON:
          return {
            title: 'YOU WON',
            addon: 'Press <space> to start a new game',
          }
      }
    },
  },
  render() {
    if (this.stage === GAME_STAGES.STARTED) {
      return null
    }

    const { title, addon } = this.getData

    return (
      <Wrapper>
        <Title>{title}</Title>
        <Addon>{addon}</Addon>
      </Wrapper>
    )
  },
}
