import React, { useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import Dragger from "../Dragger/Dragger"
import { Arrow, Container, ImgContainer, Wrapper } from "./Modal.style"
import Toolbar from "./ToolBar/Toolbar"

export default function Modal({ children, open }) {
  const [current, setCurrent] = useState(0)
  const [rotate, setRotate] = useState(0)
  const [scale, setScale] = useState(1)
  const handleClick = (dr) => {
    const maxIndex = children.length - 1
    if (dr === "l") setCurrent(current === 0 ? maxIndex : current - 1)
    else setCurrent(current === maxIndex ? 0 : current + 1)
  }

  useEffect(() => {
    setRotate(0)
    setScale(1)
  }, [current, open])

  return (
    <Wrapper>
      <CSSTransition classNames="modal" in={open} timeout={250} unmountOnExit>
        <Container open={open}>
          <Arrow left onClick={() => handleClick("l")}>
            {"<"}
          </Arrow>
          <Arrow right onClick={() => handleClick("r")}>
            {">"}
          </Arrow>
          <Dragger current={current}>
            <ImgContainer rotate={rotate} scale={scale}>
              {children[current]}
            </ImgContainer>
          </Dragger>
          <Toolbar setRotate={setRotate} rotate={rotate} scale={scale} setScale={setScale} />
        </Container>
      </CSSTransition>
    </Wrapper>
  )
}
