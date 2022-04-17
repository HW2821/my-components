import styled from "styled-components/macro"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #54545468;
  height: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  padding-right: 1rem;
  z-index: 9999;
`
const Icon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ disable }) => (disable ? "grey" : "#fbfbfb")};
  }
`

export { Container, Icon }
