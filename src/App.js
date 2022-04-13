import styled from "styled-components"
import AnimatedCard from "./components/AnimatedCard"
import AnimatedPopCard from "./components/AnimatedPopCard"
import SideNavbar from "./components/SideNavbar"
import DateRangePicker from "./components/DateRangePicker"

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  place-items: center;
  background-color: hsl(207, 19%, 9%);
  /* background-color: whitesmoke; */
`

function App() {
  return (
    <Container>
      {/* {<AnimatedCard />} */}
      {/* <AnimatedPopCard /> */}
      {/* <SideNavbar /> */}
      {/* <DateRangePicker /> */}
    </Container>
  )
}

export default App
