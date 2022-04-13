import React, { useContext } from "react"
import styled from "styled-components"
import { AiOutlineCalendar } from "react-icons/ai"
import { IoIosCloseCircle } from "react-icons/io"
import { DateContext } from "."
import { keyframes } from "styled-components"

const Container = styled.div`
  width: 1rem;
  height: 1rem;
  color: gray;
  margin: 0.5rem;
`
const showIcon = keyframes`
    from {
        opacity: 0.3;
    }
    to {
        opacity: 1;
    }
`
const Icon = styled.div`
  animation: ${showIcon} 0.3s ease-out forwards;
`

export default function CalenDarIcon({ closeBtn }) {
  const { firstDate, setFirstDate, secondDate, setSecondDate, focus, setFocus, setShow } = useContext(DateContext)
  return (
    <Container>
      {closeBtn ? (
        <Icon>
          <IoIosCloseCircle
            onClick={(e) => {
              setFirstDate(null)
              setSecondDate(null)
              setFocus("l")
              setShow(false)
              e.stopPropagation()
            }}
            style={{ cursor: "pointer" }}
          />
        </Icon>
      ) : (
        <AiOutlineCalendar />
      )}
    </Container>
  )
}
