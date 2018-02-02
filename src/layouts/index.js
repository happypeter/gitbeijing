import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './header.js'
import Footer from './footer.js'
import '../assets/global.css'

export default ({ children }) => {
  return (
    <Wrap>
      <Header />
      {children()}
      <Footer />
    </Wrap>
  )
}

const Wrap = styled.div``
