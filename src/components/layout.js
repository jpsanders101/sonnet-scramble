import React from "react"
import { css } from "@emotion/core"
import "../../assets/global.css"

const Layout = ({ children }) => <main css={layoutStyle}>{children}</main>

const layoutStyle = css`
  padding: 5px;
  & * {
    font-family: Palatino, Georgia, serif;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  height: 100vh;
`

export default Layout
