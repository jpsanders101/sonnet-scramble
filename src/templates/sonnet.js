import React from "react"
import { graphql } from "gatsby"
import Game from "../components/game"
import shuffle from "shuffle-array"
import { BRIGHT_PINK, YELLOW } from "../constants/styles"
import { css } from "@emotion/core"



export default ({ data }) => {
  const {
    sonnetsJson: { lines, title },
  } = data
  const randomisedLines = shuffle(lines)

  return (
    <>
      <h1 css={headingStyle}><span>{`Sonnet ${title}`}</span></h1>
      <Game lines={randomisedLines} />
    </>
  )
}

const headingStyle = css`
  margin: 5px 0;
  font-family: impact;
  color: ${BRIGHT_PINK};
  & span {
    background-color: ${YELLOW};
    font-family: impact;
  }
`;

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
