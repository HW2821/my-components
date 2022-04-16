import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components/macro"
import ArrowIcon from "./ArrowIcon"
import CalenDarIcon from "./CalendarIcon"
import Input from "./Input"
import Panel from "./Panel"

const Container = styled.div`
  position: relative;
  position: absolute;
  width: 20rem;
  height: 2rem;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  transition: all 250ms ease;
  background-color: whitesmoke;
  &:hover {
    border: 1px solid rgba(17, 130, 128, 0.488);
    box-shadow: rgba(17, 130, 128, 0.2) 0px 2px 8px 0px;

    svg {
      color: rgb(3, 113, 112);
    }
  }
`
export const DateContext = React.createContext()

export default function ({ onChange }) {
  const [firstDate, setFirstDate] = useState(null)
  const [secondDate, setSecondDate] = useState(null)
  const [hoverDate, setHoverDate] = useState(null)
  const [show, setShow] = useState(false)
  const [focus, setFocus] = useState("l")
  const [closeBtn, setCloseBtn] = useState(false)

  const contextValue = {
    firstDate,
    setFirstDate,
    secondDate,
    setSecondDate,
    focus,
    setFocus,
    show,
    setShow,
    hoverDate,
    setHoverDate,
  }
  const inputProps = { focus, setFocus, show, hoverDate, setHoverDate }
  const picker = useRef()

  useEffect(() => {
    if (firstDate && secondDate) {
      setShow(false)
      onChange && onChange([firstDate, secondDate])
    }
  }, [firstDate, secondDate])

  useEffect(() => {
    !show && setHoverDate(null)
    window.onclick = (e) => {
      if (picker.current.contains(e.target) || !show) return
      setShow(false)
      setFocus("l")
      if (firstDate && secondDate) return
      setFirstDate(null)
      setSecondDate(null)
    }
    return () => (window.onclick = null)
  }, [show])

  return (
    <Container
      ref={picker}
      onClick={() => setShow(true)}
      onMouseEnter={() => firstDate && secondDate && setCloseBtn(true)}
      onMouseLeave={() => setCloseBtn(false)}
    >
      <DateContext.Provider value={contextValue}>
        <Input start {...inputProps} />
        <ArrowIcon />
        <Input end {...inputProps} />
        <CalenDarIcon selected={false} closeBtn={closeBtn} />
        <Panel show={show} />
      </DateContext.Provider>
    </Container>
  )
}
