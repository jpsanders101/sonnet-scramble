import React from "react"
import { css } from "@emotion/core"
import {
  COOL_PINK,
  OFF_WHITE,
  smallMq,
  mediumMq,
  largeMq,
} from "../constants/styles"

const Modal = ({ content, dismissHandler, showConfetti }) => (
  <div css={modalContainerStyle}>
    {showConfetti && (
      <img css={confettiStyle} src={"./confetti.gif"} alt="Confetti" />
    )}
    <div css={modalContentStyle}>
      {dismissHandler && (
        <button css={closeButtonStyle} onClick={dismissHandler}>
          X
        </button>
      )}
      <div css={innerContentStyle}>{content()}</div>
    </div>
  </div>
)

Modal.defaultProps = {
  content: "modal content",
  showConfetti: false,
  dismissHandler: null,
}

const confettiStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`

const innerContentStyle = css`
  padding: 2em;
  overflow-y: scroll;
  height: calc(100% - 4em);
`
const closeButtonStyle = css`
  font-family: Carmen;
  background: none;
  font-size: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  outline: none;
`

const modalContainerStyle = css`
  font-family: Carmen;
  background-color: ${COOL_PINK}9F;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  \z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const modalContentStyle = css`
  position: relative;
  border-radius: 10px;
  height: 66vh;
  width: 80vw;
  box-shadow: 5px 5px 5px grey;

  ${smallMq(`
    width: 70vw;
  `)}
  ${mediumMq(`
    width: 60vw;
  `)}
  ${largeMq(`
    width: 50vw;
  `)}
  background-color: ${OFF_WHITE};
  margin: 0 auto;
`

export default Modal
