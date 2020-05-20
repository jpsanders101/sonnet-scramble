import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Line from "./line"
import ShakespeareIcon from "./shakespeareIcon"
import RightArrowIcon from "./rightArrowIcon"
import { BREAKPOINTS, YELLOW, BRIGHT_PINK } from "../constants/styles"
import rightArrowSvg from "../../assets/arrow.svg"

const { SMALL, LARGE } = BREAKPOINTS;

const Game = ({ lines, title }) => {
  const mappedScrambledLines = lines.map((line, index) => ({
    ...line,
    position: index,
  }))
  const [scrambledLines, setScrambledLines] = useState(mappedScrambledLines)

  const [selectedLine, setSelectedLine] = useState(null)

  const [isSonnetUnscrambled, setIsSonnetUnscrambled] = useState(false)

  const nextSonnet = parseInt(title) + 1;

  const registerClick = clickedLine => {
    if (selectedLine) {
      const selectedLinePosition = selectedLine.position;
      const clickedLinePosition = clickedLine.position;

      const shiftedLine = scrambledLines.splice(selectedLinePosition, 1);
      const chunkOne = scrambledLines.slice(0, clickedLinePosition);
      const chunkTwo = scrambledLines.slice(clickedLinePosition);

      const newScrambledLines = [...chunkOne, ...shiftedLine, ...chunkTwo].map((line, index) => ({ ...line, position: index}));

      setScrambledLines(newScrambledLines)

      const isUnscrambled = newScrambledLines.every(lineNode => {
        return (
          lineNode.position + 1 === lineNode.lineNumber
        )
      })

      setIsSonnetUnscrambled(isUnscrambled)

      if (document && document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }

      setSelectedLine(null)
    } else {
      setSelectedLine(clickedLine)
    }
  }

  return (
    <div> 
      <section css={puzzleContainerStyle}>
        <div css={puzzleStyle}>
          {scrambledLines.map((solvedLine, index) => (
            <Line
              someLineIsSelected={Boolean(selectedLine)}
              key={solvedLine.lineNumber}
              line={solvedLine}
              registerClick={registerClick}
              isSelected={selectedLine === solvedLine}
              tabIndex={index + 1}
            />
          ))}
        </div>
        <div css={widgetPanelStyle}>
            <button css={checkButtonStyle}>
              {'Check'}
            </button>
            <div css={solvedTileStyle}>
              <div>
                {isSonnetUnscrambled ? (
                  <div css={getSolvedStatusStyle(isSonnetUnscrambled)}>
                    {"Unscrambled!"}
                      {nextSonnet !== 155 && (
                        <Link css={linkStyle} to={`/${nextSonnet}`}>
                          <div css={unscrambledLinkContainerStyle}>
                            <img css={rightArrowStyle} src={rightArrowSvg} alt="Right arrow" />
                          </div>
                        </Link>
                      )}
                  </div>
                ) : (
                  <div css={getSolvedStatusStyle(isSonnetUnscrambled)}>
                    {"Scrambled..."}
                    <div css={scrambledLinkContainerStyle}>
                      <RightArrowIcon css={rightArrowStyle} />
                    </div>
                  </div>
                )}
              </div>
              <div css={shakespeareImgStyle}>
                <ShakespeareIcon color={isSonnetUnscrambled ? BRIGHT_PINK: "grey"}/>
              </div>
            </div>
        </div>
        
      </section>
    </div>
  )
}

const checkButtonStyle = css`
  font-family: Carmen;
`;

const solvedTileStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const shakespeareImgStyle = css`
  width: 75px;
`;

const getSolvedStatusStyle = isSonnetUnscrambled => (
  css`
    font-family: Carmen;
    font-size: 20px;
    ${isSonnetUnscrambled ?
      `color: hotpink;`:
      `color: grey;`
    }
  `
);

const widgetPanelStyle = css`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const rightArrowStyle = css`
  height: 30px;
`;

const sharedLinkContainerStyle = `
  margin: 0 auto;
  width: 66%;
  border-radius: 20px;
  display: flex;
  height: 25px;
  width: 25px;
  justify-content: space-evenly;
  align-items: center;
  font-family: Carmen;
  border: solid 3px #FFFFFF00;
`;

const scrambledLinkContainerStyle = css`
    ${sharedLinkContainerStyle}
    background: grey;
`;

const unscrambledLinkContainerStyle = css`
    ${sharedLinkContainerStyle}
    background: ${YELLOW};

    &:hover {
      border: solid 3px ${BRIGHT_PINK};
    }
`;

const linkStyle = css`
  color: ${BRIGHT_PINK};
  text-decoration: none;
  font-size: 30px;
`;

const correctMessageTextStyle = css`
  font-family: Carmen;
  font-size: 50px;
  margin-right: 20px;
  text-decoration: underline;
  @media (min-width: ${SMALL}) {
    font-size: 60px;
  }

  @media (min-width: ${LARGE}) {
    font-size: 80px;
  }
`;

const correctMessageStyle = css`
  font-family: Carmen;
  text-align: center;
  color: ${BRIGHT_PINK};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const puzzleContainerStyle = css`
  margin: 0 auto;
  max-width: 500px;
`;

const puzzleStyle = css`
  overflow: hidden;
  border-radius: 10px;
  background-color: lightyellow;
`;

export default Game;