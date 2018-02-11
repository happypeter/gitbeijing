import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const JS_NPM_URLS = [
  '//cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js'
]

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    const js = JS_NPM_URLS.map(url => <script key={url} src={url} />)

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            href="//github.com/happypeter/gitbeijing/blob/master/src/assets/images/favicon.png?raw=true"
          />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
          />

          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          {js}
        </body>
      </html>
    )
  }
}
