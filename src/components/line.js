import React from "react"
import { css } from "@emotion/core"

export default ({ line, isSelected, registerClick, tabIndex }) => {
  const handleOnClick = () => {
    registerClick(line)
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      registerClick(line);
    }
  }

  const lineStyle = css`
    color: black;
    height: 30px;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    display: table;
    border-bottom: lightgrey 2px solid;
    padding-left: 10px; 
    ${isSelected && `
      border: solid 2px blue;
    `}
  `
  const lineTextStyle = css`
    display: table-cell;
    font-size: 12px;
    vertical-align: bottom;
  `;

  return (
    <div css={lineStyle} onClick={handleOnClick} tabIndex={tabIndex} onKeyDown={handleKeyDown} role="button">
      <span css={lineTextStyle}>{line && line.lineText}</span>
    </div>
  )
}