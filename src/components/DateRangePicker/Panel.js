import React, { useState } from "react"
import styled from "styled-components"
import Calendar from "./Calendar"
import { addMonths, subMonths, addYears, subYears } from "date-fns"
import { keyframes } from "styled-components"

const panelShow = keyframes`
    from {
        transform: translateY(-10%);
        transform-origin: top;
        opacity: 0;
    } to {
        transform: none;
        opacity: 1;
    }
`

const Container = styled.div`
  position: absolute;
  top: 150%;
  left: 0;
  display: ${(p) => (p.show ? "flex" : "none")};
  width: 170%;
  border: 1px solid rgba(174, 174, 174, 0.168);
  background-color: whitesmoke;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  animation: ${panelShow} 0.3s ease forwards;
`

export default function Panel({ show }) {
  const [anchorDate, setAnchorDate] = useState(Date.now())

  const changeDate = {
    addOneMonth: () => {
      setAnchorDate(addMonths(anchorDate, 1))
    },
    subOneMonth: () => {
      setAnchorDate(subMonths(anchorDate, 1))
    },
    addOneYear: () => {
      setAnchorDate(addYears(anchorDate, 1))
    },
    subOneYear: () => {
      setAnchorDate(subYears(anchorDate, 1))
    },
  }

  return (
    <Container show={show}>
      <Calendar left anchorDate={anchorDate} changeDate={changeDate} />
      <Calendar right anchorDate={addMonths(anchorDate, 1)} changeDate={changeDate} />
    </Container>
  )
}
