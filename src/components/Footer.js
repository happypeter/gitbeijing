import React, { Component } from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Footer>
      <nav>
        <p>
          有任何问题请联系
          <a href="https://github.com/happypeter"> happypeter</a> ：
          happypeter1983@gmail.com <br /> 所有内容基于{' '}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            允许商用保留署名的 CC 协议
          </a>{' '}
          发布
        </p>
      </nav>
    </Footer>
  )
}

const Footer = styled.footer`
  width: 100%;
  height: 70px;
  nav {
    background: #333;
    min-height: 70px;
    color: #fff;
    a {
      color: #14877e;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  p {
    line-height: 1.9;
    padding: 40px;
    text-align: center;
    font-size: 13px;
    margin-top: 0;
  }
`
