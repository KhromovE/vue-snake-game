export const Controls = {
  name: 'Controls',
  props: {
    clickButton: {
      type: Function,
      required: true,
    },
  },
  created() {
    this.onKeyDown = this.onKeyDown.bind(this)
    document.addEventListener('keydown', this.onKeyDown)
  },
  destroyed() {
    document.removeEventListener('keydown', this.onKeyDown)
  },
  methods: {
    onKeyDown({ keyCode }) {
      this.clickButton({ keyCode })
    },
  },
  render() {
    return <div />
  },
}
