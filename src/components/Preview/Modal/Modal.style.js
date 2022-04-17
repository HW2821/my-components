import { css } from "styled-components"
import styled from "styled-components/macro"

const Wrapper = styled.div`
  .modal-enter {
    transform: scale(0.5);
    opacity: 0;
  }
  .modal-enter-active {
    transform: none;
    opacity: 1;
    transition: 250ms ease;
  }
  .modal-exit {
    transform: none;
    opacity: 1;
  }
  .modal-exit-active {
    transform: scale(0.5);
    opacity: 0;
    transition: 250ms ease;
  }
`

const Container = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0000006f;
  display: flex;
  justify-content: center;
  align-items: center;

  /* display: ${({ open }) => (open ? "block" : "none")}; */
`

const Arrow = styled.div`
  padding: 1.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 3rem;
  width: 3rem;
  font-size: 2rem;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
  user-select: none;
  cursor: pointer;
  z-index: 999;
  ${({ left }) =>
    left
      ? css`
          left: 2rem;
        `
      : css`
          right: 2rem;
        `}
`

const ImgContainer = styled.div.attrs(({ rotate, scale }) => ({
  style: {
    transform: `rotate3d(0, 0, 1, ${rotate}deg) scale3d(${scale},${scale},1)`,
  },
}))`
  max-width: 50%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms ease;
  img {
    cursor: grab;
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`

export { Container, Arrow, ImgContainer, Wrapper }
