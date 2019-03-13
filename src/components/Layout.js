import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import "../assets/global.css"
import "../assets/algolia.css"

export default ({ children }) => {
  return (
    <Wrap>
      <Header />
      {children}
      <Footer />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`
