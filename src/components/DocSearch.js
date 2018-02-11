import React, { Component } from 'react'
import styled from 'styled-components'

class DocSearch extends Component {
  state = {
    enabled: true
  }

  componentDidMount() {
    if (window.docsearch) {
      window.docsearch({
        apiKey: 'e7d7fcfb5ab7b179b4e5424f16404c6a',
        indexName: 'gitbeijing',
        inputSelector: '#algolia-doc-search'
      })
    } else {
      console.warn('Search has failed to load and now is being disabled')
      this.setState({ enabled: false })
    }
  }

  render() {
    const { enabled } = this.state

    return enabled ? (
      <Form>
        <Input
          id="algolia-doc-search"
          type="search"
          placeholder="Search docs"
          aria-label="Search docs"
        />
      </Form>
    ) : null
  }
}

export default DocSearch

const Form = styled.form`
  margin-bottom: 24px;
`

const Input = styled.input`
  padding: '5px 5px 5px 29px';
`
