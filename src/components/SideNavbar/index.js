import React from "react"
import styled from "styled-components/macro"
import arrow from "./img/arrow.svg"
import img1 from "./img/1.svg"
import img2 from "./img/2.svg"
import img3 from "./img/3.svg"
import img4 from "./img/4.svg"
import img5 from "./img/5.svg"

const Container = styled.div`
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
  overflow: hidden;
  font-size: 1.25rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 4rem;
  background-color: var(--bg-primary);
  transition: 0.5s ease;
  &:hover {
    width: 15rem;
  }
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`
const Menu = styled.ul`
  all: unset;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const MenuTitleContainer = styled.div`
  display: flex;
  width: 15rem;
  gap: 2rem;
  background-color: var(--bg-secondary);
  align-items: center;

  transform: translateX(-4.5rem);
  transition: 0.5s ease;
  ${Container}:hover & {
    transform: translateX(0);
  }
`

const MenuTitle = styled.h2`
  color: whitesmoke;
  white-space: nowrap;
  padding-left: 1rem;
  opacity: 0;
  transition: 0.5s ease;
  ${Container}:hover & {
    opacity: 1;
  }
`
const MenuArrow = styled.img`
  width: 2rem;
  height: 2rem;
  transition: 0.5s ease;
  ${Container}:hover & {
    transform: rotate(-180deg);
  }
`

const Item = styled.li`
  all: unset;
  height: 5rem;
  width: 100%;

  display: flex;
  align-items: center;

  &:last-child {
    margin-top: auto;
  }

  &:hover {
    background-color: var(--bg-secondary);
  }
`

const Link = styled.a`
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  gap: 3rem;
  z-index: 9999999;
  span {
    ${Container}:hover & {
      opacity: 1;
    }
    transition: 0.5s ease;
    opacity: 0;
    margin-left: 1rem;
  }
`

export default function SideNavbar() {
  return (
    <Container>
      <Menu>
        <MenuTitleContainer>
          <MenuTitle>My Menu</MenuTitle>
          <MenuArrow src={arrow} />
        </MenuTitleContainer>
        <Item>
          <Link>
            <img src={img1} />
            <span>Cats</span>
          </Link>
        </Item>
        <Item>
          <Link>
            <img src={img2} />
            <span>Dogs</span>
          </Link>
        </Item>
        <Item>
          <Link>
            <img src={img3} />
            <span>Fish</span>
          </Link>
        </Item>
        <Item>
          <Link>
            <img src={img4} />
            <span>Bears</span>
          </Link>
        </Item>
        <Item>
          <Link>
            <img src={img5} />
            <span>Monkey</span>
          </Link>
        </Item>
      </Menu>
    </Container>
  )
}
