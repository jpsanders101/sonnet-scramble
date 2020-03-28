import React from "react"
import { graphql } from "gatsby"
import Game from "../components/game"
import shuffle from "shuffle-array"

export default ({ data }) => {
  const { sonnetsJson: { lines }} = data;
  const randomisedLines = shuffle(lines);

  return (
    <Game lines={randomisedLines} />
  )
}

export const query = graphql`
  query($title: String!) {
    sonnetsJson(title: {eq: $title}) {
      title
      lines {
        lineNumber
        lineText
      }
    }
  }
`