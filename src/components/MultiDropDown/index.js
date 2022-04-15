import React, { useEffect, useRef, useState } from "react"
import { ReactComponent as CaretIcon } from "./icons/caret.svg"
import styled from "styled-components/macro"
import Menu from "./Menu"
import { CSSTransition } from "react-transition-group"

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: grey;
  padding: 0.8rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #e3e2e29b;
  }

  .menu-enter {
    transform-origin: top right;
    transform: scale(0.3);
    opacity: 0;
  }
  .menu-enter-active {
    transform: none;
    opacity: 1;
    transition: 200ms ease;
  }

  .menu-exit {
    transform-origin: top right;
    opacity: 1;
  }
  .menu-exit-active {
    transform: scale(0.3);
    transition: 200ms ease;
    opacity: 0;
  }
`

const DropIcon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
    fill: white;
  }
`

const MenuContainer = styled.div``

export default function DropDown() {
  const [open, setOpen] = useState(false)
  const dropRef = useRef()

  window.onclick = (e) => !dropRef.current.contains(e.target) && open && setOpen(false)
  useEffect(() => () => (window.onclick = null), [])

  return (
    <Container onClick={() => setOpen(!open)} ref={dropRef}>
      <DropIcon>
        <CaretIcon />
      </DropIcon>
      <CSSTransition in={open} timeout={250} unmountOnExit classNames="menu">
        <Menu />
      </CSSTransition>
    </Container>
  )
}
