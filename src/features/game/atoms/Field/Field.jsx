export const Field = {
  name: 'Field',
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  render() {
    return (
      <div>
        {this.title}: {this.value}
      </div>
    )
  },
}
