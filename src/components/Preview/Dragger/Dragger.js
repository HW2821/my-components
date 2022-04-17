import React, { useEffect, useRef, useState } from "react"
import { Container } from "./Dragger.style"

export default function Dragger({ children, current }) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const ref = useRef()

  const handleMouse = (e) => {
    e.preventDefault()
    const downX = e.screenX
    const downY = e.screenY
    let diffX, diffY
    window.onmousemove = (e) => {
      diffX = e.screenX - downX
      diffY = e.screenY - downY
      setX(x + diffX)
      setY(y + diffY)
    }
    e.stopPropagation()
  }

  useEffect(() => {
    setX(0)
    setY(0)
  }, [current])

  return (
    <Container
      x={x}
      y={y}
      onMouseDownCapture={handleMouse}
      ref={ref}
      onMouseUp={() => {
        window.onmousemove = null
      }}
      onMouseLeave={() => {
        window.onmousemove = null
      }}
    >
      {children}
    </Container>
  )
}
