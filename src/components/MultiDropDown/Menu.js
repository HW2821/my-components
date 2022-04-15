import { ReactComponent as BellIcon } from "./icons/bell.svg"
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg"
import { ReactComponent as PlusIcon } from "./icons/plus.svg"
import { ReactComponent as CogIcon } from "./icons/cog.svg"
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg"
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg"
import styled from "styled-components/macro"
import { CSSTransition } from "react-transition-group"
import { useEffect, useRef, useState } from "react"

const Container = styled.div`
  position: absolute;
  top: 110%;
  right: 1rem;
  padding: 1rem;
  background-color: #4d4d4d;
  border-radius: 5px;
  border: 1px solid grey;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  display: flex;
  transition: height 0.5s;
  box-sizing: content-box;
  //csstransition

  .primary-enter {
    position: absolute;
    transform: translateX(-100%);
  }
  .primary-enter-active {
    transform: translateX(0);
    transition: 0.5s ease;
  }
  .primary-exit {
    transform: translateX(0);
  }
  .primary-exit-active {
    transform: translateX(-100%);
    transition: 0.5s ease;
  }

  .secondary-enter {
    position: absolute;
    transform: translateX(100%);
  }
  .secondary-enter-active {
    transform: translateX(0);
    transition: 0.5s ease;
  }
  .secondary-exit {
    transform: translateX(0);
  }
  .secondary-exit-active {
    transform: translateX(100%);
    transition: 0.5s ease;
  }
`

const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState("main")
  const [height, setHeight] = useState()
  const menuRef = useRef()

  useEffect(() => setHeight(menuRef.current?.firstChild.offsetHeight), [])

  const switchMenu = {
    toMain: () => setCurrentMenu("main"),
    toSetting: () => setCurrentMenu("setting"),
    toBell: () => setCurrentMenu("bell"),
  }
  const changeHeight = (el) => setHeight(el.offsetHeight)
  const props = { switchMenu, changeHeight }

  return (
    <Container ref={menuRef} style={{ height }} onClick={(e) => e.stopPropagation()}>
      <CSSTransition
        in={currentMenu === "main"}
        timeout={500}
        classNames="primary"
        unmountOnExit
        onEnter={changeHeight}
      >
        <MainMenu {...props} />
      </CSSTransition>
      <CSSTransition
        in={currentMenu === "bell"}
        timeout={500}
        classNames="secondary"
        unmountOnExit
        onEnter={changeHeight}
      >
        <BellsMenu {...props} />
      </CSSTransition>
      <CSSTransition
        in={currentMenu === "setting"}
        timeout={500}
        classNames="secondary"
        unmountOnExit
        onEnter={changeHeight}
      >
        <SettingMenu {...props} />
      </CSSTransition>
    </Container>
  )
}

const MainMenu = ({ switchMenu }) => {
  return (
    <div>
      <Item left={<MessengerIcon />}>Message1</Item>
      <Item left={<MessengerIcon />}>Message2</Item>
      <Item left={<CogIcon />} right={<ChevronIcon />} onClick={switchMenu.toSetting}>
        Settings
      </Item>
      <Item left={<BellIcon />} right={<ChevronIcon />} onClick={switchMenu.toBell}>
        Bells
      </Item>
    </div>
  )
}

const BellsMenu = ({ switchMenu }) => {
  return (
    <div>
      <Item left={<ArrowIcon />} onClick={switchMenu.toMain}>
        <h3>Bells</h3>
      </Item>
      <Item left={<BellIcon />}>bell</Item>
    </div>
  )
}

const SettingMenu = ({ switchMenu }) => {
  return (
    <div>
      <Item left={<ArrowIcon />} onClick={switchMenu.toMain}>
        <h3>Settings</h3>
      </Item>
      <Item left={<PlusIcon />}>add</Item>
      <Item left={<PlusIcon />}>add</Item>
      <Item left={<PlusIcon />}>add</Item>
      <Item left={<PlusIcon />}>add</Item>
      <Item left={<PlusIcon />}>add</Item>
    </div>
  )
}

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 18rem;
  font-size: 0.9rem;
  color: whitesmoke;
  white-space: nowrap;
  transition: 0.25s ease;
  padding: 0.5rem;
  border-radius: 5px;
  height: 50px;
  &:hover {
    background-color: #9a9a9a68;
  }
`

const LeftIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  margin-right: 0.5rem;
  background-color: grey;
  border-radius: 50%;
  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: white;
  }
`
const Content = styled.div`
  h3 {
    margin: 0;
    font-weight: 700;
  }
`

const RightIcon = styled.div`
  justify-self: flex-end;
  margin-left: auto;
  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: whitesmoke;
  }
`

const Item = ({ children, left, right, onClick }) => {
  return (
    <ItemContainer onClick={onClick}>
      <LeftIcon>{left} </LeftIcon>
      <Content>{children}</Content>
      <RightIcon>{right}</RightIcon>
    </ItemContainer>
  )
}

export default Menu
