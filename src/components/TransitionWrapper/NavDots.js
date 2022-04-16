import React from "react"
import styled from "styled-components/macro"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${({ current }) => (current ? "#dfdfdff3" : "#dfdfdf60")};
  border-radius: 50%;
  cursor: pointer;
  margin: 0.5rem;
  transition: 200ms;
`

export default function ({ length, setIndex, index, setDirection }) {
  const dots = Array.from({ length: length }, (v, i) => (
    <Dot
      key={i}
      current={i === index}
      onClick={() => {
        if (i > index) setDirection("r")
        else setDirection("l")
        setIndex(i)
      }}
    />
  ))

  return <Container>{dots}</Container>
}
