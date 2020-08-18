import React, { useState } from "react"
import { css } from "@emotion/core"
import Line from "./line"
import { BRIGHT_PINK, BREAKPOINTS } from "../constants/styles"
import Modal from "./modal"

import ShakespeareIcon from "./shakespeareIcon"
import Button from "./button"
import HelpModalContent from "./helpModalContent"
import CongratsModalContent from "./congratulationsModalContent"

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

  return (
    <>
      {showHelpModal && (
        <Modal
          dismissHandler={() => setShowHelpModal(false)}
          content={<HelpModalContent />}
        />
      )}
      {isSonnetUnscrambled && (
        <Modal
          content={
            <CongratsModalContent
              scrambledLines={scrambledLines}
              nextSonnet={nextSonnet}
            />
          }
          showConfetti
        />
      )}
      <section css={puzzleContainerStyle}>
        <div css={puzzleStyle}>
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
          <ShakespeareIcon
            cssProp={css`
              pointer-events: none;
              position: absolute;
              bottom: 0;
              right: -90px;
              height: 60%;
            `}
            color={`${BRIGHT_PINK}40`}
          />
        </div>
      </section>
      <div css={widgetPanelStyle}>
        <Button onClick={handleCheckButtonClick} text="Check" />
        <Button onClick={() => setShowHelpModal(true)} text="Help" />
      </div>
    </>
  )
}

const widgetPanelStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
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
