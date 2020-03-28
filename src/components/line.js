import React from "react"
import { css } from "@emotion/core"

export default ({ line, isSelected, registerClick }) => {
  const handleOnClick = () => {
    registerClick(line)
  }

  const lineStyle = css`
    color: red;
    height: 20px;
    ${isSelected &&
      `
      border: solid 2px blue;
    `}
    ${line.setType === "scramble"
      ? `background-color: lightyellow;`
      : `background-color: lightblue;`}
  `

  return (
    <p css={lineStyle} onClick={handleOnClick}>
      {line.line && line.line.lineText}
    </p>
  )
}
