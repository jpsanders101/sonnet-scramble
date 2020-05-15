import React from "react";
import { css } from "@emotion/core"
import { OFF_WHITE } from "../constants/styles.js";
import "../../assets/global.css";

const Layout = ({ children }) => <main css={layoutStyle}>{children}</main>

const layoutStyle = css`
  background-color: ${OFF_WHITE};
  height: 100vh;
  padding: 5px;
  & * {
    font-family: Palatino, Georgia, serif;
  }
`;

export default Layout;