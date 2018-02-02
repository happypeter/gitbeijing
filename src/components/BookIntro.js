import React, { Component } from 'react'
import styled from 'styled-components'
import cover from '../assets/images/index/cover_3d_move2github.png'

class BookIntro extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Left>
            <Image alt="git" src={cover} />
          </Left>
          <Right>
            <Title>搬进 Github</Title>
            <Author>
              <a href="https://github.com/happypeter">happypeter</a>
            </Author>
            <Desc>
              《 Git 北京》是一本带初学者学会 git 版本控制工具和 github.com
              社交化编程平台的书。用爱打造。这里免费开放的《搬进 Github》是《
              Git 北京》的第一部分内容。
            </Desc>
            <Button href="http://haoqicat.com/gitbeijing">购买视频课程</Button>
          </Right>
        </Container>
      </Section>
    )
  }
}

export default BookIntro

const Section = styled.div`
  width: 100%;
  margin: 0 auto;
`
const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
`

const Left = styled.div`
  margin-top: 75px;
  width: 450px;
`

const Image = styled.img`
  width: 100%;
`

const Right = styled.div`
  width: 535px;
  margin-top: 75px;
  font-family: 'Crete Round', Georgia, 'Times New Roman', Times, serif;
`

const Title = styled.div`
  font-size: 30px;
  color: #e5533c;
  margin-top: 35px;
`

const Author = styled.div`
  color: #14877e;
  font-size: 18px;
  margin-top: 20px;
  position: relative;
  font-family: 'myriad-pro', Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  &:after {
    content: ' ';
    width: 100%;
    border-bottom: 1px solid #e1e1e0;
    position: absolute;
    bottom: -25px;
    left: 0;
  }
  a:hover {
    text-decoration: underline;
  }
`

const Desc = styled.div`
  color: #333;
  font-size: 18px;
  font-family: 'myriad-pro', Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 40px;
`

const Button = styled.a`
  background: #f27649;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  font-family: 'myriad-pro', Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 30px;
  margin: 40px auto 0;
  margin-right: 20px;
`
