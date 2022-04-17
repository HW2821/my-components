import styled from "styled-components/macro"

const Container = styled.div.attrs(({ x, y }) => ({
  style: {
    transform: `translate3d(${x}px,${y}px,0px)`,
  },
}))`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Container }
