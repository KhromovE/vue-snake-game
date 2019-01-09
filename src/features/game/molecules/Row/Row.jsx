import styled from 'vue-styled-components'

export const Row = styled.section`
  border-top: 1px solid var(--border-color);
  display: flex;

  &:last-child {
    border-bottom: 1px solid var(--border-color);
  }
`
