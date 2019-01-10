import styled from 'vue-styled-components'

import { Field } from '../../atoms'

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  background-color: var(--bg-additional-block);
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
`

export const Footer = {
  name: 'Footer',
  props: {
    level: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  render() {
    return (
      <Wrapper>
        <Field title="Level" value={this.level} />
        <Field title="Score" value={this.score} />
      </Wrapper>
    )
  },
}
