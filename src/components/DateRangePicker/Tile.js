import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { isSameDay, isSameMonth, format, compareDesc, compareAsc } from "date-fns"
import { DateContext } from "."

const Container = styled.td`
  position: relative;
  flex: 1;
  font-weight: normal;
  display: flex;
  place-content: center;
  cursor: ${(p) => (p.disable ? "auto" : "pointer")};
  padding: 0.25rem;

  &:hover .inner-tile {
    ${(p) =>
      !p.disable && {
        backgroundColor: "#1c9a9a",
        color: "white",
      }}
  }
`

const InnerTile = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  z-index: 1;
  transition: all 0.2s ease;
  ${(p) =>
    (p.isToday && {
      outline: "1.3px solid #298591",
      color: "#298591",
    }) ||
    (p.selected && {
      backgroundColor: "teal",
      color: "white",
    })}

  color:${(p) => !p.inMonth && "#bdbdbd"};
`

const CoverTile = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  background-color: #d7d7d76c;
  background-color: ${({ inRange }) => inRange && "#0db5a134"};
  opacity: 0;
  opacity: ${({ disable, inRange }) => (disable || inRange) && "1"};
  transition: all 0.2s ease;
`

export const Tile = ({ date, anchorDate, changeDate }) => {
  const [selected, setSelected] = useState(false)
  const [isToday, setIsToday] = useState()
  const [inMonth, setInMonth] = useState()
  const [disable, setDisable] = useState()
  const [inRange, setInRange] = useState(false)
  const { firstDate, setFirstDate, secondDate, setSecondDate, focus, setFocus, hoverDate, setHoverDate } =
    useContext(DateContext)

  const styleProps = { isToday, inMonth, selected, disable }

  const handleClick = () => {
    if (disable) return
    if (focus === "l") {
      setFirstDate(date)
      !secondDate && setFocus("r")
    } else {
      setSecondDate(date)
      !firstDate && setFocus("l")
    }
    if (inMonth) return
    if (compareAsc(date, anchorDate) < 0) changeDate.addOneMonth()
    else changeDate.subOneMonth()
  }

  const handleEnter = () => {
    if (disable) return
    setHoverDate(date)
  }
  const handleLeave = () => {
    if (disable) return
    setHoverDate(null)
  }

  useEffect(() => {
    setIsToday(isSameDay(date, Date.now()))
    setInMonth(isSameMonth(date, anchorDate))
  }, [date])

  useEffect(() => {
    setSelected(inMonth && (isSameDay(date, firstDate) || isSameDay(date, secondDate)))
    if (compareAsc(date, firstDate) < 0 || compareAsc(date, secondDate) > 0) setDisable(true)
    else setDisable(false)
  }, [firstDate, secondDate, date, inMonth])

  useEffect(() => {
    if (
      ((firstDate && compareAsc(date, firstDate) > 0 && compareAsc(date, secondDate || hoverDate) < 0) ||
        (secondDate && compareAsc(date, secondDate) < 0 && compareAsc(date, firstDate || hoverDate) > 0)) &&
      inMonth
    ) {
      setInRange(true)
    } else setInRange(false)
  }, [hoverDate, date, inMonth])

  return (
    <Container onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleClick} disable={disable}>
      <InnerTile className="inner-tile" {...styleProps}>
        {format(date, "d")}
      </InnerTile>
      <CoverTile disable={disable} inRange={inRange} />
    </Container>
  )
}
