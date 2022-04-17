import { Container } from "./index.style"
import PreviewGroup from "./PreviewGroup/PreviewGroup"
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"

export default function index() {
  return (
    <Container>
      <PreviewGroup>
        <img src={img1} draggable={false} />
        <img src={img2} draggable={false} />
        <img src={img3} draggable={false} />
      </PreviewGroup>
    </Container>
  )
}
