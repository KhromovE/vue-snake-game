import { mapActions } from 'vuex'

import { Main } from '~/features/shared'
import { GameBoard } from '../../organisms'
import { DEFAULT_SPEED } from '~/config'
import { GAME_STAGES } from '../../constants'
import { START_GAME, TICK, CLICK_BUTTON } from '../../actions'

export const Game = {
  name: 'Game',
  created() {
    if (this.stage === GAME_STAGES.CREATED) {
      this[START_GAME]()
    }
  },
  mounted() {
    this.tick = setInterval(() => {
      if (this.stage === GAME_STAGES.STARTED) {
        this[TICK]()
      }
    }, DEFAULT_SPEED / this.level)
  },
  destroyed() {
    clearInterval(this.tick)
  },
  computed: {
    board() {
      return this.$store.getters.createBoard
    },
    level() {
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
    ...mapActions([START_GAME, TICK, CLICK_BUTTON]),
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
