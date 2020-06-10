import React from "react"
import InfoIcon from "@material-ui/icons/Info"
import { text, optionsKnob as options } from "@storybook/addon-knobs"

import TooltipCo from "./tooltipCo"

export default {
  title: "Components|Tooltip",
  decorators: [
    (storyFn) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 100,
          alignItems: "center",
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
  parameters: {
    info: {
      info: { inline: true },
      source: false,
      text: `
        ..... This component has no more styles .....
      `,
    },
  },
}

const label = "Placement"
const valuesObj = {
  bottom: "bottom",
  left: "left",
  right: "right",
  top: "top",
}
const defaultValue = "info"
const optionsObj = {
  display: "inline-radio",
}

export const Tooltip = () => (
  <TooltipCo
    value={text("Set text", "Text tooltip")}
    placement={options(label, valuesObj, defaultValue, optionsObj)}
  >
    <InfoIcon fontSize="large" />
  </TooltipCo>
)
