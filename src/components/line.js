import React from "react"
import { css } from "@emotion/core"
import { BRIGHT_PINK } from "../constants/styles"
import TickIcon from "./tickIcon"

const Line = ({
  line,
  isSelected,
  registerClick,
  tabIndex,
  someLineIsSelected,
  displayTick,
}) => {
  const handleOnClick = () => {
    registerClick(line)
  }

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      registerClick(line)
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
    ${isSelected &&
      `
      color: ${BRIGHT_PINK};
      font-weight: 700;
      padding-left: 20px;
    `}
    &:focus {
      outline: none;
      border-bottom: lightblue 2px solid;
    }
    ${someLineIsSelected &&
      `
      &:hover {
        border-bottom: lightblue 2px solid;
      }
    `}
  `
  const lineTextStyle = css`
    display: table-cell;
    font-size: 12px;
    vertical-align: bottom;
    width: 95%;
  `

  return (
    <div
      css={lineStyle}
      onClick={handleOnClick}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
      role="button"
    >
      <div css={lineTextStyle}>{line && line.lineText}</div>
      {displayTick && (
        <div css={tickStyle}>
          <TickIcon />
        </div>
      )}
    </div>
  )
}

const tickStyle = css`
  display: table-cell;
  vertical-align: middle;
  padding-right: 5px;
  & svg {
    vertical-align: middle;
    display: table-cell;
    height: 15px;
  }
`

export default Line
