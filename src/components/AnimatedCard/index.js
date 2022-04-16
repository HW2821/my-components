import React from "react"
import styled from "styled-components"
import bg from "./img/background.jpg"

const Container = styled.div`
  --green: #4ad04f;
  --dark: hsl(207, 19%, 9%);
  background-image: url(${bg});
  background-size: cover;
  background-color: darkgray;
  background-position: center;
  padding: 10rem 0 0;
  color: whitesmoke;
  max-width: 35ch;
  line-height: 1.6;
  border-radius: 0.5rem;
  overflow: hidden;

  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const CardContent = styled.div`
  padding: 1.5rem;
  background: linear-gradient(to top, hsl(0, 0%, 0%), hsla(0, 0%, 0%, 0.35) 80%, hsla(0, 0%, 0%, 0));
  transform: translateY(70%);
  transition: transform 0.5s ease;

  ${Container}:hover & {
    transform: none;
    transition-delay: 0.5s;
  }

  & *:not(h2) {
    transition: opacity 0.8s ease;
    opacity: 0;

    ${Container}:hover & {
      opacity: 1;
      transition-delay: 1s;
    }
  }
`

const CardTitle = styled.h2`
  --padding: 1.5rem;
  position: relative;
  width: max-content;
  &::after {
    content: "";
    position: absolute;
    background-color: var(--green);
    height: 4px;
    width: calc(100% + var(--padding));
    left: calc(var(--padding) * -1);
    bottom: 0px;
    transform: translateX(-100%);
    transition: transform 0.5s ease;

    ${Container}:hover & {
      transform: translateX(0%);
    }
  }
`

const CardDesc = styled.p`
  color: #ffffffed;
`
const Button = styled.a`
  color: var(--dark);
  cursor: pointer;
  background-color: var(--green);
  display: inline-block;
  padding: 0.5em 1.5em;
  border-radius: 0.25em;

  &:hover {
    background-color: whitesmoke;
  }
`

export default function AnimatedCard() {
  return (
    <Container>
      <CardContent>
        <CardTitle>My Long Card Title</CardTitle>
        <CardDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, harum! Asperiores excepturi consectetur
          tempore
        </CardDesc>
        <Button href="#">Learn More</Button>
      </CardContent>
    </Container>
  )
}
