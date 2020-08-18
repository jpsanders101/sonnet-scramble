import React from "react"
import { css } from "@emotion/core"
import { smallMq } from "../constants/styles"

const HelpModalContent = () => (
  <div css={helpContent}>
    <p>
      Sonnets are poems with 14 lines. Shakespeare's Sonnets follow a regular
      scheme of rhythm and rhyme. Here’s an example of a sonnet embedded in the
      dialogue of the play <span css={emphStyle}>Romeo and Juliet</span> to
      illustrate how the rhyme scheme works:
    </p>
    <p css={sonnetStyle}>
      “If I profane with my unworthiest <span css={rhymeAStyle}>hand</span>
      <span css={rhymeIndicatorStyle}>A</span>
      <br /> This holy shrine, the gentle sin is{" "}
      <span css={rhymeBStyle}>this</span>:{" "}
      <span css={rhymeIndicatorStyle}>B</span>
      <br /> My lips, two blushing pilgrims, ready{" "}
      <span css={rhymeAStyle}>stand</span>{" "}
      <span css={rhymeIndicatorStyle}>A</span>
      <br /> To smooth that rough touch with a tender{" "}
      <span css={rhymeBStyle}>kiss</span>.”{" "}
      <span css={rhymeIndicatorStyle}>B</span>
      <br />
      “Good pilgrim, you do wrong your hand too{" "}
      <span css={rhymeCStyle}>much</span>,{" "}
      <span css={rhymeIndicatorStyle}>C</span>
      <br /> Which mannerly devotion shows in{" "}
      <span css={rhymeDStyle}>this</span>;{" "}
      <span css={rhymeIndicatorStyle}>D</span>
      <br /> For saints have hands that pilgrims' hands do{" "}
      <span css={rhymeCStyle}>touch</span>,{" "}
      <span css={rhymeIndicatorStyle}>C</span>
      <br /> And palm to palm is holy palmers'{" "}
      <span css={rhymeDStyle}>kiss</span>.”{" "}
      <span css={rhymeIndicatorStyle}>D</span>
      <br />
      “Have not saints lips, and holy palmers <span css={rhymeEStyle}>too</span>
      ?” <span css={rhymeIndicatorStyle}>E</span>
      <br />
      ”Ay, pilgrim, lips that they must use in{" "}
      <span css={rhymeFStyle}>prayer</span>.{" "}
      <span css={rhymeIndicatorStyle}>F</span>
      <br />
      “O, then, dear saint, let lips do what hands{" "}
      <span css={rhymeEStyle}>do</span>;{" "}
      <span css={rhymeIndicatorStyle}>E</span>
      <br /> They pray — grant thou, lest faith turn to{" "}
      <span css={rhymeFStyle}>despair</span>.”{" "}
      <span css={rhymeIndicatorStyle}>F</span>
      <br />
      “Saints do not move, though grant for prayers'{" "}
      <span css={rhymeGStyle}>sake</span>.”{" "}
      <span css={rhymeIndicatorStyle}>G</span>
      <br />
      “Then move not, while my prayer's effect I{" "}
      <span css={rhymeGStyle}>take</span>.”{" "}
      <span css={rhymeIndicatorStyle}>G</span>
      <br />
    </p>
    <p>
      To unscramble a sonnet, click on one line to select it, then click on
      another line to move it to a new space. All lines beneath this will
      shuffle down.
    </p>
  </div>
)

const helpContent = css`
  font-size: 10px;
`

const emphStyle = css`
  font-style: italic;
`

const rhymeIndicatorStyle = css`
  margin-left: 5px;
  font-family: inherit;
  &:before {
    content: "- ";
  }
  display: none;
  ${smallMq(`
    display: initial;
    margin-left: 10px;
  `)}
`

const rhymeAStyle = css`
  font-family: inherit;
  font-size: inherit;
  color: #6698e8;
`
const rhymeBStyle = css`
  font-family: inherit;
  font-size: inherit;
  color: #e89c66;
`
const rhymeCStyle = css`
  font-family: inherit;
  font-size: inherit;
  color: #a4bf6f;
`
const rhymeDStyle = css`
  font-family: inherit;
  font-size: inherit;
  color: #706fbf;
`
const rhymeEStyle = css`
  font-family: inherit;
  font-size: inherit;
  color: #bf6fbe;
`
const rhymeFStyle = css`
  font-family: inherit;
  font-size: inherit;
  color: #bfbe4e;
`
const rhymeGStyle = css`
  font-family: inherit;
  font-size: inherit;
  color: #b5534a;
`

const sonnetStyle = css`
  margin-left: 5px;
  font-family: Carmen;
  font-size: 12px;
  width: 100%;
  ${smallMq(`
    margin-left: 15px;
    font-size: 18px;
  `)}
`

export default HelpModalContent
