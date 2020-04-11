import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { BRIGHT_PINK, YELLOW } from "../constants/styles"
import shakespeareSvg from "../../assets/shakespeare.svg"
import rightArrowSvg from "../../assets/arrow.svg"

export default () => (
  <Layout>
    <div css={backgroundContainerStyle}>
      <img css={shakespeareImgStyle} src={shakespeareSvg} alt="Shakespeare‘s head" />
    </div>
    <div css={contentContainerStyle}>
      <div css={headingContainerStyle}>
        <h1 css={headingStyleOne}><span css={headingTextStyle}>{`Sonnet`}</span></h1>
        <h1 css={headingStyleTwo}><span css={headingTextStyle}>{`Scramble`}</span></h1>
      </div>
      <div css={textContainerStyle}>
        <div css={textStyle}>
          <p>{`At several times during Shakespeare’s career, the London theatres which were his main livelihood were closed due to outbreaks of the plague.`}</p>
          <p>{`It’s a possible reason why he turned his hand to writing poems that readers could enjoy in privacy when public life became dangerous.`}</p>
          <p>{`A book of 154 Sonnets written by Shakespeare was first published in 1609.`}</p>
          <p>{`Here, they are all scrambled. Can you unscramble them?`}</p>
        </div>
        <Link css={linkStyle} to="/1">
          <div css={linkContainerStyle}>
            <div css={linkTextStyle}>{`Begin`}</div>
            <img css={rightArrowStyle} src={rightArrowSvg} alt="Right arrow" />
          </div>
        </Link>
      </div>
    </div>
  </Layout>
)

const headingContainerStyle = css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 175px;
`;

const headingStyleCommon = `
  margin: 5px 0;
  font-family: impact;
  color: ${BRIGHT_PINK};
`;

const headingStyleOne = css`
  ${headingStyleCommon}
`;
  
const headingStyleTwo = css`
  ${headingStyleCommon}
  align-self: flex-end;
`;

const linkTextStyle = css`
  font-family: impact;
  & span {
    vertical-align: middle;
  }
`;

const rightArrowStyle = css`
  height: 50px;
`;

const textContainerStyle = css`
  margin: 3em 1em;
`;

const headingTextStyle = css`
  background-color: ${YELLOW};
  font-family: impact;
`;

const contentContainerStyle = css`
  position: absolute;
  top: 0;
  margin: 1em;
`;

const backgroundContainerStyle = css`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const shakespeareImgStyle = css`
  position: absolute;
  bottom: 0;
  right: -60%;
  height: 60vh;
`;

const textStyle = css`
  color: black;
  text-shadow: 2px 2px ${YELLOW};
  line-height: 1.25;
  & p {
    margin: 2em 0;
  }
`;

const linkStyle = css`
  color: ${BRIGHT_PINK};
  text-decoration: none;
  font-size: 30px;
`;

const linkContainerStyle = css`
margin: 0 auto;
  width: 66%;
  background: ${YELLOW};
  border-radius: 20px;
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
  font-family: impact;
`;
