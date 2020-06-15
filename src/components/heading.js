import React from "react"
import { css } from "@emotion/core"
import { BRIGHT_PINK, BREAKPOINTS, OFF_WHITE } from "../constants/styles"

const { SMALL, LARGE } = BREAKPOINTS

const Heading = ({ text, backgroundColour, fontColour, size }) => {
  const config = sizeMapping[size]
  const HeadingTag = config.elem

  return (
    <HeadingTag cssProp={headingStyle(fontColour)}>
      <span css={headingTextSyle(backgroundColour, config.fontSizes)}>
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

const headingTextSyle = (backgroundColour, fontSizes) => css`
  background-color: ${backgroundColour};
  font-family: Carmen;
  font-size: ${fontSizes[0]};

  @media (min-width: ${SMALL}) {
    font-size: ${fontSizes[1]};
  }

  @media (min-width: ${LARGE}) {
    font-size: ${fontSizes[2]};
  }
`
