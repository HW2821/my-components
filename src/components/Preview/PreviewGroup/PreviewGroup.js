import React, { useState } from "react"
import Modal from "../Modal/Modal"
import { Container, Cover } from "./PreviewGroup.style"

export const PreviewContext = React.createContext()

export default function PreviewGroup({ children }) {
  const [open, setOpen] = useState(false)
  const contextValue = { open, setOpen }

  return (
    <PreviewContext.Provider value={contextValue}>
      <Container>
        <Cover onClick={() => setOpen(true)}>{children[0]}</Cover>
        <Modal children={children} open={open} setOpen={setOpen} />
      </Container>
    </PreviewContext.Provider>
  )
}
