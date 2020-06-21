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

export default congratsModalContent

const linkStyle = css`
  display: block;
  width: 200px;
  margin: 30px auto;
`

const solvedLine = css`
  font-size: 10px;

  ${smallMq(`
    font-size: 15px;
  `)}

  margin: 0;
`
const congratsModalContentStyle = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
