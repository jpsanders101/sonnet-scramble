import React, { useState } from "react"
import { css } from "@emotion/core"
import Line from "./line"
import { BREAKPOINTS, YELLOW } from "../constants/styles"

const { MEDIUM } = BREAKPOINTS;

export default ({ lines }) => {
  // TODO change name 'solved lines'
  const initialSolutionLines = Array(14)
    .fill({ setType: "solution", line: null })
    .map((lineNode, index) => ({ ...lineNode, position: index }))
  const [solvedLines, setSolvedLines] = useState(initialSolutionLines)

  const mappedScrambledLines = lines.map((line, index) => ({
    line,
    position: index,
    setType: "scramble",
  }))

  const [scrambledLines, setScrambledLines] = useState(mappedScrambledLines)

  const [selectedLine, setSelectedLine] = useState(null)

  const [isSonnetUnscrambled, setIsSonnetUnscrambled] = useState(false)

  const registerClick = clickedLine => {
    if (selectedLine) {
      const selectedLineContents = { ...selectedLine.line }
      const clickedLineContents = { ...clickedLine.line }

      const newSolvedLines = [...solvedLines]
      const newScrambledLines = [...scrambledLines]

      const mapping = {
        solution: newSolvedLines,
        scramble: newScrambledLines,
      }

      mapping[selectedLine.setType][
        selectedLine.position
      ].line = clickedLineContents
      mapping[clickedLine.setType][
        clickedLine.position
      ].line = selectedLineContents

      setSolvedLines(newSolvedLines)
      setScrambledLines(newScrambledLines)

      const isUnscrambled = newSolvedLines.every(lineNode => {
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
    <main>
      {isSonnetUnscrambled && <div>{`Correct!`}</div>}
      <section css={puzzleSectionStyle}>
        <div css={solutionSectionContainerStyle}>
          <div css={solutionSectionStyle}>
            {solvedLines.map(solvedLine => (
              <Line
                key={`solved-${solvedLine.position}`}
                line={solvedLine}
                registerClick={registerClick}
                isSelected={selectedLine === solvedLine}
                setType="solution"
              />
            ))}
          </div>
        </div>
        <div>
          {scrambledLines.map(lineNode => (
            <Line
              key={`scrambled-${lineNode.position}`}
              setSelectedLine={setSelectedLine}
              line={lineNode}
              isSelected={selectedLine === lineNode}
              registerClick={registerClick}
              setType="scramble"
            />
          ))}
        </div>
      </section>
    </main>
  )
}

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
  max-width: 500px;
  width: 100%;
  margin: 10px;
  border-radius: 20px;
  background-color: lightyellow;
`;
