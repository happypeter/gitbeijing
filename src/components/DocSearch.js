import React, { Component } from "react"
import styled from "styled-components"

class DocSearch extends Component {
  state = {
    enabled: true,
  }

  componentDidMount() {
    if (window.docsearch) {
      window.docsearch({
        apiKey: "e7d7fcfb5ab7b179b4e5424f16404c6a",
        indexName: "gitbeijing",
        inputSelector: "#algolia-doc-search",
      })
    } else {
      console.warn("Search has failed to load and now is being disabled")
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
  border: 0;
  font-size: 16px;
  color: #fff;
  width: 300px;
  height: 32px;
  border-radius: 4px;
  padding: 8px 8px 8px 32px;
  background-image: url(data:image/svg+xml;base64,PHN2ZwogIGFsdD0iU2VhcmNoIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIK%0D%0AICB2aWV3Qm94PSIwIDAgMTYgMTYiCj4KICA8cGF0aAogICAgZD0iCiAgICAgIE02LjAyOTQ1LDEw%0D%0ALjIwMzI3YTQuMTczODIsNC4xNzM4MiwwLDEsMSw0LjE3MzgyLTQuMTczODJBNC4xNTYwOSw0LjE1%0D%0ANjA5LAogICAgICAwLDAsMSw2LjAyOTQ1LDEwLjIwMzI3Wm05LjY5MTk1LDQuMjE5OUwxMC44OTg5%0D%0ALDkuNTk5NzlBNS44ODAyMSw1Ljg4MDIxLAogICAgICAwLDAsMCwxMi4wNTgsNi4wMjg1Niw2LjAw%0D%0ANDY3LDYuMDA0NjcsMCwxLDAsOS41OTk3OSwxMC44OTg5bDQuODIzMzgsCiAgICAgIDQuODIzMzhh%0D%0ALjg5NzI5Ljg5NzI5LDAsMCwwLDEuMjk5MTIsMCwuODk3NDkuODk3NDksMCwwLDAtLjAwMDg3LTEu%0D%0AMjk5MDlaIgogICAgZmlsbD0iI2ZmZmZmZiIKICAvPgo8L3N2Zz4=);
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
`
