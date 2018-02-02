import React from 'react'
import Toc from '../components/Toc'
import Contributors from '../components/Contributors'
import BookIntro from '../components/BookIntro'
import Author from '../components/Author'

export default () => {
  return (
    <div>
      <BookIntro />
      <Author />
      <Toc />
      <Contributors />
    </div>
  )
}
