import React, { useState } from "react"
import { css } from "@emotion/core"
import Line from "./line"

export default ({ lines }) => {
  // TODO map to create this array  
  // TODO change name 'solved lines'  
  const [solvedLines, setSolvedLines] = useState([
    { setType: "solution", lineText: null, position: 0 },
    { setType: "solution", lineText: null, position: 1 },
    { setType: "solution", lineText: null, position: 2 },
    { setType: "solution", lineText: null, position: 3 },
    { setType: "solution", lineText: null, position: 4 },
    { setType: "solution", lineText: null, position: 5 },
    { setType: "solution", lineText: null, position: 6 },
    { setType: "solution", lineText: null, position: 7 },
    { setType: "solution", lineText: null, position: 8 },
    { setType: "solution", lineText: null, position: 9 },
    { setType: "solution", lineText: null, position: 10 },
    { setType: "solution", lineText: null, position: 11 },
    { setType: "solution", lineText: null, position: 12 },
    { setType: "solution", lineText: null, position: 13 },
  ]);

  const mappedScrambledLines = lines.map((line, index) => ({
    line,
    position: index,
    setType: "scramble"
  }));

  const [scrambledLines, setScrambledLines] = useState(mappedScrambledLines);

  const [selectedLine, setSelectedLine] = useState(null);

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
      setSelectedLine(null);

    } else {
      if (clickedLine.line) {
        setSelectedLine(clickedLine);
      }
    }
  }

  return (
    <main>
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