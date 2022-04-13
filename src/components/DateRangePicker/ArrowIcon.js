import { FaLongArrowAltRight } from "react-icons/fa"
import styled from "styled-components"

const Container = styled.div`
  width: 1rem;
  height: 1rem;
  color: grey;
`

export default function ArrowIcon() {
  return (
    <Container>
      <FaLongArrowAltRight />
    </Container>
  )
}
