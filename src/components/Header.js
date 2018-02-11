import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import DocSearch from './DocSearch'

export default () => {
  return (
    <Wrap>
      <Header>
        <Link to="/">Git 北京</Link>
      </Header>
      <DocSearch />
    </Wrap>
  )
}

const Wrap = styled.div`
  background: teal;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.h2`
  margin-bottom: 24px;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #77f0f0;
    }
  }
`
