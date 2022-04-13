import React, { useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { DateContext } from "."
import { format } from "date-fns"
import { keyframes } from "styled-components"
const Container = styled.div`
  margin: 1rem;
  flex: 1;
  position: relative;
`

const Input = styled.input`
  all: unset;
  width: 100%;
`

const fade = keyframes`
  to {
    opacity:1;
  }
`

const Bar = styled.div`
  position: absolute;
  width: 100%;
  top: 105%;
  height: 3px;
  background-color: #4bafbc;
  transition: all 0.5s ease;
  border-radius: 1px;
  display: ${(p) => !p.show && "none"};
  opacity: 0;
  animation: ${fade} 0.5s ease forwards;
  transform: translateX(${(p) => (p.focus === "l" ? "0" : "calc(100% + 3rem)")});
`

export default function ({ hoverDate, start, end, focus, setFocus, show }) {
  const [dateValue, setDateValue] = useState("")
  const [placeholder, setPlaceholder] = useState("")
  const { firstDate, secondDate } = useContext(DateContext)
  const inputRef = useRef()

  useEffect(() => {
    const inputValue = (start && firstDate) || (end && secondDate)
    setDateValue((inputValue && format(inputValue, "yyyy-MM-dd")) || "")
  }, [firstDate, secondDate])

  const handleFocus = () => {
    if (start) setFocus("l")
    else setFocus("r")
  }

  useEffect(() => {
    start && focus === "l" && inputRef.current.focus()
    end && focus === "r" && inputRef.current.focus()
  }, [focus])

  useEffect(() => {
    if (hoverDate) {
      start && focus === "l" && setPlaceholder(format(hoverDate, "yyyy-MM-dd"))
      end && focus === "r" && setPlaceholder(format(hoverDate, "yyyy-MM-dd"))
    } else {
      start && setPlaceholder("Start date")
      end && setPlaceholder("End date")
    }
  }, [hoverDate])

  return (
    <Container>
      <Input ref={inputRef} onFocus={handleFocus} readOnly placeholder={placeholder} value={dateValue} />
      {start && <Bar focus={focus} show={show} />}
    </Container>
  )
}
