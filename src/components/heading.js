import React from "react"
import { css } from "@emotion/core"
import { BRIGHT_PINK, BREAKPOINTS, OFF_WHITE } from "../constants/styles"

const { SMALL, LARGE } = BREAKPOINTS

const Heading = ({ text, backgroundColour, fontColour, size, fontSize }) => {
  const config = sizeMapping[size]
  const HeadingTag = config.elem

  return (
    <HeadingTag cssProp={headingStyle(fontColour)}>
      <span css={headingTextSyle(backgroundColour, config.fontSizes, fontSize)}>
        {text}
      </span>
    </HeadingTag>
  )
}

const sizeMapping = {
  h1: {
    elem: ({ children, cssProp }) => <h1 css={cssProp}>{children}</h1>,
    fontSizes: ["50px", "60px", "80px"],
  },
  h2: {
    elem: ({ children, cssProp }) => <h2 css={cssProp}>{children}</h2>,
    fontSizes: ["30px", "40px", "50px"],
  },
}

Heading.defaultProps = {
  text: "",
  backgroundColour: BRIGHT_PINK,
  fontColour: OFF_WHITE,
  size: "h1",
}

export default Heading

const headingStyle = fontColour => css`
  text-align: center;
  margin: 5px auto;
  color: ${fontColour};
`

const headingTextSyle = (backgroundColour, fontSizes, fontSize) => css`
  background-color: ${backgroundColour};
  font-family: Carmen;
  font-size: ${fontSize || fontSizes[0]};

  @media (min-width: ${SMALL}) {
    font-size: ${fontSize || fontSizes[1]};
  }

  @media (min-width: ${LARGE}) {
    font-size: ${fontSize || fontSizes[2]};
  }
`
