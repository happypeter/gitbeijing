import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

export default ({ posts }) => {
  const content = posts.map((p, index) => {
    return (
      <div key={index}>
        <Part>{p.node.part}</Part>
        <Table>
          <tbody>
            {p.node.articles.map((article, i) => {
              return (
                <Row key={i}>
                  <Col1>第 {article.id} 天</Col1>
                  <Col2>
                    <Link to={`/${article.link.split('.')[0]}`}>
                      {article.title}
                    </Link>
                  </Col2>
                </Row>
              )
            })}
          </tbody>
        </Table>
      </div>
    )
  })
  return (
    <Wrap>
      <Content>{content}</Content>
    </Wrap>
  )
}

const Wrap = styled.div`
  background: #f5f5f5;
  padding: 30px 0;
`

const Content = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 800px;
  margin: 30px auto 70px;
  background: #fff;
`

const Part = styled.p`
  font-family: 'Crete Round', Georgia, Times New Roman, serif;
  font-size: 20px;
  color: #14877e;
  margin: 20px 0;
  text-align: center;
`

const Table = styled.table`
  border-collapse: collapse;
  width: 700px;
  margin: 0 auto 30px;
  td {
    border: 1px solid #ddd;
    line-height: 1.5;
    vertical-align: middle;
  }
`
const Row = styled.tr`
  &:hover {
    background-color: #1bbfb1;
    color: white;
  }
  &:hover a {
    color: #fff !important;
  }
`
const Col1 = styled.td`
  text-align: center;
  width: 100px;
`

const Col2 = styled.td`
  a {
    display: block;
    padding: 20px;
    color: #14877e;
    text-decoration: none;
  }
`
