import React from "react"
import { css } from "@emotion/core"

export default ({ line, isSelected, registerClick }) => {
  const handleOnClick = () => {
    registerClick(line)
  }

  const lineStyle = css`
    color: red;
    height: 30px;
    width: 100%;
    margin: 0;
    display: table;
    ${isSelected && `
      border: solid 2px blue;
    `}
    ${line.setType === "scramble"
      ? `background-color: lightyellow;`
      : `border-bottom: lightgrey 2px solid;`}
  `

  return (
    <p css={lineStyle} onClick={handleOnClick}>
      <span css={lineTextStyle}>{line.line && line.line.lineText}</span>
    </p>
  )
}

const lineTextStyle = css`
  display: table-cell;
  vertical-align: bottom;
`;