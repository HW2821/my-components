import styled from "styled-components/macro"
import { AnimatedCard, AnimatedPopCard, SideNavbar, DateRangePicker, MultiDropDown, Preview } from "./components"
import Test from "./components/Test"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import TransitionWrapper from "./components/TransitionWrapper"
import { TransitionGroup } from "react-transition-group"
import { CSSTransition } from "react-transition-group"
import NavDots from "./components/TransitionWrapper/NavDots"
import throttler from "./helper/throttle"
import { css } from "styled-components"

const Container = styled.div`
  overflow: hidden;
  display: flex;
  min-height: 100vh;
  width: 100vw;
  justify-content: center;
  /* align-items: center; */
  position: relative;
  background-color: hsl(207, 19%, 9%);
  /* background-color: whitesmoke; */
`

const Button = styled.button`
  all: unset;

  user-select: none;
  padding: 0.5rem;
  color: #c6c6c6;
  cursor: pointer;
  font-size: larger;
  font-weight: bold;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.2s ease;
  background-color: #f5f5f510;
  bottom: 2.5rem;
  z-index: 999;

  &:hover {
    background-color: #53684e;
    transform: scale(1.1);
  }
`

const Controls = styled.div`
  position: absolute;
  bottom: 3rem;
  border-radius: 25px;
  background-color: #f5f5f510;
  z-index: 0;
  transition: 0.2s ease;
  display: flex;
  gap: 1rem;
  &:hover {
    transform: scale(1.05);
  }
`

const components = [
  <DateRangePicker />,
  <Preview />,
  <AnimatedPopCard />,
  <MultiDropDown />,
  <SideNavbar />,
  <AnimatedCard />,
  // <Test />,
]

const mapToRoutes = () => components.map((c, i) => <Route key={i} path={"my-components/" + i} element={c} />)

function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState("r")
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (dr) =>
    throttler.fire(() => {
      const maxIndex = components.length - 1
      if (dr === "r") setIndex(index === maxIndex ? 0 : index + 1)
      else setIndex(index === 0 ? maxIndex : index - 1)
      setDirection(dr)
    })

  useEffect(() => {
    navigate("/my-components/" + index)
  }, [index])

  return (
    <Container>
      <TransitionWrapper direction={direction}>
        <Routes location={location}>{mapToRoutes()}</Routes>
      </TransitionWrapper>

      <Controls>
        <Button left onClick={() => handleClick("l")}>
          {"<"}
        </Button>
        <NavDots length={components.length} setIndex={setIndex} index={index} setDirection={setDirection} />
        <Button right onClick={() => handleClick("r")}>
          {">"}
        </Button>
      </Controls>
    </Container>
  )
}

export default App
