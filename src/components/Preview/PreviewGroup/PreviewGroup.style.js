import { keyframes } from "styled-components"
import styled from "styled-components/macro"

const Container = styled.div``

const drop = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
`

const Cover = styled.div`
  max-width: 15rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover::before {
    position: absolute;
    content: "Preview";
    color: white;
    font-size: large;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #00000075;
    transform: scaleY(0);
    opacity: 0;
    transform-origin: top;
    animation: ${drop} 500ms ease forwards;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export { Container, Cover }
