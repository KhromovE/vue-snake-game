import { mapActions } from 'vuex'

import { Main } from '~/features/shared'
import { GameBoard } from '../../organisms'
import { DEFAULT_SPEED, SPEED_STEP } from '~/config'
import { GAME_STAGES } from '../../constants'
import { TICK, CLICK_BUTTON } from '../../actions'

export const Game = {
  name: 'Game',
  mounted() {
    this.setTick(this.level)
  },
  destroyed() {
    clearInterval(this.tick)
  },
  computed: {
    board() {
      return this.$store.getters.createBoard
    },
    level() {
      const { level } = this.$store.state.game
      this.setTick(level)
      return this.$store.state.game.level
    },
    stage() {
      return this.$store.state.game.stage
    },
    score() {
      return this.$store.state.game.score
    },
  },
  methods: {
    ...mapActions([TICK, CLICK_BUTTON]),
    setTick(level) {
      clearInterval(this.tick)
      this.tick = setInterval(() => {
        if (this.stage === GAME_STAGES.STARTED) {
          this[TICK]()
        }
      }, DEFAULT_SPEED - SPEED_STEP * level)
    },
  },
  render() {
    return (
      <Main>
        <GameBoard
          board={this.board}
          clickButton={this[CLICK_BUTTON]}
          level={this.level}
          score={this.score}
          stage={this.stage}
        />
      </Main>
    )
  },
}
