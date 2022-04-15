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
const show = css`
  animation: ${zoomIn} 0.5s ease forwards;
`
const hide = css`
  animation: ${ZoomOut} 0.5s ease forwards;
`
const Square = styled.div`
  position: absolute;
  top: 100%;
  width: 100px;
  height: 100px;
  background-color: #b75959;
  ${({ out }) => (out ? hide : show)}
`

export default function () {
  const [open, setOpen] = useState(false)
  const [out, setOut] = useState(false)
  const handleOpen = () => {
    if (open) {
      setOut(!out)
    } else setOpen(!open)
  }

  useEffect(() => {
    if (!out) return

    setTimeout(() => {
      setOpen(false)
      setOut(false)
    }, 1000)
  }, [out])

  return (
    <Container>
      {open && <Square out={out} />}
      <button onClick={handleOpen}>Click</button>
    </Container>
  )
}
