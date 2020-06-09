import React from "react"
import { text, boolean, optionsKnob as options } from "@storybook/addon-knobs"

import AlertFull from "./alertFullCo"

export default {
  title: "Components|AlertFull",
  parameters: {
    info: {
      info: { inline: true },
      source: false,
      text: `
        ..... placeholder.....
      `,
    },
  },
}

const label = "Types"
const valuesObj = {
  Info: "info",
  Success: "success",
  Error: "error",
}
const defaultValue = "info"
const optionsObj = {
  display: "inline-radio",
}
// const groupId = "GROUP-ID1"

export const AlertFullScreen = () => {
  return (
    <AlertFull
      type={options(label, valuesObj, defaultValue, optionsObj)}
      visible={boolean("Set checked", true)}
      message={text("Set text alert", "Info Alert")}
    />
  )
}
