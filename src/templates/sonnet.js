import React from "react"
import { graphql } from "gatsby"
import Game from "../components/game"
import shuffle from "shuffle-array"

export default ({ data }) => {
  const {
    sonnetsJson: { lines, title },
  } = data
  const randomisedLines = shuffle(lines)

  return (
    <>
      <h1>{`Sonnet ${title}`}</h1>
      <Game lines={randomisedLines} />
    </>
  )
}

export const query = graphql`
  query($title: String!) {
    sonnetsJson(title: { eq: $title }) {
      title
      lines {
        lineNumber
        lineText
      }
    }
  }
`
