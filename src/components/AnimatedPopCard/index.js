import styled from "styled-components"
import { keyframes } from "styled-components"
import laptop from "./img/laptop.png"
import scissors from "./img/scissors.png"
import sign from "./img/sign.png"
import wave from "./img/wave.svg"
import zelda from "./img/zelda.jpg"

const Container = styled.div`
  img {
    max-width: 100%;
  }
  width: 13rem;
  position: relative;
  z-index: 1;
`

const RankTag = styled.div`
  color: white;
  font-weight: bold;
  position: absolute;
  background-color: #000000a5;

  padding: 0.5em 0.5em 0.75em;
  top: 0;
  right: 1em;
  font-size: 1.125rem;
  clip-path: polygon(100% 0, 100% 100%, 48% 86%, 0% 100%, 0 50%, 0% 0%);
  z-index: 10;
  transition: 200ms;
  ${Container}:hover & {
    transform: translate(120%, -80%);
  }
`

const Front = styled.div`
  transition: transform 200ms cubic-bezier(0.1, 0.62, 0.45, 1.05), opacity 200ms linear;
  ${Container}:hover & {
    transform: translateY(-30%) scale(0.8);
  }
`

const CoverImg = styled.img`
  border-radius: 0.7em;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const GameTitleAnim = keyframes`
    0% {
        text-align: left;
        opacity: 1;
    } 

    30% {
        text-align: left;
        opacity: 0;
    }

    60% {
        text-align: center;
        opacity: 0;
    }

    100% {
        text-align: center;
        opacity: 1;
    }
`

const GameTitle = styled.h3`
  color: whitesmoke;

  margin: 0.75em 0;
  transition: 200ms;
  ${Container}:hover & {
    /* transform: translateX(50%); */
    animation: ${GameTitleAnim} 200ms ease forwards;
  }
`

const Stats = styled.div`
  color: white;
  ${Container}:hover & {
    opacity: 0;
  }
`

const Viwers = styled.p``

const BackAnim = keyframes`
    from {
        transform: translateY(50%) scale(1);
    }

    to {
        opacity: 1;
        transform: none;
    }
`

const Back = styled.div`
  /* display: none; */
  /* opacity: 0; */
  /* display: absolute; */

  & img {
    width: 2rem;
    height: 2rem;
  }

  & p {
    margin: 0;
  }

  * {
    color: #e8e8e8;
    text-align: center;
  }

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  opacity: 0;
  transform: translateY(50%) scale(0);

  ${Container}:hover & {
    animation: ${BackAnim} 200ms cubic-bezier(0.1, 0.62, 0.45, 1.05) forwards;
  }
`

const StreamStats = styled.div``

const Info = styled.div`
  columns: 2;

  column-rule: 1px solid lightgray;

  font-size: 1.15rem;

  span {
    font-size: 0.8rem;
  }
`

const Button = styled.div`
  color: whitesmoke;
  padding: 0.5em;
  background-color: #37b4d3;
  border-radius: 2em;
  cursor: pointer;
  white-space: nowrap;
  transition: 200ms;
  &:hover {
    transform: translateY(-7px);
    box-shadow: rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`

const Streamer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`

const Name = styled.p``

const Views = styled.p``

const waveAnim = keyframes`
    from {
        opacity: 1;
        transform: translateX(0%);
    }

    to {
        opacity: 1;
        transform: translateX(calc(-100% + 13rem));
    }
`
const BackGround = styled.div`
  background-origin: top;
  background-size: cover;
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  transform: scale(0.2, 0.9);
  opacity: 0;
  border-radius: 1em;
  ${Container}:hover & {
    opacity: 1;
    transform: scale(1.4, 1.15);
    transition: transform 200ms cubic-bezier(0.1, 0.62, 0.45, 1.05), opacity 100ms linear;
  }

  img {
    height: 100%;
    width: 100%;
    filter: blur(2px);
    position: absolute;
  }

  svg {
    opacity: 0;
  }

  ${Container}:hover & svg {
    height: 100%;
    animation: ${waveAnim} 30s linear infinite;
  }
`

export default function AnimatedPopCard() {
  return (
    <Container>
      <RankTag>3</RankTag>
      <Front>
        <CoverImg src={zelda} alt="" />
        <GameTitle>Legend of Zelda</GameTitle>
        <Stats>
          <Viwers>42w</Viwers>
        </Stats>
      </Front>
      <Back>
        <Info>
          <StreamStats>
            <p>42.3w</p>
            <span>Watching</span>
          </StreamStats>
          <StreamStats>
            <p>2.7w</p>
            <span>Streaming</span>
          </StreamStats>
        </Info>
        <Button>See more streamers</Button>
        <Wrapper>
          <Streamer>
            <img src={laptop} />
            <Name>Gamer 1</Name>
            <Views>12w</Views>
          </Streamer>
          <Streamer>
            <img src={scissors} />
            <Name>Gamer 2</Name>
            <Views>12w</Views>
          </Streamer>
          <Streamer>
            <img src={sign} />
            <Name>Gamer 3</Name>
            <Views>12w</Views>
          </Streamer>
        </Wrapper>
      </Back>
      <BackGround>
        <img src={zelda} />
        {waveSvg}
      </BackGround>
    </Container>
  )
}

const waveSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#224244"
      fillOpacity="1"
      d="M0,160L21.8,149.3C43.6,139,87,117,131,128C174.5,139,218,181,262,176C305.5,171,349,117,393,101.3C436.4,85,480,107,524,122.7C567.3,139,611,149,655,144C698.2,139,742,117,785,96C829.1,75,873,53,916,85.3C960,117,1004,203,1047,202.7C1090.9,203,1135,117,1178,101.3C1221.8,85,1265,139,1309,149.3C1352.7,160,1396,128,1418,112L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
    ></path>
  </svg>
)
