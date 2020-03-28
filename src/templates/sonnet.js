import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => {  
  return (
    <main>
      <h1>{`Sonnet Page`}</h1>
      {data.sonnetsJson.lines.map(lineNode => (
        <p>{lineNode.line}</p>
      ))}
      <Link to={`/${parseInt(data.sonnetsJson.title) + 1}`}>{`Next`}</Link>
    </main>
  )
}

export const query = graphql`
  query($title: String!) {
    sonnetsJson(title: {eq: $title}) {
      title
      lines {
        lineNumber
        line
      }
    }
  }
`