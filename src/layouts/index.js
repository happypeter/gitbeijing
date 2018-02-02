import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`
