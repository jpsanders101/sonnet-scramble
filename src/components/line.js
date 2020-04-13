import React from "react"
import { css } from "@emotion/core"
import { BRIGHT_PINK, LIGHT_GREEN, COOL_BLUE, LILAC } from "../constants/styles"

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
    ${isSelected && `
      border: solid 2px blue;
    `}
    ${line.setType === "scramble"
      ? `
        max-width: 90%;
        margin: 3px 0;
        &:nth-of-type(2n) {
          align-self: flex-end;
        }
        &:nth-of-type(7n + 1) {
          background-color: ${COOL_BLUE};
        }
        &:nth-of-type(7n + 2) {
          background-color: red;
        }
        &:nth-of-type(7n + 3) {
          background-color: ${BRIGHT_PINK};
        }
        &:nth-of-type(7n + 4) {
          background-color: yellow;
        }
        &:nth-of-type(7n + 5) {
          background-color: ${LIGHT_GREEN};
        }
        &:nth-of-type(7n + 6) {
          background-color: ${BRIGHT_PINK};
        }
        &:nth-of-type(7n + 7) {
          background-color: ${LILAC};
        }
        background-color: lightyellow;
      `
      : `
        border-bottom: lightgrey 2px solid;
        padding-left: 10px;      
      `}
  `
  const lineTextStyle = css`
    display: table-cell;
    font-size: 12px;
    ${line.setType === "scramble"
    ? `
      vertical-align: middle;
      text-align: center;
    ` : `
      vertical-align: bottom;
    `}
`;

  return (
    <div css={lineStyle} onClick={handleOnClick} tabIndex={tabIndex} onKeyDown={handleKeyDown} role="button">
      <span css={lineTextStyle}>{line.line && line.line.lineText}</span>
    </div>
  )
}