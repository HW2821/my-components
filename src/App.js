import styled from "styled-components/macro"
import AnimatedCard from "./components/AnimatedCard"
import AnimatedPopCard from "./components/AnimatedPopCard"
import SideNavbar from "./components/SideNavbar"
import DateRangePicker from "./components/DateRangePicker"
import MultiDropDown from "./components/MultiDropDown"
import Test from "./components/Test"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import TransitionWrapper from "./components/TransitionWrapper"
import { TransitionGroup } from "react-transition-group"
import { CSSTransition } from "react-transition-group"
import NavDots from "./components/TransitionWrapper/NavDots"

const Container = styled.div`
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
  position: absolute;
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
  background-color: #474f45;
  &:hover {
    background-color: #53684e;
    transform: scale(1.1);
  }
  /* top: 0; */
  bottom: 2.5rem;
  /* margin-top: auto;
  margin-bottom: auto; */
  z-index: 999;
`

const DotContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  border-radius: 25px;
  background-color: #f5f5f510;
  z-index: 0;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`

function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState("r")
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (dr) => {
    const maxIndex = components.length - 1
    if (dr === "r") setIndex(index === maxIndex ? 0 : index + 1)
    else setIndex(index === 0 ? maxIndex : index - 1)
    setDirection(dr)
  }

  useEffect(() => {
    navigate("/my-components/" + index)
  }, [index])

  return (
    <Container>
      <Button style={{ left: "10rem" }} onClick={() => handleClick("l")}>
        {"<"}
      </Button>
      <TransitionWrapper direction={direction}>
        <Routes location={location}>{mapToRoutes()}</Routes>
      </TransitionWrapper>
      <Button style={{ right: "10rem" }} onClick={() => handleClick("r")}>
        {">"}
      </Button>
      <DotContainer>
        <NavDots length={components.length} setIndex={setIndex} index={index} setDirection={setDirection} />
      </DotContainer>
    </Container>
  )
}

const components = [
  <DateRangePicker />,
  <AnimatedPopCard />,
  <MultiDropDown />,
  <SideNavbar />,
  <AnimatedCard />,
  // <Test />,
]

const mapToRoutes = () => components.map((c, i) => <Route key={i} path={"/my-components/" + i} element={c} />)

export default App
