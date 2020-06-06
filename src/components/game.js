import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Line from "./line"
import ShakespeareIcon from "./shakespeareIcon"
import RightArrowIcon from "./rightArrowIcon"
import { YELLOW, BRIGHT_PINK, BREAKPOINTS } from "../constants/styles"

const { SMALL, LARGE } = BREAKPOINTS

const Game = ({ lines, title }) => {
  const mappedScrambledLines = lines.map((line, index) => ({
    ...line,
    position: index,
  }))
  const [scrambledLines, setScrambledLines] = useState(mappedScrambledLines)

  const [selectedLine, setSelectedLine] = useState(null)

  const [isSonnetUnscrambled, setIsSonnetUnscrambled] = useState(false)

  const [isCheckModeOn, setIsCheckModeOn] = useState(false)

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
        </div>
      </section>
      <div css={widgetPanelStyle}>
        <button css={checkButtonStyle} onClick={handleCheckButtonClick}>
          {"Check"}
        </button>
        <div css={solvedTileStyle}>
          <div>
            {isSonnetUnscrambled ? (
              <div css={getSolvedStatusStyle(isSonnetUnscrambled)}>
                {"Unscrambled!"}
                {nextSonnet !== 155 && (
                  <Link css={linkStyle} to={`/${nextSonnet}`}>
                    <div css={unscrambledLinkContainerStyle}>
                      <RightArrowIcon color={BRIGHT_PINK} />
                    </div>
                  </Link>
                )}
              </div>
            ) : (
              <div css={getSolvedStatusStyle(isSonnetUnscrambled)}>
                {"Scrambled..."}
                <div css={scrambledLinkContainerStyle}>
                  <RightArrowIcon />
                </div>
              </div>
            )}
          </div>
          <div css={shakespeareImgStyle}>
            <ShakespeareIcon
              color={isSonnetUnscrambled ? BRIGHT_PINK : "grey"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const checkButtonStyle = css`
  font-family: Carmen;
  height: 40px;
  min-width: 60px;
  font-size: 20px;
  color: ${BRIGHT_PINK};
  background-color: white;
  border-radius: 10px;
  border: 3px solid lightgrey;
  position: relative;

  &:active {
    border: 3px solid ${BRIGHT_PINK};
  }

  &:focus {
    outline: none;
    &:after {
      content: " ";
      height: 10px;
      width: 54px;
      border-bottom: 4px solid lightblue;
      position: absolute;
      bottom: -12px;
      left: 0;
    }
  }
`

const solvedTileStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const shakespeareImgStyle = css`
  width: 75px;
`

const getSolvedStatusStyle = isSonnetUnscrambled =>
  css`
    font-family: Carmen;
    font-size: 20px;
    ${isSonnetUnscrambled ? `color: ${BRIGHT_PINK};` : `color: grey;`}
  `

const widgetPanelStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`

const sharedLinkContainerStyle = `
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  height: 25px;
  width: 25px;
  justify-content: space-evenly;
  align-items: center;
  font-family: Carmen;
  border: solid 3px #FFFFFF00;
`

const scrambledLinkContainerStyle = css`
  ${sharedLinkContainerStyle}
  background: grey;
`

const unscrambledLinkContainerStyle = css`
    ${sharedLinkContainerStyle}
    background: ${YELLOW};

    &:hover {
      border: solid 3px ${BRIGHT_PINK};
    }
`

const linkStyle = css`
  color: ${BRIGHT_PINK};
  text-decoration: none;
  font-size: 30px;
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
`

export default Game
