import React from "react"
import { graphql } from "gatsby"
import Game from "../components/game"
import Layout from "../components/layout"
import shuffle from "shuffle-array"
import { BRIGHT_PINK, YELLOW, BREAKPOINTS } from "../constants/styles"
import { css } from "@emotion/core"

const { SMALL, LARGE } = BREAKPOINTS

const SonnetPage = ({ data }) => {
  const {
    sonnetsJson: { lines, title },
  } = data
  const randomisedLines = shuffle(lines)

  return (
    <Layout>
      <div css={containerStyle}>
        <div css={headingContainerStyle}>
          <h1 css={headingStyle}>
            <span css={headingTextSyle}>{`Sonnet ${title}`}</span>
          </h1>
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  width: max-content;
  margin: 0 auto;
`

const headingStyle = css`
  text-align: center;
  margin: 5px 0;
  color: ${BRIGHT_PINK};
`

const headingTextSyle = css`
  background-color: ${YELLOW};
  font-family: Carmen;
  font-size: 50px;

  @media (min-width: ${SMALL}) {
    font-size: 60px;
  }

  @media (min-width: ${LARGE}) {
    font-size: 80px;
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
