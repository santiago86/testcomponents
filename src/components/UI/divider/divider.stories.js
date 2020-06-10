import React from "react"

import theme from "../../../theme/index"

import DividerCo from "./dividerCo"

export default {
  title: "Components|Divider",
  parameters: {
    info: {
      info: { inline: true },
      source: false,
      text: `
        These are the types of base variants you must send:
        - lightSolidOp
        - lightSolid
        - darkSolid
        - lightDashed
        - darkDashed
        - lightSolidOp
        - darkSolid
      `,
    },
  },
}

export const lightSolidWithOpacity = () => (
  <div style={{ margin: "10px", height: "50px", padding: "25px" }}>
    <DividerCo id="1" base="lightSolidOp" orientation="horizontal" />
  </div>
)

export const lightSolid = () => (
  <div style={{ margin: "10px", height: "50px", padding: "25px" }}>
    <DividerCo id="2" base="lightSolid" orientation="horizontal" />
  </div>
)

export const darkSolid = () => (
  <div
    style={{
      margin: "10px",
      height: "50px",
      padding: "25px",
      background: theme.palette.gradients.gradient3,
    }}
  >
    <DividerCo id="3" base="darkSolid" orientation="horizontal" />
  </div>
)

export const lightDashed = () => (
  <div
    style={{
      margin: "10px",
      height: "50px",
      padding: "25px",
    }}
  >
    <DividerCo id="4" base="lightDashed" orientation="horizontal" />
  </div>
)

export const darkDashed = () => (
  <div
    style={{
      margin: "10px",
      height: "50px",
      padding: "25px",
      background: theme.palette.gradients.gradient3,
    }}
  >
    <DividerCo id="5" base="darkDashed" orientation="horizontal" />
  </div>
)

export const lightSolidOpacityVertical = () => (
  <div
    style={{
      margin: "10px",
      height: "100px",
      width: "20px",
      paddingLeft: "10px",
    }}
  >
    <DividerCo
      id="6"
      base="lightSolidOp"
      orientation="vertical"
      flexItem="flexItem"
    />
  </div>
)

export const darkSolidVertical = () => (
  <div
    style={{
      margin: "10px",
      height: "100px",
      width: "20px",
      paddingLeft: "10px",
      background: theme.palette.gradients.gradient3,
    }}
  >
    <DividerCo
      id="7"
      base="darkSolid"
      orientation="vertical"
      flexItem="flexItem"
    />
  </div>
)
