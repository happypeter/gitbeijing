import React from 'react'
import Toc from '../components/Toc'
import Contributors from '../components/Contributors'
import BookIntro from '../components/BookIntro'
import Author from '../components/Author'

export default ({ data }) => {
  const { edges: posts } = data.allIndexJson
  return (
    <div>
      <BookIntro />
      <Author />
      <Toc posts={posts} />
      <Contributors />
    </div>
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
