import React from "react"
import { graphql } from "gatsby"
import Game from "../components/game"
import Layout from "../components/layout"
import shuffle from "shuffle-array"
import { BREAKPOINTS } from "../constants/styles"
import { css } from "@emotion/core"
import Heading from "../components/heading"

const { SMALL } = BREAKPOINTS

const SonnetPage = ({ data }) => {
  const {
    sonnetsJson: { lines, title },
  } = data
  const randomisedLines = shuffle(lines)

  return (
    <Layout>
      <div css={containerStyle}>
        <div css={headingContainerStyle}>
          <Heading text={`Sonnet ${title}`} />
        </div>
        <Game lines={randomisedLines} title={title} />
      </div>
    </Layout>
  )
}

const headingContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const containerStyle = css`
  height: 100vh;
  max-height: 800px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  margin: 0 1em;
  @media (min-width: ${SMALL}) {
    margin: 0 auto;
    width: max-content;
  }
`

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

export default SonnetPage
