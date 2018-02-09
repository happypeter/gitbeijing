import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

export default ({ data }) => {
  const post = data.markdownRemark
  const { articles } = data.indexJson
  const select = articles.filter(item => `/${item.link.split('.')[0]}/` === post.fields.slug)[0]
  return (
    <Wrap>
      <Helmet title={select.
        title} />
        
      <div className="book-wrapper">
        <Title>{select.title}</Title>
        <div className="chapter-contents">
          <h1 />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Wrap>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
    }
    indexJson {
      articles {
        link
        title
      }
    }
  }
`

const Title = styled.div`
  font-family: 'Crete Round', Georgia, Times New Roman, serif;
  font-size: 24px;
  color: #e5533c;
  margin-top: 0;
  text-align: center;
`

const Wrap = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  .book-content {
    background: #f5f5f5;
  }
  .book-wrapper {
    width: 1000px;
    padding: 40px 0 60px;
    margin: 0 auto;
    background: #fff;
  }
  .contents-wrapper {
    background: #f5f5f5;
    padding: 30px 0;
  }
  .chapter-contents {
    width: 800px;
    margin: 0 auto;
    font-family: 'ProximaNova', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
    letter-spacing: 0.3px;
    line-height: 36px;
    font-size: 16px;
  }
  .chapter-contents h1 {
    font-family: 'Crete Round', Georgia, Times New Roman, serif;
    font-size: 24px;
    color: #e5533c;
    margin-top: 0;
    text-align: center;
  }
  .chapter-contents h3 {
    font-family: 'Crete Round', Georgia, Times New Roman, serif;
    font-size: 18px;
    color: #14877e;
  }
  .chapter-contents a {
    color: #14877e;
    text-decoration: none;
    border-bottom: 1px dotted #1bbfb1;
  }
  .book-wrapper img {
    display: block;
    max-width: 700px;
    margin: 20px auto;
  }
  .book-wrapper img[alt='certificates'] {
    display: block;
    width: 291px;
  }

  :not(pre) > code[class*='language-'],
  pre {
    background: #f5f5f5;
  }

  pre {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  code[class*='language-'],
  pre {
    color: #000;
    text-shadow: 0 1px #fff;
    font-size: 14px;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 26px;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .chapter-contents pre {
    color: #767676;
    border: 1px solid #dcdcdc;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }

  .chapter-contents p > code,
  .chapter-contents ul > code,
  .chapter-contents ol > code,
  .chapter-contents li > code {
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: #f5f5f5;
    color: #14877e;
    border-radius: 4px;
    font-size: 15px;
  }
`
