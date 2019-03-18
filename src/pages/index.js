import React from "react"
import { graphql } from "gatsby"
import Toc from "../components/Toc"
import Contributors from "../components/Contributors"
import BookIntro from "../components/BookIntro"
import Author from "../components/Author"
import Layout from "../components/Layout"

export default ({ data }) => {
  const { edges: posts } = data.allIndexJson
  return (
    <Layout>
      <BookIntro />
      <Author />
      <Toc posts={posts} />
      <Contributors />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allIndexJson {
      edges {
        node {
          part
          articles {
            id
            title
            link
          }
        }
      }
    }
  }
`
