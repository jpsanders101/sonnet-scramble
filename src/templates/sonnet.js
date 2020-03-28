import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

export default ({ data }) => {
  const { sonnetsJson: { lines }} = data;  
  return (
    <main>
      <h1>{`Sonnet Page`}</h1>
      <section css={puzzleSection}>
        <div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
          <div css={solvedLine}>
          </div>
        </div>
        <div>
          {lines.map(lineNode => (
            <p css={line}>{lineNode.line}</p>
          ))}
        </div>
      </section>
      <Link to={`/${parseInt(data.sonnetsJson.title) + 1}`}>{`Next`}</Link>
    </main>
  )
}

const line = css`
  color: red;
`;

const solvedLine = css`
  height: 30px;
  width: 80%;
  border: solid hotpink 3px;
  margin: 10px;
`;

const puzzleSection = css`
  display: grid;
  grid-template-columns: 1fr 1fr
`;

export const query = graphql`
  query($title: String!) {
    sonnetsJson(title: {eq: $title}) {
      title
      lines {
        lineNumber
        line
      }
    }
  }
`