import React, { useContext } from "react"
import { Container, Icon } from "./Toolbar.style"
import {
  AiOutlineRotateLeft,
  AiOutlineRotateRight,
  AiOutlineClose,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
} from "react-icons/ai"

import { PreviewContext } from "../../PreviewGroup/PreviewGroup"

export default function Toolbar({ setRotate, rotate, scale, setScale }) {
  const { setOpen } = useContext(PreviewContext)

  const handleRotate = (dr) => {
    if (dr === "l") setRotate(rotate - 90)
    else setRotate(rotate + 90)
  }
  const handleScale = (dr) => {
    let next
    if (dr === "in") {
      next = scale * 1.5
      setScale(next > 5 ? 5 : next)
    } else {
      next = scale * 0.5
      setScale(next < 1 ? 1 : next)
    }
  }

  return (
    <Container>
      <Icon onClick={() => handleRotate("l")}>
        <AiOutlineRotateLeft />
      </Icon>
      <Icon onClick={() => handleRotate("r")}>
        <AiOutlineRotateRight />
      </Icon>
      <Icon onClick={() => handleScale("out")} disable={scale === 1}>
        <AiOutlineZoomOut />
      </Icon>
      <Icon onClick={() => handleScale("in")} disable={scale === 5}>
        <AiOutlineZoomIn />
      </Icon>
      <Icon onClick={() => setOpen(false)}>
        <AiOutlineClose />
      </Icon>
    </Container>
  )
}
