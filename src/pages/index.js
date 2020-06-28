import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import {
  BRIGHT_PINK,
  BREAKPOINTS,
  COOL_PINK,
  OFF_WHITE,
} from "../constants/styles"
import shakespeareSvg from "../../assets/shakespeare.svg"
import PointingHandIcon from "../components/pointingHandIcon"

const { SMALL, LARGE } = BREAKPOINTS

const IndexPage = () => (
  <Layout>
    <div css={backgroundContainerStyle}>
      <img
        css={shakespeareImgStyle}
        src={shakespeareSvg}
        alt="Shakespeare‘s head"
      />
    </div>
    <div css={contentContainerOuterStyle}>
      <div css={contentContainerInnerStyle}>
        <h1 css={headingContainerStyle}>
          <div css={headingStyleOne}>
            <span css={headingTextStyle}>{`Sonnet`}</span>
          </div>
          <div css={headingStyleTwo}>
            <span css={headingTextStyleTwo}>{`Scramble`}</span>
          </div>
        </h1>
        <div css={textContainerStyle}>
          <div css={textStyle}>
            <p>{`At several times during Shakespeare’s career, the London theatres which were his main livelihood were closed due to outbreaks of the plague.`}</p>
            <p>{`It’s a possible reason why he turned his hand to writing poems that readers could enjoy in privacy when public life became dangerous.`}</p>
            <p>{`A book of 154 Sonnets written by Shakespeare was first published in 1609.`}</p>
            <p>{`Here, they are all scrambled. Can you unscramble them?`}</p>
          </div>
          <Link css={handContainerStyle} to="/1">
            <PointingHandIcon />
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

const handContainerStyle = css`
  display: block;
  width: 200px;
  margin: 4em auto 0;
  position: relative;

  & svg {
    fill: black;
    transition: fill 0.25s;
  }

  & svg:hover {
    fill: ${BRIGHT_PINK};
  }

  &:focus {
    outline: none;
    &:after {
      content: " ";
      height: 10px;
      width: calc(100% + 3px);
      border-bottom: 4px solid lightblue;
      position: absolute;
      bottom: -12px;
      left: 0;
    }
  }
`
const headingContainerStyle = css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 200px;

  @media (min-width: ${SMALL}) {
    width: 250px;
  }

  @media (min-width: ${LARGE}) {
    width: 325px;
  }
`

const headingStyleCommon = `
  margin: 5px 0;
  font-family: Carmen;
  color: ${BRIGHT_PINK};
`

const headingStyleOne = css`
  ${headingStyleCommon}
`

const headingStyleTwo = css`
  ${headingStyleCommon}
  align-self: flex-end;
`

const textContainerStyle = css`
  margin: 3em 1em;
`

const headingTextStyle = css`
  background-color: ${BRIGHT_PINK};
  color: ${OFF_WHITE};
  font-family: Carmen;

  font-size: 50px;

  @media (min-width: ${SMALL}) {
    font-size: 60px;
  }

  @media (min-width: ${LARGE}) {
    font-size: 80px;
  }
`
const headingTextStyleTwo = css`
  background-color: ${COOL_PINK};
  color: black;
  font-family: Carmen;

  font-size: 50px;

  @media (min-width: ${SMALL}) {
    font-size: 60px;
  }

  @media (min-width: ${LARGE}) {
    font-size: 80px;
  }
`

const contentContainerOuterStyle = css`
  position: absolute;
  top: 0;
  width: 100%;
`

const contentContainerInnerStyle = css`
  margin: 1em;

  @media (min-width: ${SMALL}) {
    width: calc(${SMALL} - 2em);
    margin: 1em auto;
  }
`

const backgroundContainerStyle = css`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

const shakespeareImgStyle = css`
  position: absolute;
  bottom: 0;
  right: -250px;
  width: 500px;
  max-height: 70vh;

  @media (min-width: ${SMALL}) {
    width: 90vw;
  }
`

const textStyle = css`
  color: black;
  line-height: 1.25;
  & p {
    margin: 2em 0;
  }
`

export default IndexPage
