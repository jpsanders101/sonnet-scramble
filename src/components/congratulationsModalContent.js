import React from "react"
import { css } from "@emotion/core"
import { smallMq, COOL_PINK } from "../constants/styles"
import PointingHandIcon from "./pointingHandIcon"
import Heading from "./heading"
import { Link } from "gatsby"

const congratsModalContent = ({ scrambledLines, nextSonnet }) => (
  <div css={congratsModalContentStyle}>
    <Heading
      text="Congratulations!"
      backgroundColour={COOL_PINK}
      fontColour={"black"}
      fontSize={"30px"}
    />
    <div>
      {scrambledLines.map(line => (
        <p css={solvedLine}>{line.lineText}</p>
      ))}
    </div>
    {nextSonnet !== 155 && (
      <Link css={linkStyle} to={`/${nextSonnet}`}>
        <PointingHandIcon />
      </Link>
    )}
  </div>
)

const linkStyle = css`
  display: block;
  width: 150px;
  margin: 0 auto;

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

const solvedLine = css`
  font-size: 10px;

  ${smallMq(`
    font-size: 12px;
  `)}

  margin: 0;
  &:nth-child(13),
  &:nth-child(14) {
    padding-left: 10px;
  }
`
const congratsModalContentStyle = css`
  height: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export default congratsModalContent
