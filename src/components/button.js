import React from "react"
import { css } from "@emotion/core"
import { COOL_PINK } from "../constants/styles"

const Button = ({ onClick, text }) => (
  <button onClick={onClick} css={buttonStyle}>
    {text}
  </button>
)

const buttonStyle = css`
  background-color: ${COOL_PINK};
  font-family: Carmen;
  font-size: 30px;
  border: none;
  box-shadow: 3px 3px black;
  position: relative;
  min-width: 80px;

  &:active {
    top: 3px;
    left: 3px;
    box-shadow: none;
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

export default Button
