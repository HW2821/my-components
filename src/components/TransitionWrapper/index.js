import React from "react"
import { useLocation } from "react-router"
import { TransitionGroup } from "react-transition-group"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components/macro"

const Container = styled.div`
  width: 100vw;
  height: 85vh;
  z-index: 1000;
  .group {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right-enter {
    cursor: not-allowed;
    position: absolute;
    transform: translateX(100vw);
  }
  .right-enter-active {
    transform: translateX(0);
    transition: 1000ms ease-out;
    cursor: auto;
  }
  .right-exit {
    transform: translateX(0);
  }
  .right-exit-active {
    transform: translateX(-100vw);
    transition: 1000ms ease-out;
  }

  .left-enter {
    position: absolute;
    transform: translateX(-100vw);
  }
  .left-enter-active {
    transform: translateX(0);
    transition: 1000ms ease-out;
  }
  .left-exit {
    transform: translateX(0);
  }
  .left-exit-active {
    transform: translateX(100vw);
    transition: 1000ms ease-out;
  }
`

export default function ({ children, direction }) {
  const location = useLocation()

  return (
    <Container>
      <TransitionGroup className="group">
        <CSSTransition classNames={direction === "r" ? "right" : "left"} key={location.key} timeout={1000}>
          {children}
        </CSSTransition>
      </TransitionGroup>
    </Container>
  )
}
