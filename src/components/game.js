import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Line from "./line"
import {
  BRIGHT_PINK,
  BREAKPOINTS,
  COOL_PINK,
  smallMq,
} from "../constants/styles"
import Modal from "./modal"
import PointingHandIcon from "./pointingHandIcon"
import Heading from "./heading"
import ShakespeareIcon from "./shakespeareIcon"
import Button from "./button"
import HelpModalContent from "./helpModalContent"

const { SMALL } = BREAKPOINTS

const Game = ({ lines, title }) => {
  const mappedScrambledLines = lines.map((line, index) => ({
    ...line,
    position: index,
  }))
  const [scrambledLines, setScrambledLines] = useState(mappedScrambledLines)

  const [selectedLine, setSelectedLine] = useState(null)

  const [isSonnetUnscrambled, setIsSonnetUnscrambled] = useState(false)

  const [isCheckModeOn, setIsCheckModeOn] = useState(false)

  const [showHelpModal, setShowHelpModal] = useState(false)

  const nextSonnet = parseInt(title) + 1

  const registerClick = clickedLine => {
    if (selectedLine) {
      setIsCheckModeOn(false)
      const selectedLinePosition = selectedLine.position
      const clickedLinePosition = clickedLine.position

      const shiftedLine = scrambledLines.splice(selectedLinePosition, 1)
      const chunkOne = scrambledLines.slice(0, clickedLinePosition)
      const chunkTwo = scrambledLines.slice(clickedLinePosition)

      const newScrambledLines = [
        ...chunkOne,
        ...shiftedLine,
        ...chunkTwo,
      ].map((line, index) => ({ ...line, position: index }))

      setScrambledLines(newScrambledLines)

      const isUnscrambled = newScrambledLines.every(lineNode => {
        return lineNode.position + 1 === lineNode.lineNumber
      })

      setIsSonnetUnscrambled(isUnscrambled)

      if (document && document.activeElement && document.activeElement.blur) {
        document.activeElement.blur()
      }

      setSelectedLine(null)
    } else {
      setSelectedLine(clickedLine)
    }
  }

  const handleCheckButtonClick = () => {
    setIsCheckModeOn(!isCheckModeOn)
  }

  const shouldDisplayLineTick = line =>
    isSonnetUnscrambled ||
    (isCheckModeOn && line.position + 1 === line.lineNumber)

  const congratsModalContentStyle = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `

  const congratsModalContent = (
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

  return (
    <>
      {showHelpModal && (
        <Modal
          dismissHandler={() => setShowHelpModal(false)}
          content={HelpModalContent}
        />
      )}
      {isSonnetUnscrambled && (
        <Modal content={congratsModalContent} showConfetti />
      )}
      <section css={puzzleContainerStyle}>
        <div css={puzzleStyle}>
          <ShakespeareIcon
            cssProp={css`
              position: absolute;
              bottom: 0;
              right: -90px;
              height: 60%;
            `}
            color={`${BRIGHT_PINK}40`}
          />
          {scrambledLines.map((line, index) => (
            <Line
              someLineIsSelected={Boolean(selectedLine)}
              key={line.lineNumber}
              line={line}
              registerClick={registerClick}
              isSelected={selectedLine === line}
              tabIndex={index + 1}
              displayTick={shouldDisplayLineTick(line)}
            />
          ))}
        </div>
      </section>
      <div css={widgetPanelStyle}>
        <Button onClick={handleCheckButtonClick} text="Check" />
        <Button onClick={() => setShowHelpModal(true)} text="Help" />
      </div>
    </>
  )
}

const solvedLine = css`
  font-size: 10px;

  ${smallMq(`
    font-size: 15px;
  `)}

  margin: 0;
`

const widgetPanelStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`

const linkStyle = css`
  display: block;
  width: 200px;
  margin: 30px auto;
`

const puzzleContainerStyle = css`
  @media (min-width: ${SMALL}) {
    width: 66vw;
    max-width: 500px;
  }
`

const puzzleStyle = css`
  overflow: hidden;
  border-radius: 10px;
  background-color: lightyellow;
  position: relative;
`

export default Game
