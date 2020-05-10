import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Line from "./line"
import { BREAKPOINTS, YELLOW, BRIGHT_PINK } from "../constants/styles"
import rightArrowSvg from "../../assets/arrow.svg"

const { MEDIUM, SMALL, LARGE } = BREAKPOINTS;

export default ({ lines, title }) => {
  // TODO change name 'solved lines'
  const mappedScrambledLines = lines.map((line, index) => ({
    line,
    position: index,
  }))
  const [scrambledLines, setScrambledLines] = useState(mappedScrambledLines)

  const [selectedLine, setSelectedLine] = useState(null)

  const [isSonnetUnscrambled, setIsSonnetUnscrambled] = useState(false)

  const nextSonnet = parseInt(title) + 1;

  const registerClick = clickedLine => {
    if (selectedLine) {
      const newScrambledLines = [ ...scrambledLines ];
      newScrambledLines.splice(selectedLine.position, 1);
      const reorderedScrambledLines = [
        ...scrambledLines.slice(0, clickedLine.position),
        selectedLine,
        ...scrambledLines.slice(clickedLine.position)
      ].map((line, position) => ({ ...line, position }));

      setScrambledLines(newScrambledLines)

      const isUnscrambled = newScrambledLines.every(lineNode => {
        return (
          !!lineNode.line && lineNode.position + 1 === lineNode.line.lineNumber
        )
      })

      setIsSonnetUnscrambled(isUnscrambled)

      setSelectedLine(null)
    } else {
      if (clickedLine.line) {
        setSelectedLine(clickedLine)
      }
    }
  }

  return (
    <div>
      {isSonnetUnscrambled && (
      <h2 css={correctMessageStyle}>
        <span css={correctMessageTextStyle}>
          {`Correct!`}
        </span>
        {nextSonnet !== 155 && (
          <Link css={linkStyle} to={`/${nextSonnet}`}>
            <div css={linkContainerStyle}>
              <img css={rightArrowStyle} src={rightArrowSvg} alt="Right arrow" />
            </div>
          </Link>
        )}
      </h2>
      )}    
      <section css={puzzleSectionStyle}>
        <div css={solutionSectionContainerStyle}>
          <div css={solutionSectionStyle}>
            {scrambledLines.map((solvedLine, index) => (
              <Line
                key={solvedLine.position}
                line={solvedLine}
                registerClick={registerClick}
                isSelected={selectedLine === solvedLine}
                setType="solution"
                tabIndex={index + 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const rightArrowStyle = css`
  height: 50px;
`;

const linkContainerStyle = css`
margin: 0 auto;
  width: 66%;
  background: ${YELLOW};
  border-radius: 20px;
  display: flex;
  height: 50px;
  width: 50px;
  justify-content: space-evenly;
  align-items: center;
  font-family: Carmen;
  border: solid 3px #FFFFFF00;

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
`

const scrambleSectionStyle = css`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const puzzleSectionStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${MEDIUM}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const solutionSectionContainerStyle = css`
  display: flex;
  justify-content: center;
`;

const solutionSectionStyle = css`
  overflow: hidden;
  max-width: 500px;
  width: 100%;
  margin: 10px;
  border-radius: 10px;
  background-color: lightyellow;
`;
