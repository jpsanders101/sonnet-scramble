import React, { useState } from "react"
import { css } from "@emotion/core"
import Line from "./line"

export default ({ lines }) => {
  // TODO map to create this array  
  // TODO change name 'solved lines'  
  const [solvedLines, setSolvedLines] = useState([
    { setType: "solution", line: null, position: 0 },
    { setType: "solution", line: null, position: 1 },
    { setType: "solution", line: null, position: 2 },
    { setType: "solution", line: null, position: 3 },
    { setType: "solution", line: null, position: 4 },
    { setType: "solution", line: null, position: 5 },
    { setType: "solution", line: null, position: 6 },
    { setType: "solution", line: null, position: 7 },
    { setType: "solution", line: null, position: 8 },
    { setType: "solution", line: null, position: 9 },
    { setType: "solution", line: null, position: 10 },
    { setType: "solution", line: null, position: 11 },
    { setType: "solution", line: null, position: 12 },
    { setType: "solution", line: null, position: 13 },
  ]);

  const mappedScrambledLines = lines.map((line, index) => ({
    line,
    position: index,
    setType: "scramble"
  }));

  const [scrambledLines, setScrambledLines] = useState(mappedScrambledLines);

  const [selectedLine, setSelectedLine] = useState(null);

  const [isSonnetUnscrambled, setIsSonnetUnscrambled] = useState(false);

  const registerClick = (clickedLine) => {
    if (selectedLine) {
      const selectedLineContents = { ...selectedLine.line };
      const clickedLineContents = { ...clickedLine.line };

      const newSolvedLines = [...solvedLines];
      const newScrambledLines = [...scrambledLines];

      const mapping = {
        solution: newSolvedLines,
        scramble: newScrambledLines
      };

      mapping[selectedLine.setType][selectedLine.position].line = clickedLineContents;
      mapping[clickedLine.setType][clickedLine.position].line = selectedLineContents;

      setSolvedLines(newSolvedLines);
      setScrambledLines(newScrambledLines);

      const isUnscrambled = newSolvedLines.every(lineNode => {
        return !!lineNode.line && lineNode.position + 1 === lineNode.line.lineNumber;
      })

      setIsSonnetUnscrambled(isUnscrambled);

      setSelectedLine(null);

    } else {
      if (clickedLine.line) {
        setSelectedLine(clickedLine);
      }
    }
  }

  return (
    <main>
      {isSonnetUnscrambled && (
        <div>{`Correct!`}</div>
      )}
      <section css={puzzleSection}>
        <div>
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

const puzzleSection = css`
  display: grid;
  grid-template-columns: 1fr 1fr
`;