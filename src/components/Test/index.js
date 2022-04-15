import { useEffect, useState } from "react"
import { Transition } from "react-transition-group"
import styled from "styled-components"
import { css } from "styled-components"
import { keyframes } from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const zoomIn = keyframes`
    from {
        transform: scale(0);
    } to {
        transform: scale(1);
    }
`
const ZoomOut = keyframes`
    from {
        transform: scale(1);
    } to {
        transform: scale(0.5);
    }

`

const Square = styled.div`
  position: absolute;
  top: 100%;
  width: 100px;
  height: 100px;
  background-color: #b75959;
`

export default function Test() {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("123")
  const handleClick = () => {
    setText(text + "1")
    setText("")
  }

  return (
    <Container>
      <Text text={text} />
      <button onClick={handleClick}>Click</button>
    </Container>
  )
}

const Text = ({ text }) => {
  return <div style={{ color: "white" }}>{text}</div>
}
