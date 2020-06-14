export const BRIGHT_PINK = "#ff3dae"
export const COOL_PINK = "#DF93BC"
export const LIGHT_PINK = "#fc86cb"
export const YELLOW = "yellow"
export const LIGHT_GREEN = "#7fe06c"
export const COOL_BLUE = "#6ccbe0"
export const LILAC = "#8d6ce0"
export const OFF_WHITE = "#f5f5f5"
export const BREAKPOINTS = {
  SMALL: "576PX",
  MEDIUM: "768px",
  LARGE: "992px",
  EXTRA_LARGE: "1200px",
}

const mqFactory = breakpoint => style => `
  @media (min-width: ${breakpoint}) {
    ${style}
  }
`

export const smallMq = mqFactory(BREAKPOINTS.SMALL)
export const mediumMq = mqFactory(BREAKPOINTS.MEDIUM)
export const largeMq = mqFactory(BREAKPOINTS.LARGE)
export const extraLargeMq = mqFactory(BREAKPOINTS.EXTRA_LARGE)
