import styled from "styled-components/macro"
import AnimatedCard from "./components/AnimatedCard"
import AnimatedPopCard from "./components/AnimatedPopCard"
import SideNavbar from "./components/SideNavbar"
import DateRangePicker from "./components/DateRangePicker"
import MultiDropDown from "./components/MultiDropDown"
import Test from "./components/Test"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: hsl(207, 19%, 9%);
  /* background-color: whitesmoke; */
  justify-content: space-between;
`

const Button = styled.button`
  all: unset;
  user-select: none;
  margin: 5rem;
  padding: 1rem;
  color: white;
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
`

function App() {
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()
  const handleClick = (dr) => {
    const maxIndex = components.length - 1
    if (dr === "r") setIndex(index === maxIndex ? 0 : index + 1)
    else setIndex(index === 0 ? maxIndex : index - 1)
  }

  useEffect(() => {
    navigate("/" + index)
  }, [index])

  return (
    <Container>
      <Button onClick={() => handleClick("l")}>{"<"}</Button>
      <Routes>{mapToRoutes()}</Routes>
      <Button onClick={() => handleClick("r")}>{">"}</Button>
    </Container>
  )
}

const components = [
  <AnimatedCard />,
  <AnimatedPopCard />,
  <SideNavbar />,
  <DateRangePicker />,
  <MultiDropDown />,
  <Test />,
]

const mapToRoutes = () => components.map((c, i) => <Route key={i} path={"/" + i} element={c} />)

export default App
