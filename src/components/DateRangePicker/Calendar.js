import React, { useState } from "react"
import styled from "styled-components"
import { previousSunday, startOfMonth, format, add, isSunday } from "date-fns"
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Tile } from "./Tile"

const Container = styled.div`
  flex: 1;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #eeeeee;
`

const HeaderDate = styled.div`
  user-select: none;
`

const HeaderLeft = styled.div`
  flex: 1;
  display: flex;
`
const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
const Icon = styled.div`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ececec;
  }
`

const Body = styled.div`
  padding: 1rem;
`

const Table = styled.table`
  width: 100%;
  tr {
    display: flex;
    justify-content: space-evenly;
  }

  th {
    flex: 1;
    font-weight: normal;
    color: #298591;
  }
`

export default function Calendar({ anchorDate, left, right, changeDate }) {
  const dates = getDateArray(anchorDate)
  const makeTiles = () =>
    dates.map((row, i) => (
      <tr key={i}>
        {row.map((date, i) => {
          const props = { date, anchorDate, changeDate }
          return <Tile {...props} key={i} />
        })}
      </tr>
    ))

  return (
    <Container>
      <Header>
        <HeaderLeft>
          {right ? (
            <div></div>
          ) : (
            <>
              <Icon onClick={changeDate.subOneYear}>
                <HiChevronDoubleLeft />
              </Icon>
              <Icon onClick={changeDate.subOneMonth}>
                <IoIosArrowBack />
              </Icon>
            </>
          )}
        </HeaderLeft>
        <HeaderDate>{format(anchorDate, "MMM yyyy")}</HeaderDate>
        <HeaderRight>
          {left ? (
            <div></div>
          ) : (
            <>
              <Icon onClick={changeDate.addOneMonth}>
                <IoIosArrowForward />
              </Icon>
              <Icon onClick={changeDate.addOneYear}>
                <HiChevronDoubleRight />
              </Icon>
            </>
          )}
        </HeaderRight>
      </Header>
      <Body>
        <Table>
          <TableHeader />
          <tbody>{makeTiles()}</tbody>
        </Table>
      </Body>
    </Container>
  )
}

const TableHeader = () => (
  <thead>
    <tr>
      <th>Su</th>
      <th>Mo</th>
      <th>Tu</th>
      <th>We</th>
      <th>Th</th>
      <th>Fr</th>
      <th>Sa</th>
    </tr>
  </thead>
)

const getDateArray = (date) => {
  const firstDayofMonth = startOfMonth(date)
  const StartSunday = isSunday(firstDayofMonth) ? firstDayofMonth : previousSunday(firstDayofMonth)

  const arr = [[StartSunday]]
  let prev = StartSunday

  let count = 41
  while (count) {
    count--
    const lastArr = arr[arr.length - 1]
    const next = new Date(add(prev, { days: 1 }))
    lastArr.push(next)
    prev = next
    if (lastArr.length === 7 && count) arr.push([])
  }

  return arr
}
