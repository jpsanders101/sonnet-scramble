import React, { useState } from "react"
import { css } from "@emotion/core"
import Line from "./line"

export default ({ lines }) => {
  const [solvedLines, setSolvedLines] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [scrambledLines, setScrambledLines] = useState([...lines]);

  const [selectedLine, setSelectedLine] = useState(null);

  return (
    <main>
      <h1>{`Sonnet Page`}</h1>
      <section css={puzzleSection}>
        <div>
          {solvedLines.map(solvedLine => (
            <div css={solvedLineStyle}>
              {solvedLine && (
                <span>{solvedLine.line}</span>
              )}
            </div>
          ))}
        </div>
        <div>
          {scrambledLines.map(lineNode => (
            <Line setSelectedLine={setSelectedLine} line={lineNode} isSelected={selectedLine === lineNode.lineNumber} />
          ))}
        </div>
      </section>
    </main>
  )
}

const solvedLineStyle = css`
  height: 30px;
  width: 80%;
  border: solid hotpink 3px;
  margin: 10px;
`;

const puzzleSection = css`
  display: grid;
  grid-template-columns: 1fr 1fr
`;