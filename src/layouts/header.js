import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

export default () => {
  return (
    <Wrap>
      <Header>
        <Link to="/">Git 北京</Link>
      </Header>
    </Wrap>
  )
}

const Wrap = styled.div`
  background: teal;
  min-height: 80px;
  line-height: 80px;
  text-align: center;
`

const Header = styled.h2`
  margin: 0;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #77f0f0;
    }
  }
`
