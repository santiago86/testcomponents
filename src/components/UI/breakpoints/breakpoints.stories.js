import React from "react"

import BreakpointsCo from "./breakpointsCo"

export default {
  title: "Components|Breakpoints",
  parameters: {
    info: {
      info: { inline: true },
      source: false,
      text: `
      This is just a example of how breakpoints look like
      Each breakpoint (a key) matches with a fixed screen width (a value):

        - xs, extra-small: 0px
        - sm, small: 600px
        - md, medium: 960px
        - lg, large: 1280px
        - xl, extra-large: 1920px
        
      `,
    },
  },
}

export const BreakpointsExample = () => <BreakpointsCo />
