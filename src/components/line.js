import React from "react"
import { css } from "@emotion/core"

export default ({ line, isSelected, setSelectedLine }) => {

  const handleOnClick = () => {
    setSelectedLine(line.lineNumber);
  };

  const lineStyle = css`
    color: red;
    ${isSelected && `
      border: solid 2px blue;
    `}
  `;

  return (
    <p css={lineStyle} onClick={handleOnClick}>{line.line}</p>
  )
}