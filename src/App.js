import styled from "styled-components/macro"
import AnimatedCard from "./components/AnimatedCard"
import AnimatedPopCard from "./components/AnimatedPopCard"
import SideNavbar from "./components/SideNavbar"
import DateRangePicker from "./components/DateRangePicker"
import MultiDropDown from "./components/MultiDropDown"
import Test from "./components/Test"

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
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
      <MultiDropDown />
      {/* <Test /> */}
    </Container>
  )
}

export default App
